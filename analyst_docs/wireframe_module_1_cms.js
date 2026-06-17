const modules = [
    'dashboards',
    'pdh-category', 'pdh-attribute', 'pdh-sku', 'pdh-package', 'pdh-price', 'pdh-fee', // PDH
    'set-area', // Settings
    'pages', 'landing', 'sections', 'blocks', 'cms-menu', 'banner', 'news', 'faq', 'cms-package', 'cms-display', 'cms-payment', 'cms-popup', // CMS
    'sys-roles', 'sys-users', 'sys-permissions', // Hệ thống
    'user-profile' // Trang cá nhân (gộp cả đổi mật khẩu)
];

const titles = {
    'dashboards': '📊 Dashboards',
    'pdh-sku': 'Quản lý SKUs', 'pdh-package': 'Gói bán & Giá & Phí',
    'pdh-price': 'Cấu hình giá bán', 'pdh-fee': 'Bảng quản lý phí',
    'pdh-category': 'Danh mục', 'pdh-attribute': 'Đặc tính', 'set-area': 'Khu vực bán',
    'pages': 'Quản lý Trang (CMS)', 'landing': 'Landing Page - LDP (CMS)',
    'sections': 'Quản lý Sections (CMS)', 'blocks': 'Quản lý Blocks (CMS)',
    'banner': 'Quản lý Banner (CMS)',
    'news': 'Quản lý Tin tức (CMS)',
    'faq': 'Quản lý FAQ (CMS)',
    'cms-package': 'Marketing Gói Bán (CMS)', 'cms-display': 'Cài đặt Hiển thị (CMS)', 'cms-payment': '💳 Phương thức Thanh toán', 'cms-popup': 'Quản lý Popup (CMS)',
    'cms-menu': 'Quản lý Menu (CMS)',
    'sys-roles': '🏷 Quản lý Vai trò',
    'sys-users': '👤 Quản lý Người dùng',
    'sys-permissions': '🔑 Phân quyền tính năng',
    'user-profile': '👤 Thông tin tài khoản'
};

// ===== THÔNG TIN USER VÀ ĐĂNG NHẬP/ĐĂNG XUẤT =====
let currentUser = {
    fullname: 'Admin User',
    email: 'admin@fpt.com.vn',
    avatarUrl: '',
    password: 'admin',
    channel: 'Global'
};

function toggleUserDropdown(event) {
    if (event) event.stopPropagation();
    const dropdown = document.getElementById('user-dropdown-list');
    if (!dropdown) return;
    const isVisible = dropdown.style.display === 'block';
    dropdown.style.display = isVisible ? 'none' : 'block';

    // Ẩn channel dropdown nếu đang mở
    const chanDropdown = document.getElementById('channel-dropdown-list');
    if (chanDropdown) chanDropdown.style.display = 'none';
}

// Đóng dropdown khi click ra ngoài
window.addEventListener('click', function (e) {
    const userDropdown = document.getElementById('user-dropdown-list');
    const wrapper = document.getElementById('user-profile-wrapper');
    if (userDropdown && wrapper && !wrapper.contains(e.target)) {
        userDropdown.style.display = 'none';
    }

    const chanDropdown = document.getElementById('channel-dropdown-list');
    const chanWrapper = document.getElementById('admin-channel-selector-wrapper');
    if (chanDropdown && chanWrapper && !chanWrapper.contains(e.target)) {
        chanDropdown.style.display = 'none';
    }
});

function handleUserLogout(event) {
    if (event) event.stopPropagation();
    // Ẩn dropdown
    const dropdown = document.getElementById('user-dropdown-list');
    if (dropdown) dropdown.style.display = 'none';
    showLdpToast('Đăng xuất tài khoản thành công! (Hệ thống Demo)');
}

// Chuyển tab bên trong trang Thông tin tài khoản
function switchProfileTab(tab) {
    const infoPanel = document.getElementById('profile-tab-info');
    const pwdPanel = document.getElementById('profile-tab-password');
    const btnInfo = document.getElementById('profile-tab-btn-info');
    const btnPwd = document.getElementById('profile-tab-btn-password');
    if (tab === 'info') {
        infoPanel.style.display = 'block';
        pwdPanel.style.display = 'none';
        btnInfo.classList.add('active');
        btnPwd.classList.remove('active');
    } else {
        infoPanel.style.display = 'none';
        pwdPanel.style.display = 'block';
        btnInfo.classList.remove('active');
        btnPwd.classList.add('active');
        // Reset form mật khẩu
        document.getElementById('page-profile-old-pwd').value = '';
        document.getElementById('page-profile-new-pwd').value = '';
        document.getElementById('page-profile-confirm-pwd').value = '';
        document.getElementById('page-password-error-msg').style.display = 'none';
    }
}

// Điều hướng sang Trang User Profile
function openUserProfilePage(tab, event) {
    if (event) event.stopPropagation();

    // Ẩn dropdown
    const dropdown = document.getElementById('user-dropdown-list');
    if (dropdown) dropdown.style.display = 'none';

    switchModule('user-profile', 'primary');
    // Fill form dữ liệu thông tin
    document.getElementById('page-profile-fullname').value = currentUser.fullname;
    document.getElementById('page-profile-email').value = currentUser.email;
    document.getElementById('page-profile-channel').value = activeCMSChannel === 'global' ? 'Global' : (activeCMSChannel === 'fpt-telecom' ? 'FPT Telecom' : (activeCMSChannel === 'fpt-play' ? 'FPT Play' : 'FPT Camera'));
    document.getElementById('page-profile-avatar-url').value = currentUser.avatarUrl;
    updatePageProfileAvatarPreview(currentUser.avatarUrl);

    // Mở đúng tab theo tham số (mặc định 'info')
    switchProfileTab(tab === 'password' ? 'password' : 'info');
}

function updatePageProfileAvatarPreview(url) {
    const img = document.getElementById('page-profile-avatar-preview-img');
    const initial = document.getElementById('page-profile-avatar-preview-initial');

    if (url && url.trim() !== '') {
        img.src = url;
        img.style.display = 'block';
        initial.style.display = 'none';
    } else {
        img.style.display = 'none';
        initial.style.display = 'block';

        const name = document.getElementById('page-profile-fullname').value || currentUser.fullname;
        const parts = name.trim().split(' ');
        let initText = 'AU';
        if (parts.length >= 2) {
            initText = (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        } else if (parts.length === 1 && parts[0].length > 0) {
            initText = parts[0].substring(0, 2).toUpperCase();
        }
        initial.innerText = initText;
    }
}

function handlePageProfileAvatarUpload(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('page-profile-avatar-url').value = e.target.result;
            updatePageProfileAvatarPreview(e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function savePageUserProfile() {
    const fullname = document.getElementById('page-profile-fullname').value;
    const email = document.getElementById('page-profile-email').value;
    const avatarUrl = document.getElementById('page-profile-avatar-url').value;

    if (!fullname || !email) {
        showLdpToast('Họ và tên và Email không được để trống!');
        return;
    }

    currentUser.fullname = fullname;
    currentUser.email = email;
    currentUser.avatarUrl = avatarUrl;

    // Cập nhật lên Header
    document.getElementById('user-display-name').innerText = fullname;

    const headerAvatarImg = document.getElementById('user-avatar-img');
    const headerAvatarInit = document.getElementById('user-avatar-initial');

    if (avatarUrl && avatarUrl.trim() !== '') {
        headerAvatarImg.src = avatarUrl;
        headerAvatarImg.style.display = 'block';
        headerAvatarInit.style.display = 'none';
    } else {
        headerAvatarImg.style.display = 'none';
        headerAvatarInit.style.display = 'flex';

        const parts = fullname.trim().split(' ');
        let initText = 'AU';
        if (parts.length >= 2) {
            initText = (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        } else if (parts.length === 1 && parts[0].length > 0) {
            initText = parts[0].substring(0, 2).toUpperCase();
        }
        headerAvatarInit.innerText = initText;
    }

    showLdpToast('Đã lưu cập nhật thông tin cá nhân thành công!');
}

function changePageUserPassword() {
    const oldPwd = document.getElementById('page-profile-old-pwd').value;
    const newPwd = document.getElementById('page-profile-new-pwd').value;
    const confirmPwd = document.getElementById('page-profile-confirm-pwd').value;
    const errorMsg = document.getElementById('page-password-error-msg');

    if (!oldPwd || !newPwd || !confirmPwd) {
        errorMsg.innerText = '❌ Vui lòng nhập đầy đủ thông tin các trường mật khẩu!';
        errorMsg.style.display = 'block';
        return;
    }

    if (oldPwd !== currentUser.password) {
        errorMsg.innerText = '❌ Mật khẩu hiện tại không chính xác!';
        errorMsg.style.display = 'block';
        return;
    }

    if (newPwd.length < 6) {
        errorMsg.innerText = '❌ Mật khẩu mới phải có tối thiểu 6 ký tự!';
        errorMsg.style.display = 'block';
        return;
    }

    if (newPwd !== confirmPwd) {
        errorMsg.innerText = '❌ Xác nhận mật khẩu mới không trùng khớp!';
        errorMsg.style.display = 'block';
        return;
    }

    currentUser.password = newPwd;
    errorMsg.style.display = 'none';
    showLdpToast('Đã đổi mật khẩu tài khoản thành công!');

    // Clear form
    document.getElementById('page-profile-old-pwd').value = '';
    document.getElementById('page-profile-new-pwd').value = '';
    document.getElementById('page-profile-confirm-pwd').value = '';
}

// ===== CHUYỂN KÊNH HỆ THỐNG (TOPBAR DROPDOWN) =====
let activeCMSChannel = 'fpt-telecom';

function toggleChannelDropdown(event) {
    if (event) event.stopPropagation();
    const dropdown = document.getElementById('channel-dropdown-list');
    if (!dropdown) return;
    const isVisible = dropdown.style.display === 'block';
    dropdown.style.display = isVisible ? 'none' : 'block';

    // Ẩn user profile dropdown nếu đang mở
    const userDropdown = document.getElementById('user-dropdown-list');
    if (userDropdown) userDropdown.style.display = 'none';
}

function selectCMSChannel(channelId, channelName, event) {
    if (event) event.stopPropagation();

    activeCMSChannel = channelId;
    const nameEl = document.getElementById('current-active-channel-name');
    if (nameEl) nameEl.innerHTML = channelName;

    // Cập nhật active class của các option
    const opts = document.querySelectorAll('.channel-opt');
    opts.forEach(opt => {
        opt.classList.remove('active');
        // Khôi phục style mặc định inline
        opt.style.color = '#fff';
        opt.style.background = 'transparent';
        opt.style.fontWeight = 'normal';
    });

    // Thiết lập active cho phần tử được chọn
    let clickedOpt = event.currentTarget || event.target;
    if (clickedOpt) {
        clickedOpt.classList.add('active');
        clickedOpt.style.color = '#ff8c42';
        clickedOpt.style.background = 'rgba(255,107,0,0.15)';
        clickedOpt.style.fontWeight = '600';
    }

    // Đóng dropdown
    const dropdown = document.getElementById('channel-dropdown-list');
    if (dropdown) dropdown.style.display = 'none';

    // Thông báo
    if (typeof showLdpToast === 'function') {
        showLdpToast('Đã chuyển sang kênh dữ liệu: ' + channelName);
    }
}

// Tự động đóng dropdown khi click ra ngoài
document.addEventListener('click', function (event) {
    const wrapper = document.getElementById('admin-channel-selector-wrapper');
    const dropdown = document.getElementById('channel-dropdown-list');
    if (dropdown && dropdown.style.display === 'block' && wrapper && !wrapper.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});

function toggleMenuGroup(groupId, parentEl) {
    const children = document.getElementById(groupId);
    const isOpen = children.classList.contains('open');
    children.classList.toggle('open', !isOpen);
    parentEl.classList.toggle('open', !isOpen);
}

function switchModule(modName, theme) {
    // Update Sidebar UI — xóa active trên cả menu-item và menu-child
    modules.forEach(m => {
        let el = document.getElementById('menu-' + m);
        if (el) el.classList.remove('active');
    });
    // Các tab con (price, fee) giữ sidebar item của package active
    const pdhSubTabs = ['pdh-price', 'pdh-fee'];
    const sidebarTarget = pdhSubTabs.includes(modName) ? 'pdh-package' : modName;
    let activeMenuEl = document.getElementById('menu-' + sidebarTarget);
    if (activeMenuEl) activeMenuEl.classList.add('active');

    // Update Topbar Title
    document.getElementById('topbar-title').innerText = titles[modName];

    // Adjust topbar title color based on module
    if (theme === 'warning') document.getElementById('topbar-title').style.color = '#fbbf24';
    else if (theme === 'success') document.getElementById('topbar-title').style.color = '#10b981';
    else if (theme === 'purple') document.getElementById('topbar-title').style.color = '#a855f7';
    else document.getElementById('topbar-title').style.color = '#fff';

    // Show appropriate module view
    modules.forEach(m => document.getElementById('mod-' + m).classList.remove('active'));
    document.getElementById('mod-' + modName).classList.add('active');

    // News module initialization
    if (modName === 'news') {
        updateNewsStats();
        const activeTab = document.querySelector('#mod-news .tabs .tab.active');
        if (activeTab) {
            if (activeTab.innerText.includes('Quản lý Tags')) {
                renderNewsTagsTable();
                closeNewsTagForm();
            } else if (activeTab.innerText.includes('Cấu hình Thông tin hay')) {
                syncTagMappingToSku();
                renderTagMappingTable();
                resetTagConfig();
            }
        }
    }

    // FAQ module initialization
    if (modName === 'faq') {
        renderFaqTable();
    }

    // Menu module initialization
    if (modName === 'cms-menu') {
        cmsMenuShowList();
        cmsMenuRender(cmsMenuData);
    }

    // Phân quyền initialization
    if (modName === 'sys-users') sysUsersRender();
    if (modName === 'sys-permissions') sysPermRender();

    // Payment module initialization
    if (modName === 'cms-payment') {
        renderPaymentMethodsSidebar();
        renderPaymentMethodDetail();
    }

    // Topbar màu tím cho module hệ thống
    if (['sys-roles', 'sys-users', 'sys-permissions'].includes(modName)) {
        document.getElementById('topbar-title').style.color = '#c084fc';
    }
}

// ===== LOGIC PHÂN QUYỀN =====

function sysRolesShowCreate() {
    document.getElementById('sys-roles-list').style.display = 'none';
    document.getElementById('sys-roles-form').style.display = 'block';
}

let editingSysUserIndex = null;

const sysUsersData = [
    { name: 'Nguyễn Thị Thùy', email: 'thuy.nguyen@fpt.vn', phone: '0901234567', avatarUrl: '', role: 'Admin CMS', roleColor: '#FB923C', roleBg: 'rgba(249,115,22,0.12)', status: 'active', channel: 'Global', lastLogin: '25/05/2026 08:41' },
    { name: 'Trần Minh Khoa', email: 'khoa.tran@fpt.vn', phone: '0987654321', avatarUrl: '', role: 'Biên tập viên', roleColor: '#34d399', roleBg: 'rgba(16,185,129,0.12)', status: 'active', channel: 'FPT Telecom', lastLogin: '25/05/2026 07:55' },
    { name: 'Lê Thị Hương', email: 'huong.le@fpt.vn', phone: '0912345678', avatarUrl: '', role: 'Biên tập viên', roleColor: '#34d399', roleBg: 'rgba(16,185,129,0.12)', status: 'active', channel: 'FPT Play', lastLogin: '24/05/2026 16:20' },
    { name: 'Phạm Văn Đức', email: 'duc.pham@fpt.vn', phone: '0933344455', avatarUrl: '', role: 'Người duyệt', roleColor: '#fbbf24', roleBg: 'rgba(245,158,11,0.12)', status: 'active', channel: 'FPT Camera', lastLogin: '23/05/2026 14:10' },
    { name: 'Hoàng Thị Mai', email: 'mai.hoang@fpt.vn', phone: '0944455566', avatarUrl: '', role: 'Viewer', roleColor: '#94a3b8', roleBg: 'rgba(100,116,139,0.15)', status: 'locked', channel: 'FPT Telecom', lastLogin: '10/05/2026 09:00' },
    { name: 'Bùi Quốc Hùng', email: 'hung.bui@fpt.vn', phone: '0955566677', avatarUrl: '', role: 'Biên tập viên', roleColor: '#34d399', roleBg: 'rgba(16,185,129,0.12)', status: 'active', channel: 'FPT Telecom', lastLogin: '25/05/2026 08:05' },
];

function sysUsersRender() {
    const tbody = document.getElementById('sys-users-tbody');
    if (!tbody) return;
    tbody.innerHTML = sysUsersData.map((u, i) => {
        const statusBadge = u.status === 'active'
            ? '<span style="background:rgba(16,185,129,0.12);color:#34d399;padding:3px 12px;border-radius:20px;font-size:12px;font-weight:600;">Hoạt động</span>'
            : '<span style="background:rgba(239,68,68,0.1);color:#f87171;padding:3px 12px;border-radius:20px;font-size:12px;font-weight:600;">Tạm khóa</span>';
        const avatar = u.name.split(' ').map(w => w[0]).slice(-2).join('').toUpperCase();
        const channelBadge = `<span style="background:rgba(255,255,255,0.06);color:var(--text-secondary);padding:3px 12px;border-radius:20px;font-size:12.5px;font-weight:500;">${u.channel || 'Global'}</span>`;

        const avatarHtml = u.avatarUrl
            ? `<img src="${u.avatarUrl}" style="width:36px;height:36px;border-radius:50%;object-fit:cover;flex-shrink:0;">`
            : `<div style="width:36px;height:36px;border-radius:50%;background:var(--primary-gradient);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#fff;flex-shrink:0;">${avatar}</div>`;

        return `<tr style="border-bottom:1px solid var(--border-glass);" onmouseover="this.style.background='rgba(255,255,255,0.03)'" onmouseout="this.style.background=''">
                    <td style="padding:12px 20px;color:var(--text-muted);">${i + 1}</td>
                    <td style="padding:12px 20px;">
                        <div style="display:flex;align-items:center;gap:10px;">
                            ${avatarHtml}
                            <div style="display:flex;flex-direction:column;">
                                <span style="font-weight:600;">${u.name}</span>
                                <span style="font-size:11px;color:var(--text-muted);margin-top:2px;">📱 ${u.phone || 'Chưa cập nhật'}</span>
                            </div>
                        </div>
                    </td>
                    <td style="padding:12px 20px;color:var(--text-muted);font-size:13px;">${u.email}</td>
                    <td style="padding:12px 20px;"><span style="background:${u.roleBg};color:${u.roleColor};padding:3px 12px;border-radius:20px;font-size:12.5px;font-weight:600;">${u.role}</span></td>
                    <td style="padding:12px 20px;">${channelBadge}</td>
                    <td style="padding:12px 20px;text-align:center;">${statusBadge}</td>
                    <td style="padding:12px 20px;color:var(--text-muted);font-size:13px;">${u.lastLogin}</td>
                    <td style="padding:12px 20px;text-align:center;">
                        <div style="display:flex;gap:6px;justify-content:center;">
                            <button class="btn btn-sm" onclick="openEditSysUserModal(${i})" style="background:rgba(249,115,22,0.12);color:#FB923C;border:none;padding:5px 10px;" title="Chỉnh sửa">✏️</button>
                            <button class="btn btn-sm" onclick="toggleSysUserStatus(${i})" style="background:rgba(245,158,11,0.1);color:#fbbf24;border:none;padding:5px 10px;" title="${u.status === 'active' ? 'Khóa' : 'Mở khóa'}">${u.status === 'active' ? '🔒' : '🔓'}</button>
                        </div>
                    </td>
                </tr>`;
    }).join('');
}

function updateModalUserAvatarPreview(url) {
    const img = document.getElementById('modal-user-avatar-preview-img');
    const initial = document.getElementById('modal-user-avatar-preview-initial');
    if (url && url.trim() !== '') {
        img.src = url;
        img.style.display = 'block';
        initial.style.display = 'none';
    } else {
        img.style.display = 'none';
        initial.style.display = 'block';
        const name = document.getElementById('modal-user-fullname').value || 'U';
        initial.innerText = name.split(' ').map(w => w[0]).slice(-2).join('').toUpperCase();
    }
}

function handleModalUserAvatarUpload(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('modal-user-avatar-url').value = e.target.result;
            updateModalUserAvatarPreview(e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function closeSysUserModal() {
    document.getElementById('modal-add-user').style.display = 'none';
    editingSysUserIndex = null;
}

function openEditSysUserModal(index) {
    editingSysUserIndex = index;
    const u = sysUsersData[index];

    document.getElementById('modal-user-title').innerText = 'Chỉnh sửa Profile & Tài khoản';
    document.getElementById('modal-user-fullname').value = u.name;
    document.getElementById('modal-user-phone').value = u.phone || '';
    document.getElementById('modal-user-email').value = u.email;
    document.getElementById('modal-user-role').value = u.role;
    document.getElementById('modal-user-channel').value = u.channel || 'Global';
    document.getElementById('modal-user-avatar-url').value = u.avatarUrl || '';

    if (u.status === 'active') {
        document.getElementById('modal-user-status-active').checked = true;
    } else {
        document.getElementById('modal-user-status-locked').checked = true;
    }

    updateModalUserAvatarPreview(u.avatarUrl);
    document.getElementById('modal-add-user').style.display = 'flex';
}

function toggleSysUserStatus(index) {
    const u = sysUsersData[index];
    u.status = u.status === 'active' ? 'locked' : 'active';
    sysUsersRender();
    showLdpToast(`Đã thay đổi trạng thái hoạt động của tài khoản!`);
}

function saveSysUser() {
    const name = document.getElementById('modal-user-fullname').value;
    const phone = document.getElementById('modal-user-phone').value;
    const email = document.getElementById('modal-user-email').value;
    const role = document.getElementById('modal-user-role').value;
    const channel = document.getElementById('modal-user-channel').value;
    const avatarUrl = document.getElementById('modal-user-avatar-url').value;
    const status = document.getElementById('modal-user-status-active').checked ? 'active' : 'locked';

    if (!name || !email || !role) {
        showLdpToast('Vui lòng nhập đầy đủ các trường bắt buộc!');
        return;
    }

    const roleMapColors = {
        'Admin CMS': { color: '#FB923C', bg: 'rgba(249,115,22,0.12)' },
        'Biên tập viên': { color: '#34d399', bg: 'rgba(16,185,129,0.12)' },
        'Người duyệt': { color: '#fbbf24', bg: 'rgba(245,158,11,0.12)' },
        'Viewer': { color: '#94a3b8', bg: 'rgba(100,116,139,0.15)' }
    };

    const rStyle = roleMapColors[role] || { color: '#fff', bg: 'rgba(255,255,255,0.1)' };

    if (editingSysUserIndex !== null) {
        const u = sysUsersData[editingSysUserIndex];
        u.name = name;
        u.phone = phone;
        u.email = email;
        u.role = role;
        u.roleColor = rStyle.color;
        u.roleBg = rStyle.bg;
        u.channel = channel;
        u.avatarUrl = avatarUrl;
        u.status = status;
        showLdpToast('Cập nhật thông tin Profile người dùng thành công!');
    } else {
        sysUsersData.push({
            name: name,
            phone: phone,
            email: email,
            role: role,
            roleColor: rStyle.color,
            roleBg: rStyle.bg,
            channel: channel,
            avatarUrl: avatarUrl,
            status: status,
            lastLogin: 'Chưa đăng nhập'
        });
        showLdpToast('Thêm mới tài khoản người dùng thành công!');
    }

    sysUsersRender();
    closeSysUserModal();
}

const sysPermModules = [
    { group: 'QUẢN LÝ SẢN PHẨM', name: 'Thông tin sản phẩm' },
    { group: 'CẤU TRÚC TRANG', name: 'Quản lý Trang (Pages)' },
    { group: '', name: 'Quản lý Sections' },
    { group: '', name: 'Quản lý Blocks' },
    { group: '', name: 'Landing Page (LDP)' },
    { group: '', name: 'Quản lý Menu' },
    { group: 'MEDIA & QUẢNG BÁ', name: 'Quản lý Banner' },
    { group: '', name: 'Quản lý Popup' },
    { group: 'BÀI VIẾT & NỘI DUNG', name: 'Quản lý Tin tức' },
    { group: '', name: 'Quản lý FAQ' },
    { group: '', name: 'Cấu hình Thông tin hay' },
    { group: 'CÀI ĐẶT & HỆ THỐNG', name: 'Thông tin checkout' },
    { group: '', name: 'Quản lý Người dùng' },
    { group: '', name: 'Phân quyền tính năng' },
];

// Ma trận quyền theo vai trò: { màn hình: [superAdmin[4], adminCMS[4], bienTap[4], viewer[4]] }
// Mỗi mảng con: [xem, tao, sua, xoa]
const sysPermByRole = {
    'Thông tin sản phẩm': [[1, 1], [1, 1], [1, 0], [1, 0]],
    'Quản lý Trang (Pages)': [[1, 1], [1, 1], [1, 1], [1, 0]],
    'Quản lý Sections': [[1, 1], [1, 1], [1, 1], [1, 0]],
    'Quản lý Blocks': [[1, 1], [1, 1], [1, 1], [1, 0]],
    'Landing Page (LDP)': [[1, 1], [1, 1], [1, 1], [0, 0]],
    'Quản lý Menu': [[1, 1], [1, 1], [1, 0], [0, 0]],
    'Quản lý Banner': [[1, 1], [1, 1], [1, 1], [1, 0]],
    'Quản lý Popup': [[1, 1], [1, 1], [1, 1], [0, 0]],
    'Quản lý Tin tức': [[1, 1], [1, 1], [1, 1], [1, 0]],
    'Quản lý FAQ': [[1, 1], [1, 1], [1, 1], [1, 0]],
    'Cấu hình Thông tin hay': [[1, 1], [1, 1], [1, 1], [0, 0]],
    'Thông tin checkout': [[1, 1], [1, 1], [0, 0], [0, 0]],
    'Quản lý Người dùng': [[1, 1], [1, 1], [0, 0], [0, 0]],
    'Phân quyền tính năng': [[1, 1], [1, 1], [0, 0], [0, 0]],
};

// roleColors: [superAdmin, adminCMS, bienTap, viewer]
const sysRoleColors = ['#c084fc', '#FB923C', '#34d399', '#94a3b8'];

function sysPermRender() {
    const tbody = document.getElementById('sys-perm-tbody');
    if (!tbody) return;
    let html = '';
    let lastGroup = '';
    sysPermModules.forEach(mod => {
        if (mod.group && mod.group !== lastGroup) {
            lastGroup = mod.group;
            html += `<tr style="background:rgba(168,85,247,0.06);">
                        <td colspan="9" style="padding:7px 20px;font-size:11px;font-weight:700;letter-spacing:1px;color:#a78bfa;text-transform:uppercase;border-right:1px solid var(--border-glass);">${mod.group}</td>
                    </tr>`;
        }
        const roles = sysPermByRole[mod.name] || [[1, 1], [0, 0], [0, 0], [0, 0]];
        let cells = '';
        roles.forEach((rp, ri) => {
            const locked = ri === 0;
            rp.forEach((val, ci) => {
                const bl = ci === 0 ? 'border-left:1px solid var(--border-glass);' : '';
                cells += `<td style="padding:10px 4px;text-align:center;${bl}">
                            <input type="checkbox" ${val ? 'checked' : ''} ${locked ? 'disabled title="Super Admin luôn toàn quyền"' : ''}
                                style="width:15px;height:15px;accent-color:${sysRoleColors[ri]};cursor:${locked ? 'not-allowed' : 'pointer'};">
                        </td>`;
            });
        });
        html += `<tr style="border-bottom:1px solid var(--border-glass);" onmouseover="this.style.background='rgba(255,255,255,0.025)'" onmouseout="this.style.background=''">
                    <td style="padding:11px 20px;font-size:13.5px;font-weight:500;border-right:1px solid var(--border-glass);">${mod.name}</td>
                    ${cells}
                </tr>`;
    });
    tbody.innerHTML = html;
}

function sysUserRoleHint(sel) {
    const hint = document.getElementById('role-hint');
    const map = {
        'admin': { color: '#FB923C', bg: 'rgba(249,115,22,0.08)', text: 'Quản lý toàn bộ nội dung CMS, tạo & xóa được. Không chỉnh được phân quyền.' },
        'editor': { color: '#34d399', bg: 'rgba(16,185,129,0.08)', text: 'Tạo & sửa nội dung. Không xóa, không truy cập cài đặt hệ thống.' },
        'viewer': { color: '#94a3b8', bg: 'rgba(100,116,139,0.08)', text: 'Chỉ xem nội dung. Không thực hiện bất kỳ thao tác ghi nào.' },
    };
    if (sel.value && map[sel.value]) {
        const r = map[sel.value];
        hint.style.display = 'block';
        hint.style.background = r.bg;
        hint.style.color = r.color;
        hint.style.borderLeft = `3px solid ${r.color}`;
        hint.innerHTML = `<strong>${sel.options[sel.selectedIndex].text}:</strong> ${r.text}`;
    } else {
        hint.style.display = 'none';
    }
}

// ===== LOGIC QUẢN LÝ MENU =====
const cmsMenuData = [
    { id: 1, pid: 0, level: 0, name: 'Sản phẩm dịch vụ', type: 'category', url: '/tin-tuc', target: '_self', order: 0, date: '29/01/2026 09:40' },
    { id: 2, pid: 1, level: 1, name: 'Internet – Wifi', type: 'page', url: 'internet', target: '_self', order: 1, date: '29/01/2026 09:42' },
    { id: 3, pid: 2, level: 2, name: 'Combo Internet thể thao giải trí', type: 'page', url: 'truyen-hinh-fpt-play', target: '_self', order: 1, date: '29/01/2026 09:55' },
    { id: 4, pid: 2, level: 2, name: 'Internet Wi-Fi 7', type: 'link', url: '#', target: '_self', order: 2, date: '29/01/2026 10:33' },
    { id: 5, pid: 2, level: 2, name: 'Internet cá nhân', type: 'page', url: 'internet/ca-nhan', target: '_self', order: 3, date: '02/02/2026 09:37' },
    { id: 6, pid: 2, level: 2, name: 'Internet gia đình', type: 'page', url: 'internet/gia-dinh', target: '_self', order: 4, date: '03/02/2026 09:43' },
    { id: 7, pid: 2, level: 2, name: 'Internet game thủ', type: 'page', url: 'internet/game-thu', target: '_self', order: 5, date: '03/02/2026 09:55' },
    { id: 8, pid: 2, level: 2, name: 'Internet doanh nghiệp', type: 'page', url: 'internet/doanh-nghiep', target: '_self', order: 6, date: '03/02/2026 09:55' },
    { id: 9, pid: 1, level: 1, name: 'Truyền hình & Giải trí', type: 'page', url: 'truyen-hinh-fpt-play', target: '_self', order: 2, date: '29/01/2026 09:43' },
    { id: 10, pid: 9, level: 2, name: 'FPT Play', type: 'page', url: 'truyen-hinh-fpt-play', target: '_self', order: 1, date: '03/02/2026 09:55' },
    { id: 11, pid: 9, level: 2, name: 'Nâng cấp gói combo thể thao', type: 'link', url: 'https://fpt.vn/nang-cap', target: '_blank', order: 2, date: '03/02/2026 09:56' },
    { id: 12, pid: 9, level: 2, name: 'Combo Internet Ngoại hạng Anh', type: 'link', url: 'https://fpt.vn/ngoai-hang-anh#sectio…', target: '_self', order: 3, date: '03/02/2026 09:57' },
    { id: 13, pid: 9, level: 2, name: 'Lịch thi đấu Ngoại hạng Anh', type: 'link', url: 'https://fpt.vn/ngoai-hang-anh/lich-thi…', target: '_blank', order: 4, date: '03/02/2026 09:58' },
    { id: 14, pid: 1, level: 1, name: 'Thiết bị thông minh', type: 'category', url: '—', target: '_self', order: 3, date: '29/01/2026 09:43' },
    { id: 15, pid: 14, level: 2, name: 'FPT Camera', type: 'page', url: 'fpt-camera', target: '_self', order: 1, date: '03/02/2026 09:59' },
    { id: 16, pid: 14, level: 2, name: 'FPT Smart Home', type: 'page', url: 'fpt-smart-home', target: '_self', order: 2, date: '03/02/2026 10:00' },
    { id: 17, pid: 14, level: 2, name: 'Access Point', type: 'page', url: 'access-point', target: '_self', order: 3, date: '03/02/2026 10:00' },
    { id: 18, pid: 14, level: 2, name: 'Smart Tivi', type: 'page', url: 'smart-tivi', target: '_self', order: 4, date: '03/02/2026 10:00' },
    { id: 19, pid: 1, level: 1, name: 'Dịch vụ', type: 'page', url: 'dich-vu-so', target: '_self', order: 4, date: '29/01/2026 09:42' },
    { id: 20, pid: 19, level: 2, name: 'Dịch vụ F-Safe', type: 'page', url: 'dich-vu-f-safe', target: '_self', order: 1, date: '03/02/2026 10:01' },
];

const cmsMenuTypeBadge = {
    'category': '<span style="background:rgba(249,115,22,0.12);color:#FB923C;padding:2px 10px;border-radius:20px;font-size:11.5px;font-weight:600;">category</span>',
    'page': '<span style="background:rgba(16,185,129,0.12);color:#34d399;padding:2px 10px;border-radius:20px;font-size:11.5px;font-weight:600;">page</span>',
    'link': '<span style="background:rgba(245,158,11,0.12);color:#fbbf24;padding:2px 10px;border-radius:20px;font-size:11.5px;font-weight:600;">link</span>',
};

function cmsMenuRender(data) {
    const tbody = document.getElementById('cms-menu-tbody');
    if (!tbody) return;
    tbody.innerHTML = data.map((row, i) => {
        const indent = row.level === 0 ? '' : row.level === 1
            ? '<span style="color:var(--text-muted);margin-right:4px;">└─</span>'
            : '<span style="opacity:0;margin-right:4px;">└─</span><span style="color:var(--text-muted);margin-right:4px;">└─</span>';
        const urlDisplay = row.url.length > 32 ? row.url.slice(0, 32) + '…' : row.url;
        const targetStyle = row.target === '_blank' ? 'color:#fbbf24;' : '';
        return `<tr style="border-bottom:1px solid var(--border-glass); transition:0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.03)'" onmouseout="this.style.background=''">
                    <td style="padding:11px 16px; color:var(--text-muted); font-size:13px;">${i + 1}</td>
                    <td style="padding:11px 16px; font-weight:${row.level === 0 ? '700' : '500'};">${indent}${row.name}</td>
                    <td style="padding:11px 16px;">${cmsMenuTypeBadge[row.type] || row.type}</td>
                    <td style="padding:11px 16px; color:var(--text-muted); font-size:13px; font-family:monospace;">${urlDisplay}</td>
                    <td style="padding:11px 16px; text-align:center; font-size:12.5px; ${targetStyle}">${row.target}</td>
                    <td style="padding:11px 16px; text-align:center; color:var(--text-muted);">${row.order}</td>
                    <td style="padding:11px 16px; color:var(--text-muted); font-size:12.5px;">${row.date}</td>
                    <td style="padding:11px 16px; text-align:center;">
                        <button class="btn btn-sm" style="background:rgba(249,115,22,0.12);color:#FB923C;border:none;padding:5px 10px;" onclick="cmsMenuShowCreate()" title="Chỉnh sửa">✏️</button>
                    </td>
                </tr>`;
    }).join('');
    document.getElementById('cms-menu-count').textContent = `1 – ${data.length} trên tổng ${cmsMenuData.length}`;
}

function cmsMenuFilter() {
    const q = (document.getElementById('cms-menu-search')?.value || '').toLowerCase();
    const filtered = q ? cmsMenuData.filter(r => r.name.toLowerCase().includes(q) || r.url.toLowerCase().includes(q)) : cmsMenuData;
    cmsMenuRender(filtered);
}

function cmsMenuShowCreate() {
    document.getElementById('cms-menu-list').style.display = 'none';
    document.getElementById('cms-menu-form').style.display = 'block';
}

function cmsMenuShowList() {
    document.getElementById('cms-menu-form').style.display = 'none';
    document.getElementById('cms-menu-list').style.display = 'block';
}

// ===== LOGIC QUẢN LÝ TIN TỨC & FAQ TÁCH BIỆT =====

// Chuyển tab cho module Tin tức
function switchNewsTab(tab, element) {
    let tabs = element.parentElement.children;
    for (let i = 0; i < tabs.length; i++) tabs[i].classList.remove('active');
    element.classList.add('active');

    document.getElementById('news-list').style.display = 'none';
    document.getElementById('news-cat-list').style.display = 'none';
    document.getElementById('news-tag-list').style.display = 'none';
    document.getElementById('news-tag-mapping').style.display = 'none';
    document.getElementById('news-item-form').style.display = 'none';
    document.getElementById('news-cat-form').style.display = 'none';

    if (tab === 'list') {
        document.getElementById('news-list').style.display = 'block';
        filterNewsTable();
    } else if (tab === 'category') {
        document.getElementById('news-cat-list').style.display = 'block';
    } else if (tab === 'tag-list') {
        document.getElementById('news-tag-list').style.display = 'block';
        renderNewsTagsTable();
        closeNewsTagForm();
    } else if (tab === 'tag-mapping') {
        document.getElementById('news-tag-mapping').style.display = 'block';
        syncTagMappingToSku();
        renderTagMappingTable();
        resetTagConfig();
    }
}

// ===== LOGIC QUẢN LÝ TAGS TIN TỨC (CRUD) =====
function renderNewsTagsTable(data = newsTagsData) {
    const tbody = document.getElementById('newstags-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    let index = 1;
    for (let id in data) {
        const tag = data[id];
        const tr = document.createElement('tr');
        tr.setAttribute('data-tag-id', tag.id);

        const statusBadge = tag.status === 'Active'
            ? '<span class="badge active newstag-status-badge">Active</span>'
            : '<span class="badge warning newstag-status-badge">Draft</span>';

        // Đếm số bài viết sử dụng tag này
        let articleCount = 0;
        if (typeof mockArticles !== 'undefined') {
            mockArticles.forEach(art => {
                if (art.tag === tag.slug) articleCount++;
            });
        }

        tr.innerHTML = `
                    <td>${index++}</td>
                    <td><strong class="newstag-name" style="color:#fff;">#${tag.name}</strong></td>
                    <td class="newstag-slug">${tag.slug}</td>
                    <td class="text-center newstag-count">${articleCount} bài</td>
                    <td>${statusBadge}</td>
                    <td style="text-align:right;">
                        <button class="btn btn-secondary btn-sm" style="color:var(--primary); border-color:var(--primary);" onclick="editNewsTag('${tag.id}')">Sửa</button>
                        <button class="btn btn-secondary btn-sm" style="color:var(--danger); border-color:var(--danger); margin-left: 5px;" onclick="deleteNewsTag('${tag.id}')">Xóa</button>
                    </td>
                `;
        tbody.appendChild(tr);
    }
}

function filterNewsTagsTable() {
    const kw = document.getElementById('newstags-search-keyword').value.toLowerCase().trim();
    const filtered = {};
    for (let id in newsTagsData) {
        const tag = newsTagsData[id];
        if (!kw || tag.name.toLowerCase().includes(kw) || tag.slug.toLowerCase().includes(kw)) {
            filtered[id] = tag;
        }
    }
    renderNewsTagsTable(filtered);
    showLdpToast('Đã lọc danh sách tags!');
}

function openNewsTagForm() {
    document.getElementById('newstags-form-title').innerText = 'Tạo mới Tag tin tức';
    document.getElementById('newstags-edit-id').value = '';
    document.getElementById('newstags-input-name').value = '';
    document.getElementById('newstags-input-slug').value = '';
    document.getElementById('newstags-input-status').value = 'Active';

    document.getElementById('newstags-list-view').style.display = 'none';
    document.getElementById('news-tag-form').style.display = 'block';
}

function closeNewsTagForm() {
    document.getElementById('newstags-list-view').style.display = 'block';
    document.getElementById('news-tag-form').style.display = 'none';
}

function editNewsTag(id) {
    const tag = newsTagsData[id];
    if (!tag) return;
    document.getElementById('newstags-form-title').innerText = 'Chỉnh sửa Tag tin tức';
    document.getElementById('newstags-edit-id').value = tag.id;
    document.getElementById('newstags-input-name').value = tag.name;
    document.getElementById('newstags-input-slug').value = tag.slug;
    document.getElementById('newstags-input-status').value = tag.status;

    document.getElementById('newstags-list-view').style.display = 'none';
    document.getElementById('news-tag-form').style.display = 'block';
}

function saveNewsTagAction() {
    const name = document.getElementById('newstags-input-name').value.trim();
    const slug = document.getElementById('newstags-input-slug').value.trim();
    const status = document.getElementById('newstags-input-status').value;

    if (!name || !slug) {
        alert('Vui lòng điền đầy đủ các trường bắt buộc!');
        return;
    }

    const id = document.getElementById('newstags-edit-id').value || 'tag-' + (Object.keys(newsTagsData).length + 1);

    newsTagsData[id] = {
        id: id,
        name: name,
        slug: slug,
        status: status
    };

    renderNewsTagsTable();
    closeNewsTagForm();
    showLdpToast('Đã lưu Tag thành công!');
}

function deleteNewsTag(id) {
    if (confirm('Bạn có chắc chắn muốn xóa Tag này không?')) {
        delete newsTagsData[id];
        renderNewsTagsTable();
        showLdpToast('Đã xóa Tag thành công!');
    }
}

// Chuyển tab cho module FAQ
function switchFaqTab(tab, element) {
    // Update tabs UI
    let tabs = element.parentElement.children;
    for (let i = 0; i < tabs.length; i++) tabs[i].classList.remove('active');
    element.classList.add('active');

    // Show/hide views
    if (tab === 'list') {
        document.getElementById('faq-list').style.display = 'block';
        document.getElementById('faq-cat-list').style.display = 'none';
        document.getElementById('faq-item-form').style.display = 'none';
        document.getElementById('faq-cat-form').style.display = 'none';
    } else if (tab === 'category') {
        document.getElementById('faq-list').style.display = 'none';
        document.getElementById('faq-cat-list').style.display = 'block';
        document.getElementById('faq-item-form').style.display = 'none';
        document.getElementById('faq-cat-form').style.display = 'none';
    }
}

// Ẩn/Hiện SEO Accordion
let newsSeoOpen = true;
function toggleNewsSeoAccordion() {
    newsSeoOpen = !newsSeoOpen;
    const content = document.getElementById('news-seo-content');
    const icon = document.getElementById('news-seo-icon');
    if (newsSeoOpen) {
        content.style.display = 'flex';
        icon.innerText = '▼';
    } else {
        content.style.display = 'none';
        icon.innerText = '▲';
    }
}

// Chuyển chuỗi Tiêu đề thành Slug tự động
function convertToSlug(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/[^a-z0-9 -]/g, ''); // Xóa ký tự đặc biệt
    str = str.replace(/\s+/g, '-'); // Thay khoảng trắng bằng -
    str = str.replace(/-+/g, '-'); // Tránh nhiều dấu trừ liên tiếp
    return str;
}

// Mô phỏng Upload File ảnh đại diện Tin tức
function handleArtFileSelect(input) {
    if (input.files && input.files[0]) {
        const file = input.files[0];
        document.getElementById('art-thumb-filename').innerText = file.name;
        // Tạo link blob mô phỏng hoặc dùng URL mặc định
        const fakeUrl = "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=150&q=80";
        document.getElementById('art-thumbnail-url').value = fakeUrl;
        document.getElementById('art-thumb-preview').src = fakeUrl;
        showLdpToast('Đã tải lên ảnh đại diện: ' + file.name);
    }
}

function updateArtThumbnailPreview(url) {
    if (url) {
        document.getElementById('art-thumb-preview').src = url;
        document.getElementById('art-thumb-filename').innerText = url.substring(url.lastIndexOf('/') + 1);
    }
}

// Dữ liệu bài viết mẫu (mock data cho Tin tức)
const newsArticlesData = {
    'news-1': {
        id: 'news-1',
        title: 'Lắp đặt mạng FPT khuyến mãi hè 2026 cực sốc',
        slug: 'lap-mang-fpt-khuyen-mai-he-2026',
        category: 'Tin khuyến mãi',
        author: 'Admin',
        date: '22/05/2026',
        status: 'Active',
        channel: 'fpt-telecom',
        sapo: 'Chào hè rực rỡ với chương trình khuyến mãi lắp đặt mạng cáp quang FPT Telecom cực lớn trong năm 2026. Tặng đến 2 tháng cước sử dụng, miễn phí modem Wi-Fi 6 thế hệ mới.',
        content: 'FPT Telecom trân trọng gửi tới quý khách hàng chương trình khuyến mãi lắp mạng FPT hè 2026 vô cùng hấp dẫn. Theo đó, khách hàng đăng ký mới dịch vụ Internet cáp quang hoặc combo Internet & Truyền hình FPT sẽ được hưởng các ưu đãi đặc quyền:\n1. Trang bị miễn phí Modem Wi-Fi 6 2 băng tần công nghệ mới.\n2. Tặng từ 1 đến 2 tháng cước khi tham gia trả trước từ 6-12 tháng.\n3. Miễn phí hòa mạng và lắp đặt siêu tốc trong 12 giờ.\nVui lòng liên hệ hotline hoặc đăng ký trực tuyến để nhận ưu đãi ngay hôm nay!',
        tags: 'khuyen mai, lap mang fpt, wifi 6',
        seoTitle: 'Khuyến mãi Lắp mạng FPT Hè 2026 mới nhất - Tặng 2 tháng cước',
        seoDesc: 'Đăng ký lắp mạng FPT cáp quang tốc độ cao khuyến mãi hè 2026. Tặng modem wifi 6 thế hệ mới nhất, giảm giá cước hàng tháng, tặng thêm tháng sử dụng miễn phí.',
        seoKeywords: 'lap mang fpt, khuyen mai fpt, wifi fpt, internet fpt',
        thumbUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=150&q=80'
    },
    'news-2': {
        id: 'news-2',
        title: 'FPT Camera ra mắt tính năng nhận diện AI thông minh mới',
        slug: 'fpt-camera-ra-mat-tinh-nang-nhan-dien-ai',
        category: 'Tin công nghệ',
        author: 'Phương Nam',
        date: '20/05/2026',
        status: 'Active',
        channel: 'fpt-camera',
        sapo: 'Công nghệ AI mới tích hợp trên FPT Camera giúp nâng cao khả năng cảnh báo thông minh, phát hiện chuyển động của người và vật nuôi, giảm thiểu báo động giả tới 95%.',
        content: 'FPT Camera chính thức cập nhật phiên bản AI thông minh thế hệ mới tích hợp công nghệ phân tích dữ liệu đám mây (Cloud AI). Tính năng mới cho phép:\n- Phân biệt chính xác giữa người và vật nuôi hay chuyển động của cây cối.\n- Thiết lập vùng cảnh báo an ninh thông minh (Zone Alert).\n- Gửi thông báo đẩy kèm hình ảnh thực tế tức thì về điện thoại người dùng.\nHệ thống tự động cập nhật từ ngày 20/05/2026 cho tất cả các dòng FPT Camera IQ3 và IQ3S hiện tại của khách hàng.',
        tags: 'camera, fpt camera, cong nghe ai',
        seoTitle: 'FPT Camera IQ tích hợp công nghệ nhận diện AI thông minh mới',
        seoDesc: 'Dòng sản phẩm FPT Camera chính thức cập nhật công nghệ AI cảnh báo thông minh giúp phân biệt người và vật, hỗ trợ bảo vệ an ninh gia đình tối đa.',
        seoKeywords: 'fpt camera, camera ai, camera thong minh, nhan dien nguoi',
        thumbUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=150&q=80'
    },
    'news-3': {
        id: 'news-3',
        title: 'ASTON VILLA CHÍNH THỨC ĐĂNG QUANG CHAMPION UEFA EUROPA LEAGUE',
        slug: 'aston-villa-dang-quang-champion-europa-league',
        category: 'Sự kiện',
        author: 'Đức Nguyễn',
        date: '21/05/2026',
        status: 'Draft',
        channel: 'fpt-play',
        sapo: 'Thầy trò HLV Unai Emery đã tạo nên lịch sử sau chiến thắng kịch tính ở trận chung kết Europa League vừa qua. Chiếc cúp vô địch châu Âu danh giá này mang lại vinh quang lớn.',
        content: 'Aston Villa chính thức bước lên đỉnh vinh quang tại UEFA Europa League sau trận đấu nghẹt thở. HLV Unai Emery một lần nữa khẳng định vị thế ông vua đấu cúp khi dẫn dắt đội bóng vượt qua hàng loạt đối thủ mạnh để giành cúp vàng danh giá. Trận đấu được tường thuật trực tiếp và độc quyền trên hệ thống Truyền hình FPT Play.',
        tags: 'aston villa, europa league, fpt play',
        seoTitle: 'Aston Villa vô địch UEFA Europa League 2026 - Xem trên FPT Play',
        seoDesc: 'Cập nhật tin tức Aston Villa vô địch cúp C2 châu Âu kịch tính. Đón xem các trận đấu UEFA Cup độc quyền trực tiếp trên FPT Play.',
        seoKeywords: 'aston villa, europa league, c2, fpt play, xem bong da',
        thumbUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=150&q=80'
    }
};

function skuRenderDactinh_OLD2(dataKey) {
    return; // Disabled duplicate definition
    var list = document.getElementById('dactinh-attr-list');
    var sel = document.getElementById('dactinh-nhom-select');
    if (!list) return;
}

// Reset form tin tức
function resetNewsForm() {
    document.getElementById('article-form-title').innerText = 'Tạo mới Bài viết Tin tức';
    document.getElementById('article-id').value = '';
    document.getElementById('art-title').value = '';
    document.getElementById('art-slug').value = '';
    document.getElementById('art-sapo').value = '';
    document.getElementById('art-content').value = '';
    document.getElementById('art-tags').value = '';
    document.getElementById('art-category').value = 'Tin khuyến mãi';
    document.getElementById('art-channel').value = 'fpt-telecom';
    document.getElementById('art-author').value = 'Admin';
    document.getElementById('art-status').value = 'Active';
    document.getElementById('art-thumbnail-url').value = 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=150&q=80';
    document.getElementById('art-thumb-preview').src = 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=150&q=80';
    document.getElementById('art-thumb-filename').innerText = 'img_thumbnail_default.png';
    document.getElementById('art-seo-title').value = '';
    document.getElementById('art-seo-desc').value = '';
    document.getElementById('art-seo-keywords').value = '';
}

// Mở / đóng News Edit Drawer
function openNewsDrawer() {
    var overlay = document.getElementById('news-edit-overlay');
    var form = document.getElementById('news-item-form');
    // Move ra body level thoát mọi stacking context
    document.body.appendChild(overlay);
    document.body.appendChild(form);
    // Dùng inline style để bypass mọi CSS cascade/specificity issue
    overlay.style.cssText = 'display:block!important;position:fixed!important;inset:0!important;background:rgba(12,17,29,0.55)!important;z-index:99000!important;pointer-events:auto!important;';
    form.style.cssText = 'display:block!important;position:fixed!important;top:0!important;right:0!important;width:760px!important;height:100vh!important;z-index:99001!important;overflow-y:auto!important;background:var(--bg-panel)!important;border-left:1px solid var(--border-glass)!important;box-shadow:-12px 0 40px rgba(0,0,0,0.35)!important;transform:translateX(0)!important;pointer-events:auto!important;margin:0!important;padding:0!important;';
    document.body.style.overflow = 'hidden';
}
function closeNewsDrawer() {
    var overlay = document.getElementById('news-edit-overlay');
    var form = document.getElementById('news-item-form');
    overlay.style.cssText = 'display:none!important;';
    form.style.cssText = 'display:none!important;';
    document.body.style.overflow = '';
}

// Tải thông tin bài viết lên form để Sửa
function editNewsArticle(id) {
    const art = newsArticlesData[id];
    if (!art) return;

    document.getElementById('article-form-title').innerText = 'Chỉnh sửa Bài viết #' + id;
    document.getElementById('article-form-title-bar').innerText = 'Chỉnh sửa Bài viết #' + id;
    document.getElementById('article-id').value = art.id;
    document.getElementById('art-title').value = art.title;
    document.getElementById('art-slug').value = art.slug;
    document.getElementById('art-sapo').value = art.sapo || '';
    document.getElementById('art-content').value = art.content || '';
    document.getElementById('art-tags').value = art.tags || '';
    document.getElementById('art-category').value = art.category;
    document.getElementById('art-channel').value = art.channel || 'fpt-telecom';
    document.getElementById('art-author').value = art.author || 'Admin';
    document.getElementById('art-status').value = art.status;
    document.getElementById('art-thumbnail-url').value = art.thumbUrl;
    document.getElementById('art-thumb-preview').src = art.thumbUrl;
    document.getElementById('art-thumb-filename').innerText = art.thumbUrl.substring(art.thumbUrl.lastIndexOf('/') + 1);
    document.getElementById('art-seo-title').value = art.seoTitle || '';
    document.getElementById('art-seo-desc').value = art.seoDesc || '';
    document.getElementById('art-seo-keywords').value = art.seoKeywords || '';

    openNewsDrawer();
}

// Lưu bài viết (mô phỏng)
function saveNewsArticleAction() {
    const id = document.getElementById('article-id').value || 'news-' + (Object.keys(newsArticlesData).length + 1);
    const title = document.getElementById('art-title').value;
    const slug = document.getElementById('art-slug').value;
    const sapo = document.getElementById('art-sapo').value;
    const content = document.getElementById('art-content').value;
    const tags = document.getElementById('art-tags').value;
    const category = document.getElementById('art-category').value;
    const channel = document.getElementById('art-channel').value;
    const author = document.getElementById('art-author').value || 'Admin';
    const status = document.getElementById('art-status').value;
    const thumbUrl = document.getElementById('art-thumbnail-url').value;
    const seoTitle = document.getElementById('art-seo-title').value;
    const seoDesc = document.getElementById('art-seo-desc').value;
    const seoKeywords = document.getElementById('art-seo-keywords').value;

    if (!title || !slug) {
        showLdpToast('Vui lòng nhập đầy đủ Tiêu đề và Slug!');
        return;
    }

    const isNew = !newsArticlesData[id];

    // Lưu vào mock data
    newsArticlesData[id] = {
        id, title, slug, sapo, content, tags, category, channel, author, status, thumbUrl, seoTitle, seoDesc, seoKeywords,
        date: isNew ? '22/05/2026' : newsArticlesData[id].date
    };

    // Re-render table dòng tương ứng hoặc tạo mới dòng
    let tbody = document.querySelector('#news-table tbody');
    let row = tbody.querySelector(`tr[data-id="${id}"]`);

    let catColor = 'rgba(249,115,22,0.15); color:#FB923C;'; // mặc định khuyến mãi
    if (category === 'Tin công nghệ') catColor = 'rgba(168,85,247,0.15); color:#c084fc;';
    else if (category === 'Sự kiện') catColor = 'rgba(245,158,11,0.15); color:#fbbf24;';
    else if (category === 'Thông báo') catColor = 'rgba(16,185,129,0.15); color:#34d399;';

    let channelName = 'FPT Telecom';
    let channelBg = 'rgba(255,107,0,0.15); color:#ff8c42;';
    if (channel === 'fpt-play') {
        channelName = 'FPT Play';
        channelBg = 'rgba(167,139,250,0.15); color:#a78bfa;';
    } else if (channel === 'fpt-camera') {
        channelName = 'FPT Camera';
        channelBg = 'rgba(245,158,11,0.15); color:#fbbf24;';
    }

    let statusBadge = `<span class="badge active news-art-status-badge">Published</span>`;
    if (status === 'Draft') statusBadge = `<span class="badge warning news-art-status-badge">Draft</span>`;

    let rowHtml = `
                <td style="text-align:center;"><input type="checkbox" class="news-row-check" data-id="${id}" style="width:16px;height:16px;accent-color:var(--primary);cursor:pointer;"></td>
                <td>
                    <img src="${thumbUrl}" alt="News Thumbnail" style="width:60px; height:40px; border-radius:4px; object-fit:cover; border:1px solid var(--border-glass);">
                </td>
                <td>
                    <div style="font-weight:700; color:#fff;" class="news-art-title">${title}</div>
                    <div style="font-size:11px; color:var(--text-muted);" class="news-art-slug">/tin-tuc/${slug}</div>
                </td>
                <td style="text-align:center;"><span class="news-featured-toggle" style="cursor:pointer;font-size:15px;opacity:0.4;" title="Bật/tắt nổi bật" onclick="this.style.opacity=this.style.opacity==='1'?'0.4':'1';this.closest('tr').dataset.featured=this.style.opacity==='1'?'1':'0'">⭐</span></td>
                <td><span class="badge" style="background:${channelBg}">${channelName}</span></td>
                <td><span class="badge news-art-cat" style="background:${catColor}">${category}</span></td>
                <td class="news-art-author">${author}</td>
                <td class="news-art-date">${isNew ? '22/05/2026' : newsArticlesData[id].date}</td>
                <td>${statusBadge}</td>
                <td>
                    <button class="btn btn-secondary btn-sm" style="color:var(--primary);border-color:var(--primary);" onclick="editNewsArticle('${id}')">Sửa</button>
                    <button class="btn btn-secondary btn-sm" style="color:#60a5fa;border-color:rgba(96,165,250,0.4);margin-left:5px;" onclick="showLdpToast('Mở preview bài viết ${id}')">Preview</button>
                    <button class="btn btn-secondary btn-sm" style="color:var(--text-muted);border-color:var(--border-glass);margin-left:5px;" onclick="if(confirm('Bạn chắc chắn muốn ẩn bài viết này?')) showLdpToast('Đã ẩn bài viết')">Ẩn</button>
                    <button class="btn btn-secondary btn-sm" style="color:var(--danger);border-color:var(--danger);margin-left:5px;" onclick="deleteNewsArticle('${id}')">Xóa</button>
                </td>
            `;

    if (row) {
        row.innerHTML = rowHtml;
        row.setAttribute('data-channel', channel);
        showLdpToast('Đã cập nhật bài viết thành công!');
    } else {
        let tr = document.createElement('tr');
        tr.setAttribute('data-id', id);
        tr.setAttribute('data-channel', channel);
        tr.innerHTML = rowHtml;
        tbody.appendChild(tr);
        showLdpToast('Đã thêm bài viết mới thành công!');
    }

    updateNewsStats();

    // Quay lại danh sách
    document.getElementById('news-item-form').style.display = 'none';
    document.getElementById('news-list').style.display = 'block';
}

// Xóa bài viết
function deleteNewsArticle(id) {
    if (confirm('Bạn có chắc chắn muốn xóa bài viết này không?')) {
        delete newsArticlesData[id];
        let row = document.querySelector(`#news-table tbody tr[data-id="${id}"]`);
        if (row) row.remove();
        updateNewsStats();
        showLdpToast('Đã xóa bài viết thành công!');
    }
}

// Cập nhật số liệu thống kê
function updateNewsStats() {
    let total = Object.keys(newsArticlesData).length;
    let active = 0;
    let draft = 0;
    for (let key in newsArticlesData) {
        if (newsArticlesData[key].status === 'Active') active++;
        else draft++;
    }
    document.getElementById('stats-total-news').innerText = total;
    document.getElementById('stats-active-news').innerText = active;
    document.getElementById('stats-draft-news').innerText = draft;
}

// Tìm kiếm và Lọc bảng tin tức
function updateNewsBulkBar() {
    const checked = document.querySelectorAll('#news-table tbody .news-row-check:checked');
    const total = document.querySelectorAll('#news-table tbody .news-row-check');
    const bar = document.getElementById('news-bulk-bar');
    const countEl = document.getElementById('news-bulk-count');
    const allCb = document.getElementById('news-check-all');
    if (bar) bar.style.display = checked.length > 0 ? 'flex' : 'none';
    if (countEl) countEl.textContent = checked.length + ' bài được chọn';
    if (allCb) allCb.indeterminate = checked.length > 0 && checked.length < total.length;
    if (allCb && checked.length === total.length && total.length > 0) allCb.checked = true;
    if (allCb && checked.length === 0) allCb.checked = false;
}
window.onNewsRowCheck = updateNewsBulkBar;

function filterNewsTable() {
    const kw = (document.getElementById('news-search-keyword').value || '').toLowerCase();
    const cat = document.getElementById('news-search-cat').value;
    const status = document.getElementById('news-search-status').value;
    const featured = document.getElementById('news-search-featured').value;

    const rows = document.querySelectorAll('#news-table tbody tr');
    let visible = 0;
    rows.forEach(row => {
        const titleEl = row.querySelector('.news-art-title');
        const slugEl = row.querySelector('.news-art-slug');
        const catEl = row.querySelector('.news-art-cat');
        const statusEl = row.querySelector('.news-art-status-badge');
        const featuredToggle = row.querySelector('.news-featured-toggle');
        if (!titleEl || !catEl || !statusEl) return;

        const isFeatured = featuredToggle && featuredToggle.style.opacity === '1';

        let matchKw = !kw || titleEl.innerText.toLowerCase().includes(kw) || (slugEl && slugEl.innerText.toLowerCase().includes(kw));
        let matchCat = !cat || catEl.innerText.trim() === cat;
        let matchStatus = !status || statusEl.innerText.trim() === status;
        let matchFeatured = !featured || (featured === 'featured' && isFeatured);

        row.style.display = (matchKw && matchCat && matchStatus && matchFeatured) ? '' : 'none';
        if (row.style.display === '') visible++;
    });
    showLdpToast(`Lọc xong — ${visible} bài phù hợp`);
}



// ===== LOGIC QUẢN LÝ FAQ =====
const faqArticlesData = {
    'faq-1': {
        id: 'faq-1',
        question: 'Lắp đặt mạng Internet FPT cần những thủ tục gì?',
        category: 'Chính sách & Thủ tục',
        lang: 'Tiếng Việt',
        sort: 1,
        status: 'Active',
        answer: 'Để đăng ký lắp mạng FPT, khách hàng cá nhân chỉ cần cung cấp ảnh chụp thẻ Căn cước công dân (CCCD). Đối với khách hàng doanh nghiệp, cần bổ sung thêm ảnh chụp Giấy phép kinh doanh và hợp đồng thuê nhà (nếu có).'
    },
    'faq-2': {
        id: 'faq-2',
        question: 'Làm thế nào để thay đổi mật khẩu Wi-Fi của FPT?',
        category: 'Khắc phục sự cố',
        lang: 'Tiếng Việt',
        sort: 2,
        status: 'Active',
        answer: 'Bạn có thể đổi mật khẩu Wi-Fi nhanh nhất bằng ứng dụng Hi FPT trên điện thoại di động (tải ứng dụng, đăng nhập số điện thoại đăng ký, vào mục Quản lý thiết bị modem để đổi tên/mật khẩu). Hoặc truy cập trang quản trị modem qua địa chỉ 192.168.1.1 bằng trình duyệt web.'
    },
    'faq-3': {
        id: 'faq-3',
        question: 'Các phương thức thanh toán cước Internet FPT hiện nay?',
        category: 'Thanh toán cước',
        lang: 'Tiếng Việt',
        sort: 3,
        status: 'Active',
        answer: 'FPT Telecom hỗ trợ đa dạng hình thức thanh toán:\n1. Thanh toán tự động qua ứng dụng Hi FPT hoặc liên kết ngân hàng (Auto-pay).\n2. Thanh toán qua ví điện tử: MoMo, VNPay, ZaloPay, ShopeePay.\n3. Chuyển khoản ngân hàng hoặc thanh toán tại quầy giao dịch FPT, cửa hàng tiện lợi FPT Shop, WinMart.'
    }
};

function renderFaqTable() {
    let tbody = document.querySelector('#faq-table tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    for (let id in faqArticlesData) {
        let faq = faqArticlesData[id];
        let statusColor = faq.status === 'Active' ? 'rgba(16,185,129,0.15); color:var(--success);' : 'rgba(239,68,68,0.15); color:var(--danger);';
        let statusBadge = `<span class="badge" style="background:${statusColor}">${faq.status}</span>`;

        let catColor = 'rgba(249,115,22,0.15); color:#FB923C;'; // mặc định
        if (faq.category === 'Khắc phục sự cố') catColor = 'rgba(239,68,68,0.15); color:var(--danger);';
        else if (faq.category === 'Chính sách & Thủ tục') catColor = 'rgba(245,158,11,0.15); color:var(--warning);';
        else if (faq.category === 'Dịch vụ GTGT') catColor = 'rgba(168,85,247,0.15); color:var(--purple);';

        let tr = document.createElement('tr');
        tr.setAttribute('data-id', id);
        tr.innerHTML = `
                    <td>
                        <div style="font-weight:700; color:#fff;" class="faq-question">${faq.question}</div>
                        <div style="font-size:11px; color:var(--text-muted); max-height:40px; overflow:hidden; text-overflow:ellipsis; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; margin-top:4px;">${faq.answer.replace(/\n/g, '<br>')}</div>
                    </td>
<td><span class="badge faq-category" style="background:${catColor}">${faq.category}</span></td>
                    <td class="faq-lang">${faq.lang}</td>
                    <td>${statusBadge}</td>
                    <td>
                        <button class="btn btn-secondary btn-sm" style="color:var(--primary); border-color:var(--primary);" onclick="editFaqArticle('${id}')">Sửa</button>
                        <button class="btn btn-secondary btn-sm" style="color:var(--danger); border-color:var(--danger); margin-left: 5px;" onclick="deleteFaqArticle('${id}')">Xóa</button>
                    </td>
                `;
        tbody.appendChild(tr);
    }
}

function skuRenderDactinh(dataKey) {
    var list = document.getElementById('dactinh-attr-list');
    var sel = document.getElementById('dactinh-nhom-select-dropdown');
    if (!list) return;

    var isService = (dataKey === 'service');

    // Sync nhóm đặc tính dropdown
    var nhomLabel = isService ? 'Thông số Dịch vụ' : (dataKey === 'camera' ? 'Thông số Camera' : 'Thông số Router/Modem');
    if (sel) {
        for (var i = 0; i < sel.options.length; i++) {
            if (sel.options[i].text === nhomLabel) {
                sel.selectedIndex = i;
                break;
            }
        }
    }

    // Toggle Nổi bật column visibility
    toggleDactinhNoibat(isService ? 'dichvu' : 'thietbi');

    // Render rows (remove old dynamic rows first, keep header)
    list.querySelectorAll('.dactinh-row').forEach(function (el) { el.remove(); });

    var rows = dactinhData[dataKey] || dactinhData['modem'];
    rows.forEach(function (r, i) {
        var div = document.createElement('div');
        div.className = 'dactinh-row';
        var isLast = i === rows.length - 1;
        // Dùng grid 5 cột cùng template với header mới
        div.style.cssText = 'display:grid;grid-template-columns:30px 200px 1fr 110px 50px;align-items:center;padding:7px 0;' + (isLast ? '' : 'border-bottom:1px solid rgba(255,255,255,0.04);');

        var noibatCol = isService ? '<span class="col-noibat"></span>' :
            '<label class="col-noibat" style="display:flex;align-items:center;justify-content:center;gap:6px;cursor:pointer;">'
            + '<input type="checkbox"' + (r.highlight ? ' checked' : '') + ' style="accent-color:var(--primary);width:15px;height:15px;">'
            + '<span style="font-size:11px;color:' + (r.highlight ? 'var(--primary)' : 'var(--text-muted)') + ';">Nổi bật</span>'
            + '</label>';

        var actionCol = '<div style="display:flex;justify-content:center;">'
            + '<button type="button" class="btn btn-sm" style="background:rgba(239,68,68,0.15); color:var(--danger); border:1px solid rgba(239,68,68,0.25); padding:2px 6px;" onclick="this.parentElement.parentElement.remove()" title="Xóa">🗑️</button>'
            + '</div>';

        var dragCol = '<div style="display:flex;justify-content:center;color:var(--text-muted);cursor:move;" title="Kéo thả đổi vị trí">☰</div>';

        var nameVal = r.name;
        var valueVal = r.value + (r.unit ? ' ' + r.unit : '');

        div.innerHTML = dragCol
            + '<div><input type="text" class="form-input" style="padding:4px 8px; width:90%; font-size:13px; color:#fff;" value="' + nameVal + '" placeholder="Tên đặc tính"></div>'
            + '<div><input type="text" class="form-input" style="padding:4px 8px; width:95%; font-size:13px; color:#fff;" value="' + valueVal + '" placeholder="Giá trị"></div>'
            + noibatCol
            + actionCol;
        list.appendChild(div);
    });
}

function skuAddDactinhRow() {
    var list = document.getElementById('dactinh-attr-list');
    if (!list) return;

    var div = document.createElement('div');
    div.className = 'dactinh-row';
    div.style.cssText = 'display:grid;grid-template-columns:30px 200px 1fr 110px 50px;align-items:center;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.04);';

    var noibatCol = '<label class="col-noibat" style="display:flex;align-items:center;justify-content:center;gap:6px;cursor:pointer;">'
        + '<input type="checkbox" style="accent-color:var(--primary);width:15px;height:15px;">'
        + '<span style="font-size:11px;color:var(--text-muted);">Nổi bật</span>'
        + '</label>';

    var actionCol = '<div style="display:flex;justify-content:center;">'
        + '<button type="button" class="btn btn-sm" style="background:rgba(239,68,68,0.15); color:var(--danger); border:1px solid rgba(239,68,68,0.25); padding:2px 6px;" onclick="this.parentElement.parentElement.remove()" title="Xóa">🗑️</button>'
        + '</div>';

    var dragCol = '<div style="display:flex;justify-content:center;color:var(--text-muted);cursor:move;" title="Kéo thả đổi vị trí">☰</div>';

    div.innerHTML = dragCol
        + '<div><input type="text" class="form-input" style="padding:4px 8px; width:90%; font-size:13px; color:#fff;" value="" placeholder="Tên đặc tính"></div>'
        + '<div><input type="text" class="form-input" style="padding:4px 8px; width:95%; font-size:13px; color:#fff;" value="" placeholder="Giá trị"></div>'
        + noibatCol
        + actionCol;
    list.appendChild(div);
}

function applyDactinhTemplate() {
    var dropdown = document.getElementById('dactinh-nhom-select-dropdown');
    var selectedType = dropdown ? dropdown.value : 'Thông số Router/Modem';
    var key = selectedType === 'Thông số Camera' ? 'camera' : 'modem';
    skuRenderDactinh(key);
    showLdpToast('Áp dụng Template đặc tính cho ' + selectedType + ' thành công!');
}

function openCloneDactinhModal() {
    var prodCode = prompt("Nhập mã SKU sản phẩm bạn muốn sao chép đặc tính (Ví dụ: CAM-IQ3, CAM-SE):", "CAM-IQ3");
    if (prodCode) {
        skuRenderDactinh('camera');
        showLdpToast('Đã sao chép đặc tính từ sản phẩm ' + prodCode + ' thành công!');
    }
}

function triggerImportExcel() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xlsx, .xls';
    input.onchange = function () {
        showLdpToast('Đã phân tích file Excel. Import 6 đặc tính thành công!');
    };
    input.click();
}

function skuRenderDactinh_OLD3(dataKey) {
    return; // Disabled duplicate definition
    var list = document.getElementById('dactinh-attr-list');
    var sel = document.getElementById('dactinh-nhom-select');
}

function downloadExcelTemplate() {
    showLdpToast('Tải file mẫu Excel cấu hình đặc tính thành công!');
}

function resetFaqForm() {
    document.getElementById('faq-form-title').innerText = 'Tạo mới Câu hỏi (FAQ)';
    document.getElementById('faq-item-id').value = '';
    document.getElementById('faq-item-question').value = '';
    document.getElementById('faq-item-answer').value = '';
    document.getElementById('faq-item-category').value = 'Thanh toán cước';
    document.getElementById('faq-item-lang').value = 'Tiếng Việt';
    document.getElementById('faq-item-sort').value = '1';
    document.getElementById('faq-item-status').checked = true;
}

function editFaqArticle(id) {
    const faq = faqArticlesData[id];
    if (!faq) return;

    document.getElementById('faq-form-title').innerText = 'Chỉnh sửa Câu hỏi #' + id;
    document.getElementById('faq-item-id').value = faq.id;
    document.getElementById('faq-item-question').value = faq.question;
    document.getElementById('faq-item-answer').value = faq.answer;
    document.getElementById('faq-item-category').value = faq.category;
    document.getElementById('faq-item-lang').value = faq.lang;
    document.getElementById('faq-item-sort').value = faq.sort;
    document.getElementById('faq-item-status').checked = faq.status === 'Active';

    // Hiển thị form, ẩn danh sách
    document.getElementById('faq-item-form').style.display = 'block';
    document.getElementById('faq-list').style.display = 'none';
    document.getElementById('faq-cat-list').style.display = 'none';
    document.getElementById('faq-cat-form').style.display = 'none';
}

function saveFaqArticleAction() {
    const id = document.getElementById('faq-item-id').value || 'faq-' + (Object.keys(faqArticlesData).length + 1);
    const question = document.getElementById('faq-item-question').value;
    const answer = document.getElementById('faq-item-answer').value;
    const category = document.getElementById('faq-item-category').value;
    const lang = document.getElementById('faq-item-lang').value;
    const sort = parseInt(document.getElementById('faq-item-sort').value) || 1;
    const status = document.getElementById('faq-item-status').checked ? 'Active' : 'Inactive';

    if (!question || !answer) {
        showLdpToast('Vui lòng nhập đầy đủ Câu hỏi và Câu trả lời!');
        return;
    }

    faqArticlesData[id] = {
        id, question, answer, category, lang, sort, status
    };

    renderFaqTable();
    showLdpToast(document.getElementById('faq-item-id').value ? 'Đã cập nhật câu hỏi FAQ thành công!' : 'Đã thêm câu hỏi FAQ mới thành công!');

    // Quay lại danh sách
    document.getElementById('faq-item-form').style.display = 'none';
    document.getElementById('faq-list').style.display = 'block';
}

function deleteFaqArticle(id) {
    if (confirm('Bạn có chắc chắn muốn xóa câu hỏi FAQ này không?')) {
        delete faqArticlesData[id];
        renderFaqTable();
        showLdpToast('Đã xóa câu hỏi FAQ thành công!');
    }
}

function filterFaqTable() {
    const kw = document.getElementById('faq-search-keyword').value.toLowerCase();
    const cat = document.getElementById('faq-search-cat').value;

    const rows = document.querySelectorAll('#faq-table tbody tr');
    rows.forEach(row => {
        const question = row.querySelector('.faq-question').innerText.toLowerCase();
        const category = row.querySelector('.faq-category').innerText;

        let matchKw = !kw || question.includes(kw);
        let matchCat = !cat || category === cat;

        if (matchKw && matchCat) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
    showLdpToast('Đã lọc danh sách FAQ!');
}

let currentAttrTab = 'group';

function switchAttrTab(tab, element) {
    currentAttrTab = tab;
    // Update tabs UI
    let tabs = element.parentElement.children;
    for (let i = 0; i < tabs.length; i++) tabs[i].classList.remove('active');
    element.classList.add('active');

    // Update title
    document.getElementById('attr-title').innerText = tab === 'group' ? 'Nhóm đặc tính sản phẩm' : 'Đặc tính sản phẩm';

    // Show hide content
    document.getElementById('attr-view-group').style.display = tab === 'group' ? 'block' : 'none';
    document.getElementById('attr-view-single').style.display = tab === 'single' ? 'block' : 'none';
}

function openAttrModal() {
    if (currentAttrTab === 'group') {
        document.getElementById('modal-attr-group').style.display = 'block';
    } else {
        document.getElementById('modal-attr-single').style.display = 'block';
    }
}

function closeModals() {
    document.getElementById('modal-attr-group').style.display = 'none';
    document.getElementById('modal-attr-single').style.display = 'none';
}

const mockCardsData = {
    giga: {
        pdh: 'PKG-GIGA-01',
        badge: 'Phù hợp cá nhân, gia đình nhỏ',
        name: 'Internet Giga',
        price: '195.000đ',
        download: '300 Mbps',
        upload: '300 Mbps',
        gauge: '50',
        devices: 'Modem Wi-Fi 6\nKết nối lên đến 10 thiết bị',
        note: '',
        btn1Text: 'Đăng ký ngay',
        btn1Url: '/checkout?pkg=giga',
        btn2Url: '/internet-ca-nhan/giga'
    },
    sky: {
        pdh: 'PKG-SKY-01',
        badge: 'Phù hợp gia đình nhỏ',
        name: 'Internet Sky',
        price: '195.000đ',
        download: '1 Gbps',
        upload: '300 Mbps',
        gauge: '75',
        devices: 'Modem Wi-Fi 6\nKết nối lên đến 15 thiết bị',
        note: '',
        btn1Text: 'Đăng ký ngay',
        btn1Url: '/checkout?pkg=sky',
        btn2Url: '/internet-ca-nhan/sky'
    },
    gigaf1: {
        pdh: 'PKG-F1-GIGA',
        badge: 'Phù hợp cá nhân, hộ gia đình',
        name: 'Internet Giga F1',
        price: '205.000đ',
        download: '300 Mbps',
        upload: '300 Mbps',
        gauge: '50',
        devices: 'Modem Wi-Fi 6 & 01 Access Point\nKết nối lên đến 10 thiết bị',
        note: 'Phủ sóng ổn định cho nhà ít tầng, diện tích trung bình',
        btn1Text: 'Đăng ký ngay',
        btn1Url: '/checkout?pkg=gigaf1',
        btn2Url: '/internet-ca-nhan/gigaf1'
    },
    skyf1: {
        pdh: 'PKG-F1-SKY',
        badge: 'Phù hợp cá nhân, gia đình nhỏ',
        name: 'Internet Sky F1',
        price: '210.000đ',
        download: '1 Gbps',
        upload: '300 Mbps',
        gauge: '75',
        devices: 'Modem Wi-Fi 6 và 01 Access Point\nKết nối lên đến 15 thiết bị',
        note: 'Phủ sóng ổn định cho nhà ít tầng, diện tích lớn',
        btn1Text: 'Đăng ký ngay',
        btn1Url: '/checkout?pkg=skyf1',
        btn2Url: '/internet-ca-nhan/skyf1'
    }
};

function showEditCardForm(cardId) {
    const data = mockCardsData[cardId] || {
        pdh: '', badge: '', name: '', price: '', download: '', upload: '', gauge: '50', devices: '', note: '', btn1Text: 'Đăng ký ngay', btn1Url: '', btn2Url: ''
    };
    document.getElementById('card-modal-title').innerText = '✏️ Chỉnh sửa Card Gói Cước';
    document.getElementById('m-card-pdh').value = data.pdh;
    document.getElementById('m-card-badge').value = data.badge;
    document.getElementById('m-card-name').value = data.name;
    document.getElementById('m-card-price').value = data.price;
    document.getElementById('m-card-download').value = data.download;
    document.getElementById('m-card-upload').value = data.upload;
    document.getElementById('m-card-gauge').value = data.gauge;
    document.getElementById('m-card-devices').value = data.devices;
    document.getElementById('m-card-note').value = data.note;
    document.getElementById('m-card-btn1-text').value = data.btn1Text;
    document.getElementById('m-card-btn1-url').value = data.btn1Url;
    document.getElementById('m-card-btn2-url').value = data.btn2Url;
    document.getElementById('blk-card-modal').style.display = 'flex';
}

function showAddCardModal() {
    document.getElementById('card-modal-title').innerText = '➕ Thêm Card Gói Mới';
    document.getElementById('m-card-pdh').value = '';
    document.getElementById('m-card-badge').value = '';
    document.getElementById('m-card-name').value = '';
    document.getElementById('m-card-price').value = '';
    document.getElementById('m-card-download').value = '';
    document.getElementById('m-card-upload').value = '';
    document.getElementById('m-card-gauge').value = '50';
    document.getElementById('m-card-devices').value = '';
    document.getElementById('m-card-note').value = '';
    document.getElementById('m-card-btn1-text').value = 'Đăng ký ngay';
    document.getElementById('m-card-btn1-url').value = '';
    document.getElementById('m-card-btn2-url').value = '';
    document.getElementById('blk-card-modal').style.display = 'flex';
}

function saveCardData() {
    alert('Đã cập nhật cấu hình Card Gói Cước thành công!');
    document.getElementById('blk-card-modal').style.display = 'none';
}

function showCreateBlockForm() {
    document.getElementById('blk-form').style.display = 'block';
    document.getElementById('blk-list').style.display = 'none';
    document.getElementById('blk-layout-select').value = 'slider';
    document.getElementById('blk-datasource-select').value = 'goi-cuoc';
    onBlockTypeChange();
}

function showEditBlockForm(layout, dataSource) {
    document.getElementById('blk-form').style.display = 'block';
    document.getElementById('blk-list').style.display = 'none';
    if (layout) {
        document.getElementById('blk-layout-select').value = layout;
    }
    if (dataSource) {
        document.getElementById('blk-datasource-select').value = dataSource;
    }
    onBlockTypeChange();
}

function onBlockTypeChange() {
    const layout = document.getElementById('blk-layout-select').value;
    const dataSource = document.getElementById('blk-datasource-select').value;
    const goiCuocSec = document.getElementById('blk-goi-cuoc-section');
    const articleSec = document.getElementById('blk-article-section');
    const faqSec = document.getElementById('blk-faq-section');
    const bannerSec = document.getElementById('blk-banner-vertical-section');
    const pdhAssignSec = document.getElementById('blk-pdh-assign-section');

    if (goiCuocSec) goiCuocSec.style.display = 'none';
    if (articleSec) articleSec.style.display = 'none';
    if (faqSec) faqSec.style.display = 'none';
    if (bannerSec) bannerSec.style.display = 'none';
    if (pdhAssignSec) pdhAssignSec.style.display = 'none';

    // 1. Danh sách card gói cước
    if (dataSource === 'goi-cuoc') {
        if (goiCuocSec) goiCuocSec.style.display = 'block';
    }

    // 2. Chọn bài viết
    if (dataSource === 'tin-tuc') {
        if (articleSec) articleSec.style.display = 'block';
    }

    // 3. Chọn FAQ
    if (dataSource === 'faq') {
        if (faqSec) faqSec.style.display = 'block';
    }

    // 4. Banner dọc: Hiển thị khi layout = grid và datasource = sa hoặc goi-cuoc
    if (layout === 'grid' && (dataSource === 'sa' || dataSource === 'goi-cuoc')) {
        if (bannerSec) bannerSec.style.display = 'block';
    }

    // 5. Gán Package: Hiển thị khi datasource = sa hoặc product
    if (dataSource === 'sa' || dataSource === 'product') {
        if (pdhAssignSec) pdhAssignSec.style.display = 'block';
    }
}
function toggleForm(modPrefix, isFormOpen) {
    if (isFormOpen) {
        document.getElementById(modPrefix + '-list').style.display = 'none';
        document.getElementById(modPrefix + '-form').style.display = 'block';
    } else {
        document.getElementById(modPrefix + '-list').style.display = 'block';
        document.getElementById(modPrefix + '-form').style.display = 'none';
    }
}

function togglePkgStep(step) {
    document.getElementById('step-btn-1').classList.remove('active');
    document.getElementById('step-btn-2').classList.remove('active');
    document.getElementById('step-btn-' + step).classList.add('active');

    document.getElementById('pkg-step-1').style.display = step === 1 ? 'block' : 'none';
    document.getElementById('pkg-step-2').style.display = step === 2 ? 'block' : 'none';
}
function togglePriceStep(step) {
    document.getElementById('price-step-btn-1').classList.remove('active');
    document.getElementById('price-step-btn-2').classList.remove('active');
    document.getElementById('price-step-btn-' + step).classList.add('active');

    document.getElementById('price-step-1').style.display = step === 1 ? 'block' : 'none';
    document.getElementById('price-step-2').style.display = step === 2 ? 'block' : 'none';
}

// ===== -Style SKU Detail Functions =====
// Data QLCS (Tab 1) theo từng SKU code
var qlcsData = {
    'MODEM-AX1800GZ': {
        dichvu: 'Internet', nhom: 'Basic Net', loai: 'Thiết bị',
        tensku: 'ModemWifi6AX1800GZ', gia: '500.000 đ',
        hinhthuc: 'Thiết bị lẻ', goicuoc: 'Trả 1 lần', dvt: 'Cái'
    },
    'CAM-FPT-D1': {
        dichvu: 'Camera An Ninh', nhom: 'Camera Basic', loai: 'Thiết bị',
        tensku: 'CameraAnNinhFPTD1-2MP', gia: '1.200.000 đ',
        hinhthuc: 'Thiết bị lẻ', goicuoc: 'Trả 1 lần', dvt: 'Cái'
    },
    'SRV-IP-STATIC': {
        dichvu: 'Internet', nhom: 'Add-on Dịch vụ', loai: 'Dịch vụ',
        tensku: 'IPTinh1Thang_Static', gia: '50.000 đ / tháng',
        hinhthuc: 'Dịch vụ cộng thêm', goicuoc: 'Thuê bao tháng', dvt: 'Tháng'
    }
};

function skuFillQlcs(code) {
    var d = qlcsData[code] || qlcsData['MODEM-AX1800GZ'];
    var fields = ['dichvu', 'nhom', 'loai', 'tensku', 'gia', 'hinhthuc', 'goicuoc', 'dvt'];
    fields.forEach(function (f) {
        var el = document.getElementById('qlcs-' + f);
        if (el) el.value = d[f] || '';
    });
}

// Data đặc tính theo từng loại SKU
var dactinhData = {
    'camera': [
        { name: 'Độ phân giải', value: '2MP (1920×1080)', unit: '', highlight: true },
        { name: 'Góc quan sát', value: '110', unit: '°', highlight: true },
        { name: 'Hỗ trợ ban đêm', value: 'Có (IR 30m)', unit: '', highlight: true },
        { name: 'Loại kết nối', value: 'WiFi / LAN', unit: '', highlight: false },
        { name: 'Chống nước', value: 'IP67', unit: '', highlight: false },
        { name: 'Lưu trữ', value: 'Cloud + Thẻ nhớ tối đa 128GB', unit: '', highlight: false }
    ],
    'modem': [
        { name: 'Tốc độ WiFi', value: '1800', unit: 'Mbps', highlight: true },
        { name: 'Chuẩn WiFi', value: 'WiFi 6 (802.11ax)', unit: '', highlight: true },
        { name: 'Số cổng LAN', value: '4', unit: 'cổng', highlight: false },
        { name: 'Băng tần', value: 'Dual Band 2.4GHz + 5GHz', unit: '', highlight: false }
    ],
    'service': [
        { name: 'Tốc độ download', value: '100', unit: 'Mbps', highlight: true },
        { name: 'Tốc độ upload', value: '50', unit: 'Mbps', highlight: true },
        { name: 'Loại đường truyền', value: 'Cáp quang FTTH', unit: '', highlight: false },
        { name: 'IP tĩnh', value: 'Không', unit: '', highlight: false }
    ]
};

function skuRenderDactinh_OLD_FINAL(dataKey) {
    var list = document.getElementById('dactinh-attr-list');
    var sel = document.getElementById('dactinh-nhom-select');
    if (!list) return;

    var isService = (dataKey === 'service');

    // Sync nhóm đặc tính label
    var nhomLabel = isService ? 'Thông số Dịch vụ' : (dataKey === 'camera' ? 'Thông số Camera' : 'Thông số Router/Modem');
    if (sel) sel.innerText = nhomLabel;

    // Toggle Nổi bật column visibility
    toggleDactinhNoibat(isService ? 'dichvu' : 'thietbi');

    // Render rows (remove old dynamic rows first, keep header)
    var header = document.getElementById('dactinh-header-row');
    list.querySelectorAll('.dactinh-row').forEach(function (el) { el.remove(); });

    var rows = dactinhData[dataKey] || dactinhData['modem'];
    rows.forEach(function (r, i) {
        var div = document.createElement('div');
        div.className = 'dactinh-row';
        var isLast = i === rows.length - 1;
        // Dùng grid 3 cột cùng template với header để columns thẳng hàng
        div.style.cssText = 'display:grid;grid-template-columns:200px 1fr 110px;align-items:center;padding:7px 0;' + (isLast ? '' : 'border-bottom:1px solid rgba(255,255,255,0.04);');

        var valText = r.value + (r.unit ? ' <span style="font-size:11px;color:var(--text-muted);font-weight:400;">' + r.unit + '</span>' : '');
        var noibatCol = isService ? '<span class="col-noibat"></span>' :
            '<label class="col-noibat" style="display:flex;align-items:center;justify-content:center;gap:6px;cursor:pointer;">'
            + '<input type="checkbox"' + (r.highlight ? ' checked' : '') + ' style="accent-color:var(--primary);width:15px;height:15px;">'
            + '<span style="font-size:11px;color:' + (r.highlight ? 'var(--primary)' : 'var(--text-muted)') + ';">Nổi bật</span>'
            + '</label>';

        div.innerHTML = '<span style="font-size:13px;color:var(--text-muted);">' + r.name + '</span>'
            + '<span style="font-size:13px;color:#e0e0e0;font-weight:500;">' + valText + '</span>'
            + noibatCol;
        list.appendChild(div);
    });
}

function skuOpenDetail(code, name, type, category) {
    // Show detail, hide list
    document.getElementById('sku-list').style.display = 'none';
    document.getElementById('sku-form').style.display = 'block';

    // Fill Document Header
    document.getElementById('sku-hdr-code').innerText = code;
    document.getElementById('sku-hdr-name').innerText = name;

    // Fill Breadcrumb
    document.getElementById('sku-bc-type').innerText = type || 'Thiết bị';
    document.getElementById('sku-bc-cat').innerText = category || '—';
    document.getElementById('sku-bc-code').innerText = code;

    // Fill Tab 1 — QLCS data theo SKU code
    skuFillQlcs(code);

    // Swap đặc tính data theo category
    var cat = (category || '').toLowerCase();
    var dataKey = cat.indexOf('camera') >= 0 ? 'camera'
        : cat.indexOf('internet') >= 0 || cat.indexOf('dịch vụ') >= 0 ? 'service'
            : 'modem';
    skuRenderDactinh(dataKey);

    // Always start on Tab 1
    skuSwitchTab('chung');
    renderSkuTagsReadonly(code);
}

function skuSwitchTab(tabName) {
    const tabs = ['chung', 'dactinh', 'content', 'faq'];
    tabs.forEach(t => {
        const content = document.getElementById('sku-tab-' + t);
        const btn = document.getElementById('sku-tab-btn-' + t);
        if (content) content.style.display = (t === tabName) ? 'block' : 'none';
        if (btn) {
            if (t === tabName) {
                btn.style.color = '#fff';
                btn.style.borderBottom = '3px solid var(--warning)';
                btn.style.background = 'rgba(245,158,11,0.1)';
            } else {
                btn.style.color = 'var(--text-muted)';
                btn.style.borderBottom = '3px solid transparent';
                btn.style.background = 'transparent';
            }
        }
    });
}
// ===== Light / Dark Mode Toggle =====
// Design system: Untitled UI PRO VARIABLES v5.0
// Motion spec: 200ms ease-out (dropdown tier)
// Tokens: radius-full, shadow-xs, Primary/500 #F97316

function applyTheme(isLight) {
    if (isLight) {
        document.body.classList.add('light');
    } else {
        document.body.classList.remove('light');
    }
    // Update ARIA attribute for accessibility
    var toggle = document.getElementById('theme-toggle');
    if (toggle) toggle.setAttribute('aria-checked', isLight ? 'true' : 'false');

    // Label
    var label = document.getElementById('theme-label');
    if (label) label.textContent = isLight ? 'Light' : 'Dark';

    // Sync SKU preview drawer inline styles
    var drawer = document.getElementById('sku-preview-drawer');
    if (drawer) {
        drawer.style.background = isLight ? '#fff' : '#161b2a';
        drawer.style.borderLeftColor = isLight ? '#e2e8f0' : 'rgba(255,255,255,0.1)';
    }

    // Persist preference
    try { localStorage.setItem('fpt-cms-theme', isLight ? 'light' : 'dark'); } catch (e) { }
}

function toggleTheme() {
    var isLight = !document.body.classList.contains('light');
    applyTheme(isLight);
}

// Init on load: prefer localStorage → prefers-color-scheme → default dark
(function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem('fpt-cms-theme'); } catch (e) { }
    if (saved === 'light') {
        applyTheme(true);
    } else if (saved === 'dark') {
        applyTheme(false);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        applyTheme(true);
    }
    // default: dark (body has no class → dark)

    // Enable transitions after first paint to avoid flash
    requestAnimationFrame(function () {
        requestAnimationFrame(function () {
            document.body.classList.add('theme-ready');
        });
    });
})();

// ===== SKU Preview Drawer =====
function skuOpenPreview(code, name, type, category) {
    document.getElementById('prev-code').innerText = code;
    document.getElementById('prev-name').innerText = name;
    document.getElementById('prev-f-loai').innerText = type || 'Hàng bán';
    document.getElementById('prev-f-tensku').innerText = name;
    document.getElementById('prev-edit-btn').onclick = function () {
        skuClosePreview();
        skuOpenDetail(code, name, type, category);
    };
    document.querySelectorAll('.prev-tab').forEach(function (t) {
        t.style.color = '#888'; t.style.borderBottom = '2px solid transparent';
    });
    var first = document.querySelector('.prev-tab');
    if (first) { first.style.color = '#fff'; first.style.borderBottom = '2px solid var(--warning)'; }
    ['tab-dactinh', 'tab-media', 'tab-faq'].forEach(function (id) {
        document.getElementById(id).style.display = 'none';
    });
    document.getElementById('tab-chung').style.display = 'block';
    var overlay = document.getElementById('sku-preview-overlay');
    var drawer = document.getElementById('sku-preview-drawer');
    overlay.style.display = 'block';
    drawer.style.display = 'block';
    setTimeout(function () { drawer.style.transform = 'translateX(0)'; }, 10);
}

function skuClosePreview() {
    var drawer = document.getElementById('sku-preview-drawer');
    drawer.style.transform = 'translateX(100%)';
    setTimeout(function () {
        drawer.style.display = 'none';
        document.getElementById('sku-preview-overlay').style.display = 'none';
    }, 260);
}

function skuPrevTab(el, tabId) {
    document.querySelectorAll('.prev-tab').forEach(function (t) {
        t.style.color = '#888'; t.style.borderBottom = '2px solid transparent';
    });
    el.style.color = '#fff'; el.style.borderBottom = '2px solid var(--warning)';
    ['tab-chung', 'tab-dactinh', 'tab-media', 'tab-faq'].forEach(function (id) {
        document.getElementById(id).style.display = (id === tabId) ? 'block' : 'none';
    });
}

function toggleDactinhNoibat(val) {
    var isService = val === 'dichvu';
    document.querySelectorAll('.col-noibat').forEach(function (el) {
        el.style.display = isService ? 'none' : '';
    });
    document.getElementById('dactinh-hint-dichvu').style.display = isService ? '' : 'none';
    document.getElementById('dactinh-hint-thietbi').style.display = isService ? 'none' : '';
    document.getElementById('dactinh-header-row').style.display = isService ? 'none' : '';
}

function addPtttRowDrawer() {
    var container = document.getElementById('pttt-rows-drawer');
    var row = document.createElement('div');
    row.style.cssText = 'display:grid;grid-template-columns:36px 1fr 1fr 28px;gap:8px;align-items:center;';
    row.innerHTML = [
        '<span style="text-align:center;font-size:18px;padding:4px;background:rgba(255,255,255,0.06);border-radius:6px;border:1px solid rgba(255,255,255,0.1);">💳</span>',
        '<select style="padding:6px 8px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14);border-radius:6px;color:#e0e0e0;font-size:12px;">',
        '<option>Thẻ tín dụng / ghi nợ</option><option>Ví điện tử</option><option>Chuyển khoản ngân hàng</option><option>Tiền mặt</option>',
        '</select>',
        '<input type="text" placeholder="Nội dung ưu đãi..." style="padding:6px 8px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14);border-radius:6px;color:#e0e0e0;font-size:12px;">',
        '<button onclick="this.parentElement.remove()" style="padding:4px;background:rgba(239,68,68,0.15);border:none;border-radius:4px;color:var(--danger);cursor:pointer;font-size:14px;line-height:1;">✕</button>'
    ].join('');
    container.appendChild(row);
}

/* ===== LDP FUNCTIONS ===== */
function ldpStep(n) {
    [1, 2, 3].forEach(function (i) {
        var step = document.getElementById('ldp-step-' + i);
        if (step) step.style.display = (i === n) ? 'block' : 'none';
        var ind = document.getElementById('ldp-stepind-' + i);
        if (ind) {
            var circle = ind.querySelector('div');
            var label = ind.querySelector('span');
            if (circle) circle.style.background = i === n ? 'var(--primary)' : i < n ? 'var(--success)' : 'rgba(255,255,255,0.1)';
            if (circle) circle.style.color = i <= n ? '#fff' : 'var(--text-muted)';
            if (label) label.style.color = i <= n ? '#fff' : 'var(--text-muted)';
            if (label) label.style.fontWeight = i === n ? '600' : '500';
        }
    });
}

function ldpEditPage(tplId, campaignName, slug) {
    document.getElementById('ldp-form').style.display = 'block';
    document.getElementById('ldp-list').style.display = 'none';
    var nameInput = document.getElementById('ldp-campaign-name');
    if (nameInput) nameInput.value = campaignName;
    var slugInput = document.getElementById('ldp-url-slug');
    if (slugInput) {
        slugInput.value = slug;
        if (typeof updateLdpSeoPreview === 'function') updateLdpSeoPreview();
        if (typeof updateLdpUtmPreview === 'function') updateLdpUtmPreview();
    }
    ldpChooseTemplate(tplId);
}

var currentTplCategory = 'all';

function ldpSelectTplCategory(category, btnEl) {
    document.querySelectorAll('#ldp-tpl-category-tabs button').forEach(function (btn) {
        btn.classList.remove('active');
    });
    if (btnEl) btnEl.classList.add('active');
    currentTplCategory = category;
    ldpFilterTemplates();
}

function ldpFilterTemplates() {
    var searchVal = (document.getElementById('ldp-tpl-search').value || '').toLowerCase().trim();
    document.querySelectorAll('.ldp-template-card').forEach(function (card) {
        var name = (card.getAttribute('data-name') || '').toLowerCase();
        var tags = (card.getAttribute('data-tags') || '').split(',');

        var matchesSearch = name.indexOf(searchVal) !== -1;
        var matchesCategory = currentTplCategory === 'all' || tags.indexOf(currentTplCategory) !== -1;

        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function ldpChooseTemplate(tplId) {
    document.querySelectorAll('.ldp-template-card').forEach(function (card) {
        card.classList.remove('active');
    });
    var selectedCard = document.getElementById('ldp-tpl-card-' + tplId);
    if (selectedCard) selectedCard.classList.add('active');

    var names = {
        'camera': 'LDP Camera AI (9 sections)',
        'campaign': 'LDP Campaign Wi-Fi 7 (9 sections)',
        'internet': 'LDP Internet (6 sections)',
        'sa': 'LDP SA — FPT Play (10 sections)',
        'thulead': 'LDP Thu Lead (7 sections)',
        'customhtml': 'Landing Page Custom HTML (1 section)'
    };
    var colors = {
        'camera': '#ff6b00',
        'campaign': '#3b82f6',
        'internet': '#ff8c42',
        'sa': '#a78bfa',
        'thulead': '#10b981',
        'customhtml': '#f59e0b'
    };
    var nameEl = document.getElementById('ldp-tpl-name');
    if (nameEl) { nameEl.textContent = names[tplId] || tplId; nameEl.style.color = colors[tplId] || 'var(--primary)'; }
    document.querySelectorAll('.ldp-sections-list').forEach(function (el) {
        el.style.display = el.dataset.tpl === tplId ? 'block' : 'none';
    });
    ldpStep(2);
}

var currentLdpSectionId = '';

function ldpEditSection(sectionId) {
    currentLdpSectionId = sectionId;
    document.querySelectorAll('.ldp-section-row').forEach(function (row) {
        row.classList.remove('active');
    });
    var activeRow = document.querySelector('.ldp-section-row[data-section-id="' + sectionId + '"]');
    if (activeRow) activeRow.classList.add('active');

    var titles = {
        // Internet
        'inet-hero': 'Hero Banner + Form đăng ký', 'inet-stats': 'Thanh số liệu nổi bật',
        'inet-products': 'Danh sách gói Internet', 'inet-playbox': 'FPT Play Box — Giải trí không giới hạn',
        'inet-review': 'Video Review', 'inet-testimonials': 'Đánh giá khách hàng',
        'inet-steps': 'Hướng dẫn thủ tục', 'inet-promo': 'Ưu đãi khuyến mãi',
        'inet-faq': 'Câu hỏi thường gặp', 'inet-form': 'Form đăng ký (cuối trang)',
        // SA
        'sa-hero': 'Hero Banner khuyến mãi', 'sa-offer': 'Dải ưu đãi & Countdown',
        'sa-sports': 'Thể thao trực tiếp', 'sa-features': 'Highlight tính năng',
        'sa-categories': 'Danh mục nội dung giải trí', 'sa-pricing': 'Bảng giá & Đăng ký',
        'sa-commentators': 'Bình luận viên & chuyên gia', 'sa-faq-support': 'FAQ & Hỗ trợ',
        'sa-sticky': 'Sticky ưu đãi cuối trang',
        'sa-footer': 'Footer CTA',
        // Camera
        'cam-hero': 'Hero Banner + Nút CTA', 'cam-usp': 'Tính năng nổi bật (USP)',
        'cam-detail': 'Chi tiết FPT Camera AI', 'cam-select': 'Danh mục & Chọn mua',
        'cam-app': 'Ứng dụng FPT Camera', 'cam-value': 'Lợi thế công nghệ',
        'cam-awards': 'Thương hiệu & Giải thưởng', 'cam-faq': 'FAQ Accordion',
        'cam-sticky': 'Sticky Bottom Bar',
        // Campaign
        'camp-hero': 'Hero Wi-Fi 7 (Countdown)', 'camp-branding': 'Thanh biểu ngữ thương hiệu',
        'camp-usp': 'USP Công nghệ Wi-Fi 7', 'camp-products': 'Các gói cước Wi-Fi 7',
        'camp-compare': 'Bảng so sánh thế hệ Wi-Fi', 'camp-targets': 'Đối tượng mục tiêu',
        'camp-videos': 'Video Review thực tế', 'camp-form': 'Form đăng ký tư vấn',
        'camp-faq': 'FAQ Accordion',
        // Thu Lead
        'lead-hero': 'Hero + Form thu Lead', 'lead-proof': 'Social Proof chạy chữ',
        'lead-pricing': 'Bảng giá & So sánh gói', 'lead-steps': 'Lợi ích & Quy trình',
        'lead-reviews': 'Đánh giá khách hàng (Rating)', 'lead-faq': 'FAQ Accordion',
        'lead-sticky': 'Sticky Bottom Bar'
    };
    var titleEl = document.getElementById('ldp-sec-title');
    if (titleEl) titleEl.textContent = titles[sectionId] || sectionId;
    var bcEl = document.getElementById('ldp-sec-breadcrumb');
    if (bcEl) {
        var isInet = sectionId.indexOf('inet-') === 0;
        var isSA = sectionId.indexOf('sa-') === 0;
        var isCam = sectionId.indexOf('cam-') === 0;
        var isCamp = sectionId.indexOf('camp-') === 0;
        var isLead = sectionId.indexOf('lead-') === 0;
        bcEl.textContent = isInet ? 'LDP Internet · Section' :
            isSA ? 'LDP SA (FPT Play) · Section' :
                isCam ? 'LDP Camera AI · Section' :
                    isCamp ? 'LDP Campaign Wi-Fi 7 · Section' :
                        isLead ? 'LDP Thu Lead · Section' : 'LDP · Section';
    }
    document.querySelectorAll('.ldp-sec-form').forEach(function (el) {
        el.style.display = el.id === 'ldpsec-' + sectionId ? 'block' : 'none';
    });
    var overlay = document.getElementById('ldp-section-overlay');
    var drawer = document.getElementById('ldp-section-drawer');
    if (overlay) overlay.style.display = 'block';
    if (drawer) { drawer.style.display = 'block'; setTimeout(function () { drawer.style.transform = 'translateX(0)'; }, 10); }
}

function ldpTogglePricingCard(headerEl) {
    var body = headerEl.parentElement.querySelector('.pricing-card-body');
    var arrow = headerEl.querySelector('span:last-child');
    if (!body) return;
    var isOpen = body.style.display !== 'none';
    body.style.display = isOpen ? 'none' : 'block';
    if (arrow) arrow.textContent = isOpen ? '▼' : '▲';
}

function ldpUpdatePricingCardHeader(inputEl) {
    var card = inputEl.closest('.pricing-card-item');
    if (!card) return;
    var headerTitleEl = card.querySelector('.pricing-card-title');
    var headerPriceEl = card.querySelector('.pricing-card-price');

    var nameInput = card.querySelector('.pricing-name-input');
    var priceInput = card.querySelector('.pricing-price-input');

    if (nameInput && headerTitleEl) {
        headerTitleEl.textContent = nameInput.value || 'Gói chưa đặt tên';
    }
    if (priceInput && headerPriceEl) {
        headerPriceEl.textContent = priceInput.value ? priceInput.value + '/tháng' : '';
    }
}

function ldpToggleProductCard(headerEl) {
    var body = headerEl.parentElement.querySelector('.inet-product-card-body');
    var arrow = headerEl.querySelector('.arrow-indicator');
    if (!body) return;
    var isOpen = body.style.display !== 'none';
    body.style.display = isOpen ? 'none' : 'block';
    if (arrow) arrow.textContent = isOpen ? '▼' : '▲';
}

function ldpUpdateProductCardHeader(inputEl) {
    var card = inputEl.closest('.inet-product-card');
    if (!card) return;
    var headerTitleEl = card.querySelector('.inet-product-card-title');
    var headerPriceEl = card.querySelector('.inet-product-card-price-summary');

    var nameInput = card.querySelector('.inet-product-name-input');
    var priceInput = card.querySelector('.inet-product-price-input');

    if (nameInput && headerTitleEl) {
        headerTitleEl.textContent = nameInput.value || 'Gói chưa đặt tên';
    }
    if (priceInput && headerPriceEl) {
        headerPriceEl.textContent = priceInput.value ? ' - ' + priceInput.value + ' VNĐ/tháng' : '';
    }
}

function ldpAddProductCard(btnEl) {
    var container = btnEl.parentElement;
    if (!container) return;
    var cards = container.querySelectorAll('.inet-product-card');
    var idx = cards.length + 1;

    var warningColor = 'var(--warning)';
    var tabBorderEl = container.parentElement;
    if (tabBorderEl) {
        if (tabBorderEl.style.borderColor && tabBorderEl.style.borderColor.indexOf('59,130,246') !== -1) {
            warningColor = '#60a5fa';
        } else if (tabBorderEl.style.borderColor && tabBorderEl.style.borderColor.indexOf('168,85,247') !== -1) {
            warningColor = '#c084fc';
        }
    }

    var card = document.createElement('div');
    card.className = 'inet-product-card';
    card.style.cssText = 'border:1px solid var(--border); border-radius:8px; margin-bottom:10px; background:var(--bg-secondary); overflow:hidden;';

    var html = '<div class="inet-product-card-header" style="display:flex; align-items:center; justify-content:space-between; padding:10px 12px; background:rgba(255,255,255,0.03); cursor:pointer;" onclick="ldpToggleProductCard(this)">'
        + '<div style="display:flex; align-items:center; gap:8px; flex:1;">'
        + '<span style="font-size:12px; font-weight:700; color:' + warningColor + ';" class="inet-product-card-idx">Gói ' + idx + '</span>'
        + '<span style="font-size:13px; font-weight:600; color:#fff;" class="inet-product-card-title">Gói mới</span>'
        + '<span style="font-size:12px; color:var(--text-muted);" class="inet-product-card-price-summary"></span>'
        + '</div>'
        + '<div style="display:flex; align-items:center; gap:12px;" onclick="event.stopPropagation()">'
        + '<label style="font-size:11px; display:flex; align-items:center; gap:4px; margin:0;"><input type="checkbox" style="accent-color:var(--warning);"> Nổi bật</label>'
        + '<button class="btn btn-secondary btn-sm" style="color:var(--danger); border-color:transparent; background:transparent; padding:2px 4px; font-size:10px; margin-left:4px;" onclick="this.closest(\'.inet-product-card\').remove()">Xóa</button>'
        + '</div>'
        + '<span class="arrow-indicator" style="color:var(--text-muted); font-size:12px; margin-left:12px;">▲</span>'
        + '</div>'
        + '<div class="inet-product-card-body" style="padding:12px; border-top:1px solid rgba(255,255,255,0.06);">'
        + '<div class="form-group" style="margin-bottom:8px;"><label style="font-size:11px;">Ảnh banner gói</label>'
        + '<div style="display:flex; gap:6px;"><input type="text" class="form-input" placeholder="URL ảnh banner" style="flex:1;"><button class="btn btn-secondary btn-sm" style="font-size:10px; padding:2px 6px;">Upload</button></div>'
        + '</div>'
        + '<div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">'
        + '<div class="form-group" style="margin-bottom:6px;"><label style="font-size:11px;">Tên gói</label><input type="text" class="form-input inet-product-name-input" placeholder="vd: Internet GIGA" oninput="ldpUpdateProductCardHeader(this)"></div>'
        + '<div class="form-group" style="margin-bottom:6px;"><label style="font-size:11px;">Giá (VNĐ/tháng)</label><input type="text" class="form-input inet-product-price-input" placeholder="vd: 165.000" oninput="ldpUpdateProductCardHeader(this)"></div>'
        + '<div class="form-group" style="margin-bottom:6px;"><label style="font-size:11px;">Tốc độ Download</label><input type="text" class="form-input" placeholder="vd: 100 Mbps"></div>'
        + '<div class="form-group" style="margin-bottom:6px;"><label style="font-size:11px;">Tốc độ Upload</label><input type="text" class="form-input" placeholder="vd: 50 Mbps"></div>'
        + '<div class="form-group" style="margin-bottom:6px;"><label style="font-size:11px;">Badge text</label><input type="text" class="form-input" placeholder="VD: Phổ biến nhất"></div>'
        + '<div class="form-group" style="margin-bottom:6px;"></div>'
        + '<div class="form-group" style="grid-column:1/-1; margin-bottom:6px;"><label style="font-size:11px;">Tính năng (mỗi dòng 1 mục)</label><textarea class="form-textarea" rows="3" placeholder="Wifi Router miễn phí&#10;Hỗ trợ 24/7"></textarea></div>'
        + '<div class="form-group" style="margin-bottom:6px;"><label style="font-size:11px;">CTA phụ (text)</label><input type="text" class="form-input" placeholder="Xem chi tiết"></div>'
        + '<div class="form-group" style="margin-bottom:6px;"><label style="font-size:11px;">CTA phụ (URL)</label><input type="text" class="form-input" placeholder="/goi-giga"></div>'
        + '<div class="form-group" style="margin-bottom:0;"><label style="font-size:11px;">CTA chính (text)</label><input type="text" class="form-input" value="Đăng ký ngay"></div>'
        + '<div class="form-group" style="margin-bottom:0;"><label style="font-size:11px;">CTA chính (URL)</label><input type="text" class="form-input" placeholder="/dang-ky?goi=giga"></div>'
        + '</div>'
        + '</div>';

    card.innerHTML = html;
    container.insertBefore(card, btnEl);

    var body = card.querySelector('.inet-product-card-body');
    var arrow = card.querySelector('.arrow-indicator');
    if (body) body.style.display = 'block';
    if (arrow) arrow.textContent = '▲';
}

function ldpAddPricingCard() {
    var list = document.getElementById('sa-pricing-list');
    if (!list) return;
    var idx = list.querySelectorAll('.pricing-card-item').length + 1;
    var card = document.createElement('div');
    card.className = 'pricing-card-item';
    card.style.cssText = 'border:1px solid var(--border-glass); border-radius:8px; overflow:hidden;';
    card.innerHTML = '<div style="display:flex; align-items:center; gap:10px; padding:12px 14px; background:rgba(255,255,255,0.04); cursor:pointer;" onclick="ldpTogglePricingCard(this)">'
        + '<span style="color:var(--text-muted); font-size:16px; cursor:grab;" onclick="event.stopPropagation()">☰</span>'
        + '<div style="flex:1;"><span style="font-weight:600; font-size:14px;" class="pricing-card-title">Gói mới ' + idx + '</span><span style="margin-left:10px; font-size:12px; color:var(--text-muted);" class="pricing-card-price">Chưa có giá</span></div>'
        + '<span style="background:rgba(255,255,255,0.08); color:var(--text-muted); padding:2px 8px; border-radius:10px; font-size:11px;">Ẩn</span>'
        + '<span style="color:var(--text-muted); font-size:12px;">▲</span></div>'
        + '<div class="pricing-card-body" style="padding:14px; border-top:1px solid rgba(255,255,255,0.06);">'
        + '<div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">'
        + '<div class="form-group"><label>Tên gói <span style="color:var(--danger)">*</span></label><input type="text" class="form-input pricing-name-input" placeholder="vd: FPT Play Pro" oninput="ldpUpdatePricingCardHeader(this)"></div>'
        + '<div class="form-group"><label>Badge nhãn</label><input type="text" class="form-input" placeholder="vd: Mới, Đề xuất"></div>'
        + '<div class="form-group"><label>Giá hiển thị</label><input type="text" class="form-input pricing-price-input" placeholder="vd: 150.000đ" oninput="ldpUpdatePricingCardHeader(this)"></div>'
        + '<div class="form-group"><label>Chu kỳ</label><input type="text" class="form-input" value="/tháng"></div>'
        + '<div class="form-group"><label>Giá gốc (gạch ngang)</label><input type="text" class="form-input" placeholder="Tuỳ chọn"></div>'
        + '<div class="form-group"><label>Thứ tự vị trí</label><input type="number" class="form-input" value="' + idx + '" min="1" style="width:80px;"></div>'
        + '<div class="form-group" style="grid-column:1/-1;"><label>Mô tả / điều kiện ưu đãi</label><textarea class="form-textarea" rows="2" placeholder="Điều kiện, ưu đãi..."></textarea></div>'
        + '<div class="form-group" style="grid-column:1/-1;"><label>Tính năng nổi bật (mỗi dòng 1 tính năng)</label><textarea class="form-textarea" rows="3" placeholder="Tính năng 1&#10;Tính năng 2"></textarea></div>'
        + '<div class="form-group"><label>Nút CTA — Text</label><input type="text" class="form-input" value="Đăng ký ngay"></div>'
        + '<div class="form-group"><label>Nút CTA — URL</label><input type="text" class="form-input" placeholder="/dang-ky-..."></div>'
        + '</div>'
        + '<div style="display:flex; justify-content:flex-end; gap:8px; margin-top:10px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.06);">'
        + '<label style="display:flex; align-items:center; gap:6px; font-size:12px; cursor:pointer;"><input type="checkbox" style="accent-color:var(--success);"> Hiển thị gói này</label>'
        + '<button class="btn btn-secondary btn-sm" style="color:var(--danger); border-color:rgba(239,68,68,0.3);" onclick="this.closest(\'.pricing-card-item\').remove()">🗑 Xoá gói</button>'
        + '</div></div>';
    list.appendChild(card);
}

function ldpCloseSection() {
    document.querySelectorAll('.ldp-section-row').forEach(function (row) {
        row.classList.remove('active');
    });
    var drawer = document.getElementById('ldp-section-drawer');
    var overlay = document.getElementById('ldp-section-overlay');
    if (drawer) { drawer.style.transform = 'translateX(100%)'; setTimeout(function () { drawer.style.display = 'none'; }, 260); }
    if (overlay) { setTimeout(function () { overlay.style.display = 'none'; }, 260); }
}

// Custom Premium Toast Notification
function showLdpToast(msg) {
    var toast = document.createElement('div');
    toast.style.cssText = 'position:fixed; bottom:24px; right:24px; background:var(--primary-gradient, linear-gradient(135deg, #F97316 0%, #FB923C 100%)); color:#fff; padding:12px 24px; border-radius:12px; box-shadow:0 10px 25px -5px rgba(249, 115, 22, 0.4); z-index:9999; font-size:14px; font-weight:500; opacity:0; transform:translateY(20px); transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1); display:flex; align-items:center; gap:8px; border:1px solid rgba(255,255,255,0.1);';
    toast.innerHTML = '<span style="font-size:16px;">✨</span> <span>' + msg + '</span>';
    document.body.appendChild(toast);
    setTimeout(function () {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 10);
    setTimeout(function () {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        setTimeout(function () {
            toast.remove();
        }, 300);
    }, 3000);
}

// Save LDP Section changes back to list row summary
function ldpSaveSection() {
    if (!currentLdpSectionId) {
        ldpCloseSection();
        return;
    }

    var sectionId = currentLdpSectionId;
    var summaryText = '';

    if (sectionId === 'inet-hero') {
        var group = Array.from(document.querySelectorAll('#ldpsec-inet-hero .form-group')).find(function (g) {
            return g.querySelector('label') && g.querySelector('label').textContent.includes('Headline');
        });
        var text = group ? group.querySelector('input').value : '';
        summaryText = 'Headline: "' + text + '"';
    } else if (sectionId === 'inet-stats') {
        var inputs = document.querySelectorAll('#ldpsec-inet-stats input[type="text"]');
        var count = 0;
        for (var i = 0; i < inputs.length; i += 2) {
            if (inputs[i + 1] && inputs[i + 1].value) count++;
        }
        summaryText = count + ' chỉ số hiển thị';
    } else if (sectionId === 'inet-products') {
        var group = Array.from(document.querySelectorAll('#ldpsec-inet-products .form-group')).find(function (g) {
            return g.querySelector('label') && g.querySelector('label').textContent.includes('Tiêu đề');
        });
        var text = group ? group.querySelector('input').value : '';
        summaryText = 'Tiêu đề: "' + text + '"';
    } else if (sectionId === 'inet-review') {
        var group = Array.from(document.querySelectorAll('#ldpsec-inet-review .form-group')).find(function (g) {
            return g.querySelector('label') && g.querySelector('label').textContent.includes('Tiêu đề');
        });
        var text = group ? group.querySelector('input').value : '';
        summaryText = 'Tiêu đề: "' + text + '"';
    } else if (sectionId === 'inet-testimonials') {
        var group = Array.from(document.querySelectorAll('#ldpsec-inet-testimonials .form-group')).find(function (g) {
            return g.querySelector('label') && g.querySelector('label').textContent.includes('Tiêu đề');
        });
        var text = group ? group.querySelector('input').value : '';
        summaryText = 'Tiêu đề: "' + text + '"';
    } else if (sectionId === 'inet-playbox') {
        var inp = document.querySelector('#ldpsec-inet-playbox input[type="text"]');
        summaryText = 'FPT Play Box: "' + (inp ? inp.value : 'Giải trí không giới hạn') + '"';
    } else if (sectionId === 'inet-steps') {
        var inp = document.querySelector('#ldpsec-inet-steps input[type="text"]');
        summaryText = 'Thủ tục: "' + (inp ? inp.value : '') + '" · 3 bước';
    } else if (sectionId === 'inet-promo') {
        var inp = document.querySelector('#ldpsec-inet-promo input[type="text"]');
        var promoCount = document.querySelectorAll('#inet-promo-list > div').length;
        summaryText = 'Ưu đãi: "' + (inp ? inp.value : '') + '" · ' + promoCount + ' ưu đãi';
    } else if (sectionId === 'inet-faq') {
        var inp = document.querySelector('#ldpsec-inet-faq input[type="text"]');
        var qCount = document.querySelectorAll('#inet-faq-list > div').length;
        summaryText = 'FAQ: "' + (inp ? inp.value : 'Câu hỏi thường gặp') + '" · ' + qCount + ' câu hỏi';
    } else if (sectionId === 'inet-form') {
        var group = Array.from(document.querySelectorAll('#ldpsec-inet-form .form-group')).find(function (g) {
            return g.querySelector('label') && g.querySelector('label').textContent.includes('Tiêu đề');
        });
        var text = group ? group.querySelector('input').value : '';
        summaryText = 'Tiêu đề: "' + text + '"';
    } else if (sectionId === 'sa-hero') {
        var group = Array.from(document.querySelectorAll('#ldpsec-sa-hero .form-group')).find(function (g) {
            return g.querySelector('label') && g.querySelector('label').textContent.includes('Headline');
        });
        var text = group ? group.querySelector('input').value : '';
        summaryText = 'Headline: "' + text + '"';
    } else if (sectionId === 'sa-features') {
        var group = Array.from(document.querySelectorAll('#ldpsec-sa-features .form-group')).find(function (g) {
            return g.querySelector('label') && g.querySelector('label').textContent.includes('Headline lớn');
        });
        var text = group ? group.querySelector('input').value : '';
        summaryText = 'Tiêu đề: "' + text + '"';
    } else if (sectionId === 'sa-categories') {
        var group = Array.from(document.querySelectorAll('#ldpsec-sa-categories .form-group')).find(function (g) {
            return g.querySelector('label') && g.querySelector('label').textContent.includes('Tiêu đề');
        });
        var text = group ? group.querySelector('input').value : '';
        summaryText = 'Tiêu đề: "' + text + '"';
    } else if (sectionId === 'sa-pricing') {
        var group = Array.from(document.querySelectorAll('#ldpsec-sa-pricing .form-group')).find(function (g) {
            return g.querySelector('label') && g.querySelector('label').textContent.includes('Tiêu đề');
        });
        var text = group ? group.querySelector('input').value : '';
        summaryText = 'Tiêu đề: "' + text + '"';
    } else if (sectionId === 'sa-offer') {
        var title = document.querySelector('#ldpsec-sa-offer input.form-input');
        summaryText = 'Offer: "' + (title ? title.value : '') + '"';
    } else if (sectionId === 'sa-sports') {
        var title = document.querySelector('#ldpsec-sa-sports input.form-input');
        summaryText = 'Sports: "' + (title ? title.value : '') + '"';
    } else if (sectionId === 'sa-commentators') {
        var title = document.querySelector('#ldpsec-sa-commentators input.form-input');
        summaryText = 'Experts: "' + (title ? title.value : '') + '"';
    } else if (sectionId === 'sa-faq-support') {
        var title = document.querySelector('#ldpsec-sa-faq-support input.form-input');
        summaryText = 'FAQ: "' + (title ? title.value : '') + '"';
    } else if (sectionId === 'sa-sticky') {
        var title = document.querySelector('#ldpsec-sa-sticky input.form-input');
        summaryText = 'Sticky: "' + (title ? title.value : '') + '"';
    } else if (sectionId === 'sa-footer') {
        var group = Array.from(document.querySelectorAll('#ldpsec-sa-footer .form-group')).find(function (g) {
            return g.querySelector('label') && g.querySelector('label').textContent.includes('Text kêu gọi');
        });
        var text = group ? group.querySelector('textarea').value : '';
        summaryText = 'Text: "' + text + '"';
    }

    var row = document.querySelector('.ldp-section-row[data-section-id="' + sectionId + '"]');
    if (row) {
        var descEl = row.querySelector('span[style*="var(--text-muted)"]') || row.querySelector('div > span:last-child');
        if (descEl) {
            descEl.textContent = summaryText;
        }
    }

    showLdpToast('Đã lưu thay đổi cho section thành công!');
    ldpCloseSection();
}

// Realtime SEO Preview
function updateLdpSeoPreview() {
    var titleInput = document.getElementById('ldp-meta-title');
    var descInput = document.getElementById('ldp-meta-desc');
    var slugInput = document.getElementById('ldp-url-slug');

    var prevTitle = document.getElementById('ldp-seo-prev-title');
    var prevDesc = document.getElementById('ldp-seo-prev-desc');
    var prevSlug = document.getElementById('ldp-seo-prev-slug');

    if (titleInput && prevTitle) prevTitle.textContent = titleInput.value || 'Khuyến mãi Internet Tháng 5 - FPT Telecom';
    if (descInput && prevDesc) prevDesc.textContent = descInput.value || 'Đăng ký lắp đặt cáp quang FPT...';
    if (slugInput && prevSlug) prevSlug.textContent = slugInput.value || 'km-internet-t5';
}

// Realtime UTM Preview
function updateLdpUtmPreview() {
    var slug = document.getElementById('ldp-url-slug') ? document.getElementById('ldp-url-slug').value : 'km-internet-t5';
    var source = document.getElementById('ldp-utm-source') ? document.getElementById('ldp-utm-source').value : '';
    var medium = document.getElementById('ldp-utm-medium') ? document.getElementById('ldp-utm-medium').value : '';
    var campaign = document.getElementById('ldp-utm-campaign') ? document.getElementById('ldp-utm-campaign').value : '';

    var url = 'fpt.vn/' + slug;
    var params = [];
    if (source) params.push('utm_source=' + encodeURIComponent(source));
    if (medium) params.push('utm_medium=' + encodeURIComponent(medium));
    if (campaign) params.push('utm_campaign=' + encodeURIComponent(campaign));

    var fullUrl = url + (params.length > 0 ? '?' + params.join('&') : '');
    var previewText = document.getElementById('ldp-utm-preview-text');
    if (previewText) previewText.textContent = fullUrl;
}

// Copy UTM URL to clipboard
function ldpCopyUtm() {
    var previewText = document.getElementById('ldp-utm-preview-text');
    if (!previewText) return;
    var text = previewText.textContent || previewText.innerText;
    navigator.clipboard.writeText(text).then(function () {
        var btn = document.querySelector('#ldp-utm-preview-box button');
        if (btn) {
            var originalText = btn.textContent;
            btn.textContent = '✅ Đã chép!';
            btn.style.background = 'rgba(16, 185, 129, 0.15)';
            btn.style.color = '#10b981';
            btn.style.borderColor = 'rgba(16, 185, 129, 0.3)';
            setTimeout(function () {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.style.color = '';
                btn.style.borderColor = '';
            }, 1500);
        }
    }).catch(function (err) {
        console.error('Không thể sao chép URL: ', err);
    });
}

// Generate UTM automatically
function ldpGenerateUtm() {
    var campaignName = document.getElementById('ldp-campaign-name') ? document.getElementById('ldp-campaign-name').value : '';
    if (!campaignName) return;
    var slug = campaignName.toLowerCase()
        .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
        .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
        .replace(/ì|í|ị|ỉ|ĩ/g, "i")
        .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
        .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
        .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
        .replace(/đ/g, "d")
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-");

    var sourceEl = document.getElementById('ldp-utm-source');
    var mediumEl = document.getElementById('ldp-utm-medium');
    var campaignEl = document.getElementById('ldp-utm-campaign');
    if (sourceEl) sourceEl.value = 'direct';
    if (mediumEl) mediumEl.value = 'referral';
    if (campaignEl) campaignEl.value = slug;
    updateLdpUtmPreview();
}

function ldpImportHtmlFile(input) {
    if (!input.files || !input.files[0]) return;
    var reader = new FileReader();
    reader.onload = function (e) {
        var ta = document.getElementById('ldp-html-editor');
        if (ta) { ta.value = e.target.result; showLdpToast('Import HTML OK'); }
    };
    reader.readAsText(input.files[0]);
    input.value = '';
}

function ldpFormatHtml() {
    var ta = document.getElementById('ldp-html-editor');
    if (!ta) return;
    var indent = 0;
    var formatted = ta.value
        .replace(/>\s*</g, '>\n<')
        .split('\n')
        .map(function (line) {
            line = line.trim();
            if (!line) return '';
            if (/^<\//.test(line)) indent = Math.max(0, indent - 1);
            var out = '    '.repeat(indent) + line;
            if (/^<[^\/!][^>]*[^\/]>$/.test(line) && !/^<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)/.test(line)) indent++;
            return out;
        })
        .join('\n');
    ta.value = formatted;
    showLdpToast('Format HTML OK');
}

// Move section up/down
function ldpMoveSection(btn, dir) {
    var item = btn.closest('.ldp-sections-list > div > div') || btn.parentElement.parentElement;
    if (!item) return;
    var parent = item.parentElement;
    if (dir === 'up') {
        var prev = item.previousElementSibling;
        if (prev) parent.insertBefore(item, prev);
    } else {
        var next = item.nextElementSibling;
        if (next) parent.insertBefore(next, item);
    }
}

// File upload mockup
function ldpHandleFileUpload(input) {
    var file = input.files[0];
    if (!file) return;
    var url = URL.createObjectURL(file);
    var wrapper = input.closest('.media-upload-wrapper');
    if (wrapper) {
        var urlInput = wrapper.querySelector('.media-url');
        if (urlInput) urlInput.value = '/media/uploads/' + file.name;
        var preview = wrapper.querySelector('.media-preview');
        if (preview) {
            preview.style.display = 'flex';
            var img = preview.querySelector('img');
            if (img) img.src = url;
        }
    }
}

function ldpRemoveUploadedFile(crossBtn) {
    event.stopPropagation();
    var wrapper = crossBtn.closest('.media-upload-wrapper');
    if (wrapper) {
        var urlInput = wrapper.querySelector('.media-url');
        if (urlInput) urlInput.value = '';
        var fileInput = wrapper.querySelector('.media-file-input');
        if (fileInput) fileInput.value = '';
        var preview = wrapper.querySelector('.media-preview');
        if (preview) preview.style.display = 'none';
    }
}

// Dynamic Testimonials
function ldpAddTestimonial() {
    var list = document.getElementById('inet-testimonials-list');
    if (!list) return;
    var idx = list.children.length + 1;
    var div = document.createElement('div');
    div.style.cssText = 'border:1px solid var(--border-glass); border-radius:8px; padding:14px; position:relative; margin-bottom:10px;';
    div.innerHTML = '<button class="btn btn-secondary btn-sm" style="position:absolute; top:8px; right:8px; color:var(--danger); border-color:rgba(239,68,68,0.2); padding:2px 6px;" onclick="this.parentElement.remove()" title="Xóa đánh giá">🗑</button>'
        + '<div style="display:grid; grid-template-columns:80px 1fr; gap:12px; margin-top:10px;">'
        + '<div class="form-group"><label>Avatar</label>'
        + '<div class="media-upload-wrapper" style="display:flex; flex-direction:column; gap:4px;">'
        + '<input type="text" class="form-input media-url" placeholder="URL">'
        + '<input type="file" class="media-file-input" style="display:none;" accept="image/*" onchange="ldpHandleFileUpload(this)">'
        + '<button class="btn btn-secondary btn-sm" style="font-size:10px; padding:4px;" onclick="this.previousElementSibling.click()">Upload</button>'
        + '<div class="media-preview" style="width:30px; height:30px; border-radius:4px; border:1px solid var(--border-glass); background:rgba(0,0,0,0.2); display:none; align-items:center; justify-content:center; overflow:hidden; flex-shrink:0; position:relative; margin-top:4px;">'
        + '<img src="" style="width:100%; height:100%; object-fit:cover;"><span style="position:absolute; top:-2px; right:-2px; background:rgba(239,68,68,0.85); color:#fff; font-size:8px; width:10px; height:10px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer;" onclick="ldpRemoveUploadedFile(this)">✕</span></div></div></div>'
        + '<div>'
        + '<div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">'
        + '<div class="form-group"><label>Tên khách hàng</label><input type="text" class="form-input" placeholder="Tên khách hàng ' + idx + '"></div>'
        + '<div class="form-group"><label>Rating (1–5 ⭐)</label><input type="number" class="form-input" value="5" min="1" max="5" style="width:100%;"></div>'
        + '</div>'
        + '<div class="form-group"><label>Nội dung đánh giá</label><textarea class="form-textarea" rows="2" placeholder="Nội dung đánh giá..."></textarea></div>'
        + '</div></div>';
    list.appendChild(div);
}

// Dynamic Promo Cards
function ldpAddPromo() {
    var list = document.getElementById('inet-promo-list');
    if (!list) return;
    var idx = list.children.length + 1;
    var div = document.createElement('div');
    div.style.cssText = 'border:1px solid var(--border-glass); border-radius:8px; padding:14px; position:relative; margin-top:10px; background:var(--bg-secondary);';
    div.innerHTML = '<button class="btn btn-secondary btn-sm" style="position:absolute; top:8px; right:8px; color:var(--danger); border-color:rgba(239,68,68,0.2); padding:2px 6px;" onclick="this.parentElement.remove()" title="Xóa khuyến mãi">🗑</button>'
        + '<div style="display:grid; grid-template-columns:1fr; gap:10px; margin-top:10px;">'
        + '<div class="form-group" style="margin-bottom:0;"><label style="font-size:11px;">Tiêu đề KM ' + idx + '</label><input type="text" class="form-input" placeholder="Nhập tiêu đề khuyến mãi..."></div>'
        + '<div class="form-group" style="margin-bottom:0;"><label style="font-size:11px;">Ảnh banner KM ' + idx + '</label>'
        + '<div class="media-upload-wrapper" style="display:flex; gap:8px; align-items:center; width:100%;">'
        + '<input type="text" class="form-input media-url" placeholder="/media/uploads/..." style="flex:1;">'
        + '<input type="file" class="media-file-input" style="display:none;" accept="image/*" onchange="ldpHandleFileUpload(this)">'
        + '<button class="btn btn-secondary btn-sm" onclick="this.previousElementSibling.click()">Upload</button>'
        + '<div class="media-preview" style="width:30px; height:30px; border-radius:4px; border:1px solid var(--border-glass); background:rgba(0,0,0,0.2); display:none; align-items:center; justify-content:center; overflow:hidden; flex-shrink:0; position:relative;">'
        + '<img src="" style="width:100%; height:100%; object-fit:cover;"><span style="position:absolute; top:-2px; right:-2px; background:rgba(239,68,68,0.85); color:#fff; font-size:8px; width:10px; height:10px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer;" onclick="ldpRemoveUploadedFile(this)">✕</span></div></div></div>'
        + '<div class="form-group" style="margin-bottom:0;"><label style="font-size:11px;">Link URL KM ' + idx + '</label><input type="text" class="form-input" placeholder="Nhập link liên kết (vd: /dang-ky)..."></div>'
        + '</div>';
    list.appendChild(div);
}

// Sync FAQ database to specific fields
function ldpSyncFaqToFields(selectEl) {
    var faqId = selectEl.value;
    if (!faqId) return;
    var faqData = faqArticlesData[faqId];
    if (!faqData) return;
    var parentDiv = selectEl.closest('.faq-item') || selectEl.closest('div[style*="border-glass"]') || selectEl.parentElement.parentElement;
    if (parentDiv) {
        var questionInput = parentDiv.querySelector('.faq-question-input');
        var answerTextarea = parentDiv.querySelector('.faq-answer-textarea');
        if (questionInput) questionInput.value = faqData.question;
        if (answerTextarea) answerTextarea.value = faqData.answer;
        showLdpToast('Đã đồng bộ từ kho FAQ: ' + faqData.question);
    }
}

// Add FAQ Item Dynamically
function ldpAddFaqItem(listId, qText, aText) {
    var targetListId = 'inet-faq-list';
    var actualQ = qText;
    var actualA = aText;

    if (listId && typeof listId === 'string' && document.getElementById(listId)) {
        targetListId = listId;
    } else {
        actualQ = listId;
        actualA = qText;
    }

    var list = document.getElementById(targetListId);
    if (!list) return;
    var idx = list.children.length + 1;
    var div = document.createElement('div');
    div.className = 'faq-item';
    div.style.cssText = 'border:1px solid var(--border-glass); border-radius:8px; padding:14px; position:relative; margin-top:10px; background:var(--bg-secondary);';

    var optionsHtml = '<option value="">-- Chọn câu hỏi từ FAQ chung để đồng bộ --</option>';
    for (var key in faqArticlesData) {
        optionsHtml += '<option value="' + key + '">' + faqArticlesData[key].question + '</option>';
    }

    div.innerHTML = '<button class="btn btn-secondary btn-sm" style="position:absolute; top:8px; right:8px; color:var(--danger); border-color:rgba(239,68,68,0.2); padding:2px 6px;" onclick="this.parentElement.remove()" title="Xóa câu hỏi">🗑</button>'
        + '<div style="display:flex; flex-direction:column; gap:10px; margin-top:10px;">'
        + '<div class="form-group" style="margin-bottom:0;"><label style="font-size:11px; display:block; margin-bottom:4px;">Đồng bộ từ kho FAQ chung</label>'
        + '<select class="form-input faq-sync-select" onchange="ldpSyncFaqToFields(this)" style="padding:6px 8px; font-size:12px;">' + optionsHtml + '</select></div>'
        + '<div class="form-group" style="margin-bottom:0;"><label style="font-size:11px;">Câu hỏi ' + idx + '</label><input type="text" class="form-input faq-question-input" value="' + (actualQ || '') + '" placeholder="Nhập câu hỏi..."></div>'
        + '<div class="form-group" style="margin-bottom:0;"><label style="font-size:11px;">Trả lời ' + idx + '</label><textarea class="form-textarea faq-answer-textarea" rows="2" placeholder="Nhập câu trả lời...">' + (actualA || '') + '</textarea></div>'
        + '</div>';
    list.appendChild(div);
}

function ldpAddSaMovieItem(btnEl, movieTitle, moviePoster, movieUrl) {
    var container = btnEl.previousElementSibling;
    if (!container) return;
    var idx = container.querySelectorAll('.sa-movie-item').length + 1;
    
    var mTitle = movieTitle || '';
    var mPoster = moviePoster || '';
    var mUrl = movieUrl || '';
    
    var item = document.createElement('div');
    item.className = 'sa-movie-item';
    item.style.cssText = 'border:1px solid rgba(255,255,255,0.06); border-radius:6px; padding:8px; background:rgba(255,255,255,0.02); display:flex; flex-direction:column; gap:6px; margin-bottom:6px;';
    item.innerHTML = '<div style="display:flex; justify-content:space-between; align-items:center;">'
        + '<span style="font-size:10px; font-weight:600; color:var(--warning);">Phim ' + idx + '</span>'
        + '<button class="btn btn-secondary btn-sm" style="color:var(--danger); border-color:transparent; background:transparent; padding:0; font-size:10px;" onclick="this.closest(\'.sa-movie-item\').remove()">Xóa</button>'
        + '</div>'
        + '<div class="form-group" style="margin:0;"><label style="font-size:9px; margin-bottom:2px;">Tên phim</label><input type="text" class="form-input form-input-sm movie-title" value="' + mTitle + '" placeholder="vd: Bạch Nhật Đề Đăng"></div>'
        + '<div class="form-group" style="margin:0;"><label style="font-size:9px; margin-bottom:2px;">Poster phim</label>'
        + '<div class="media-upload-wrapper" style="display:flex; gap:4px; align-items:center; width:100%;">'
        + '<input type="text" class="form-input form-input-sm media-url movie-poster" value="' + mPoster + '" placeholder="URL poster" style="flex:1;">'
        + '<input type="file" class="media-file-input" style="display:none;" accept="image/*" onchange="ldpHandleFileUpload(this)">'
        + '<button class="btn btn-secondary btn-sm" style="padding:2px 6px; font-size:10px;" onclick="this.previousElementSibling.click()">Upload</button>'
        + '</div></div>'
        + '<div class="form-group" style="margin:0;"><label style="font-size:9px; margin-bottom:2px;">URL Phim / Đăng ký</label><input type="text" class="form-input form-input-sm movie-url" value="' + mUrl + '" placeholder="vd: /xem-phim/bach-nhat-de-dang"></div>';
    
    container.appendChild(item);
}

// ===== Tag-based Mapping & Article Sync Logic =====
var mockArticles = [
    { title: "Hướng dẫn cài đặt modem Wi-Fi 6 thế hệ mới", tag: "wifi6", type: "tin-tuc" },
    { title: "Ưu đãi lắp đặt cáp quang FPT giá cực rẻ tháng này", tag: "internet", type: "khuyen-mai" },
    { title: "Top 5 tính năng đột phá trên FPT Camera IQ3", tag: "camera", type: "tin-tuc" },
    { title: "Gói FPT Play SMAX có gì hot mà giới trẻ mê mệt?", tag: "truyenhinh", type: "tin-tuc" },
    { title: "Khắc phục lỗi mạng chập chờn tại nhà đơn giản", tag: "internet", type: "tin-tuc" },
    { title: "Sử dụng camera an ninh sao cho an toàn bảo mật?", tag: "camera", type: "faq" },
    { title: "[Khuyến mãi] Tặng ngay voucher 100k khi lắp Internet", tag: "khuyenmai", type: "khuyen-mai" },
    { title: "Đại hội thể thao phát sóng trực tiếp trên FPT Play", tag: "truyenhinh", type: "tin-tuc" },
    { title: "Trải nghiệm thực tế công nghệ Wi-Fi 7 đầu tiên tại Việt Nam", tag: "wifi7", type: "tin-tuc" },
    { title: "Hướng dẫn nâng cấp lên thiết bị Wi-Fi 7 của FPT", tag: "wifi7", type: "faq" },
    { title: "Độc quyền phát sóng giải bóng đá Ngoại Hạng Anh trên FPT Play", tag: "thethao", type: "tin-tuc" },
    { title: "Giải pháp lưu trữ đám mây Cloud Camera bảo mật tuyệt đối", tag: "cloud", type: "tin-tuc" },
    { title: "Ưu đãi lắp đặt gói cước Lux Wi-Fi 6 tốc độ cao", tag: "lux", type: "khuyen-mai" }
];

var newsTagsData = {
    'tag-1': { id: 'tag-1', name: 'internet', slug: 'internet', count: 2, status: 'Active' },
    'tag-2': { id: 'tag-2', name: 'camera', slug: 'camera', count: 2, status: 'Active' },
    'tag-3': { id: 'tag-3', name: 'wifi6', slug: 'wifi6', count: 1, status: 'Active' },
    'tag-4': { id: 'tag-4', name: 'truyenhinh', slug: 'truyenhinh', count: 2, status: 'Active' },
    'tag-5': { id: 'tag-5', name: 'khuyenmai', slug: 'khuyenmai', count: 1, status: 'Active' },
    'tag-6': { id: 'tag-6', name: 'wifi7', slug: 'wifi7', count: 2, status: 'Active' },
    'tag-7': { id: 'tag-7', name: 'thethao', slug: 'thethao', count: 1, status: 'Active' },
    'tag-8': { id: 'tag-8', name: 'cloud', slug: 'cloud', count: 1, status: 'Active' },
    'tag-9': { id: 'tag-9', name: 'lux', slug: 'lux', count: 1, status: 'Active' },
    'tag-10': { id: 'tag-10', name: 'hotro-kythuat', slug: 'hotro-kythuat', count: 0, status: 'Draft' }
};

var tagMappingData = {
    'internet': { skus: ['INT-GIGA', 'INT-SKY', 'MODEM-AX3000GZ'], fallback: true },
    'camera': { skus: ['CAM-IQ3', 'CAM-SE'], fallback: true },
    'wifi6': { skus: ['MODEM-AX3000GZ', 'INT-SKY'], fallback: false },
    'truyenhinh': { skus: ['PLAY-MAX'], fallback: true }
};

var skuTagsData = {};

function syncTagMappingToSku() {
    skuTagsData = {};
    for (let tag in tagMappingData) {
        tagMappingData[tag].skus.forEach(sku => {
            if (!skuTagsData[sku]) {
                skuTagsData[sku] = [];
            }
            if (!skuTagsData[sku].includes(tag)) {
                skuTagsData[sku].push(tag);
            }
        });
    }
}

// Render danh sách tag chỉ đọc ở tab Content của SKU Detail
function renderSkuTagsReadonly(skuCode) {
    const listEl = document.getElementById('sku-tag-readonly-list');
    if (!listEl) return;
    listEl.innerHTML = '';

    syncTagMappingToSku();
    const tags = skuTagsData[skuCode] || [];
    if (tags.length === 0) {
        listEl.innerHTML = '<span style="color:var(--text-muted); font-style:italic;">Không có tag nào liên kết.</span>';
        return;
    }

    tags.forEach(tag => {
        const badge = document.createElement('span');
        badge.className = 'badge';
        badge.style.background = 'rgba(249, 115, 22, 0.15)';
        badge.style.color = '#FB923C';
        badge.style.border = '1px solid rgba(249, 115, 22, 0.3)';
        badge.style.padding = '3px 8px';
        badge.style.borderRadius = '4px';
        badge.style.fontSize = '11px';
        badge.innerText = '#' + tag;
        listEl.appendChild(badge);
    });
}

function renderTagMappingTable() {
    const tbody = document.getElementById('tag-mapping-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const searchValue = document.getElementById('tag-mapping-search').value.trim().toLowerCase();

    for (let tag in tagMappingData) {
        if (searchValue && !tag.toLowerCase().includes(searchValue)) {
            continue;
        }

        const data = tagMappingData[tag];

        // Tra cứu thông tin hiển thị và trạng thái của Tag từ newsTagsData
        let displayTagName = tag;
        let tagObj = null;
        for (let id in newsTagsData) {
            if (newsTagsData[id].slug === tag) {
                tagObj = newsTagsData[id];
                displayTagName = newsTagsData[id].name;
                break;
            }
        }

        const draftBadge = (tagObj && tagObj.status === 'Draft')
            ? ' <span class="badge warning" style="font-size:9.5px; padding:1px 4px; vertical-align:middle; border-radius:3px; font-weight:normal; margin-left:4px;">Nháp</span>'
            : '';

        // Đếm số bài viết trùng khớp
        const matchedCount = mockArticles.filter(art => art.tag === tag).length;

        const tr = document.createElement('tr');
        tr.style.cursor = 'pointer';
        tr.onclick = function () { selectTagForConfig(tag); };

        // Tạo badges cho SKUs (Thu gọn khi > 3 SKUs)
        let skuBadges = '';
        if (data.skus.length === 0) {
            skuBadges = '<span style="color:var(--text-muted); font-style:italic; font-size:11px;">Chưa gán</span>';
        } else {
            const maxDisplay = 3;
            const displayedSkus = data.skus.slice(0, maxDisplay);
            const remainingCount = data.skus.length - maxDisplay;

            displayedSkus.forEach(sku => {
                skuBadges += `<span class="badge" style="background:rgba(245,158,11,0.1); color:var(--warning); margin-right:4px; font-size:10px; padding:2px 5px; border-radius:3px;">${sku}</span>`;
            });

            if (remainingCount > 0) {
                const allSkusString = data.skus.join(', ');
                skuBadges += `<span class="badge" style="background:rgba(255,255,255,0.08); color:var(--text-muted); font-size:10px; padding:2px 5px; border-radius:3px; cursor:help;" title="${allSkusString}">+${remainingCount} SKUs...</span>`;
            }
        }

        // Trạng thái fallback
        const fallbackBadge = data.fallback
            ? '<span class="badge" style="background:rgba(16,185,129,0.15); color:var(--success); border:1px solid rgba(16,185,129,0.3); font-size:10px;">Bật</span>'
            : '<span class="badge" style="background:rgba(255,255,255,0.05); color:var(--text-muted); border:1px solid rgba(255,255,255,0.1); font-size:10px;">Tắt</span>';

        tr.innerHTML = `
                    <td style="font-weight:600; color:var(--primary); font-size:13px;">#${displayTagName}${draftBadge}</td>
                    <td><div style="display:flex; flex-wrap:wrap; gap:2px;">${skuBadges}</div></td>
                    <td>${fallbackBadge}</td>
                    <td style="text-align:center;"><span class="badge active" style="font-size:11px; padding:2px 6px;">${matchedCount} bài</span></td>
                    <td style="text-align:right;" onclick="event.stopPropagation();">
                        <button class="btn btn-sm" style="background:rgba(249,115,22,0.15); color:#FB923C; padding:4px 8px; border:none; margin-right:4px;" onclick="selectTagForConfig('${tag}')">✏️ Cấu hình</button>
                        <button class="btn btn-sm" style="background:rgba(239,68,68,0.15); color:#ef4444; padding:4px 8px; border:none;" onclick="deleteTagMapping('${tag}')">🗑</button>
                    </td>
                `;
        tbody.appendChild(tr);
    }

    if (tbody.children.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; color:var(--text-muted); font-style:italic; padding:20px;">Không tìm thấy tag nào khớp.</td></tr>';
    }
}

function filterTagMappingTable() {
    renderTagMappingTable();
}

const availableSkus = [
    'INT-GIGA', 'INT-SKY', 'CAM-IQ3', 'CAM-SE', 'PLAY-MAX', 'MODEM-AX3000GZ',
    'INT-META', 'INT-LUX500', 'INT-LUX800', 'INT-F1-GIGA', 'INT-F1-SKY', 'INT-F1-META',
    'CAM-OUTDOOR', 'CAM-PLAY', 'CAM-IQ2', 'CAM-IQ25', 'CAM-DOME',
    'PLAY-VIP', 'PLAY-SPORT', 'PLAY-KPLUS', 'PLAY-PREMIUM',
    'DEV-ONT-AC1000C', 'DEV-AP-AX1800C', 'DEV-MESH-AC1200', 'DEV-MESH-AX1500', 'DEV-STB-FPTPLAY'
];
const skuNames = {
    'INT-GIGA': 'Internet Giga (150Mbps)',
    'INT-SKY': 'Internet Sky (1Gbps/150Mbps)',
    'CAM-IQ3': 'FPT Camera IQ3',
    'CAM-SE': 'FPT Camera SE',
    'PLAY-MAX': 'Gói FPT Play SMAX',
    'MODEM-AX3000GZ': 'Modem Wi-Fi 6 AX3000GZ',
    'INT-META': 'Internet Meta (1Gbps)',
    'INT-LUX500': 'Internet LUX 500 (500Mbps Wi-Fi 6)',
    'INT-LUX800': 'Internet LUX 800 (800Mbps Wi-Fi 6)',
    'INT-F1-GIGA': 'Internet Giga F1',
    'INT-F1-SKY': 'Internet Sky F1',
    'INT-F1-META': 'Internet Meta F1',
    'CAM-OUTDOOR': 'FPT Camera Outdoor',
    'CAM-PLAY': 'FPT Camera Play (Wi-Fi)',
    'CAM-IQ2': 'FPT Camera IQ 2',
    'CAM-IQ25': 'FPT Camera IQ 2.5',
    'CAM-DOME': 'FPT Camera Dome',
    'PLAY-VIP': 'Gói FPT Play VIP',
    'PLAY-SPORT': 'Gói FPT Play SPORT',
    'PLAY-KPLUS': 'Gói FPT Play K+',
    'PLAY-PREMIUM': 'Gói FPT Play Premium',
    'DEV-ONT-AC1000C': 'Modem ONT AC1000C V2',
    'DEV-AP-AX1800C': 'Access Point Wi-Fi 6 AX1800C',
    'DEV-MESH-AC1200': 'Thiết bị Access Point Mesh AC1200',
    'DEV-MESH-AX1500': 'Thiết bị Access Point Mesh AX1500 Wi-Fi 6',
    'DEV-STB-FPTPLAY': 'FPT Play Box 2026 (STB)'
};

var tempSelectedSkus = [];

function getSkuServiceType(sku) {
    if (sku.startsWith('INT-')) return 'Internet';
    if (sku.startsWith('CAM-')) return 'Camera';
    if (sku.startsWith('PLAY-')) return 'Truyền hình';
    if (sku.startsWith('MODEM-') || sku.startsWith('DEV-')) return 'Thiết bị';
    return 'Khác';
}

function selectTagForConfig(tag) {
    document.getElementById('selected-tag-name').value = tag;
    document.getElementById('tag-config-title').innerHTML = `Cấu hình Tag: <span style="color:#fff; font-weight:700;">#${tag}</span>`;

    const linkedSkus = tagMappingData[tag] ? tagMappingData[tag].skus : [];
    tempSelectedSkus = [...linkedSkus];

    renderSelectedSkusPreview();

    // Fallback toggle
    const fallbackToggle = document.getElementById('tag-fallback-toggle');
    fallbackToggle.checked = tagMappingData[tag] ? tagMappingData[tag].fallback : false;

    // Update preview status
    document.getElementById('tag-preview-status').className = 'badge active';
    document.getElementById('tag-preview-status').innerText = 'Đang Preview Tag: #' + tag;

    updateTagMappingPreview();

    // Mở modal cấu hình (dạng drawer trượt từ phải qua)
    var overlay = document.getElementById('tag-config-modal');
    var drawerContent = document.getElementById('tag-config-drawer-content');
    overlay.style.display = 'flex';
    setTimeout(function () { drawerContent.style.transform = 'translateX(0)'; }, 10);
}

function renderSelectedSkusPreview() {
    const previewDiv = document.getElementById('tag-selected-skus-preview');
    if (!previewDiv) return;
    previewDiv.innerHTML = '';

    if (tempSelectedSkus.length === 0) {
        previewDiv.innerHTML = '<span style="color:var(--text-muted); font-style:italic; font-size:11.5px; align-self:center; width:100%; text-align:center;">Chưa có SKU nào được liên kết</span>';
        return;
    }

    tempSelectedSkus.forEach(sku => {
        const badge = document.createElement('span');
        badge.className = 'badge';
        badge.style.background = 'rgba(255,255,255,0.06)';
        badge.style.border = '1px solid rgba(255,255,255,0.1)';
        badge.style.color = '#fff';
        badge.style.display = 'inline-flex';
        badge.style.alignItems = 'center';
        badge.style.gap = '6px';
        badge.style.padding = '4px 8px';
        badge.style.borderRadius = '4px';
        badge.style.fontSize = '12px';

        badge.innerHTML = `
                    <strong style="color:var(--warning); font-family:monospace;">${sku}</strong>
                    <span onclick="removeSkuFromSelection('${sku}')" style="cursor:pointer; color:#ef4444; font-weight:bold; font-size:14px; line-height:1; display:inline-block; padding:0 2px;" title="Xóa nhanh">&times;</span>
                `;
        previewDiv.appendChild(badge);
    });
}

function removeSkuFromSelection(sku) {
    const index = tempSelectedSkus.indexOf(sku);
    if (index > -1) {
        tempSelectedSkus.splice(index, 1);
    }
    renderSelectedSkusPreview();
}

function openSkuSelectorModal() {
    const tag = document.getElementById('selected-tag-name').value;
    if (!tag) {
        alert('Vui lòng chọn hoặc tạo một Tag trước khi cấu hình SKU liên kết.');
        return;
    }
    document.getElementById('sku-selector-modal').style.display = 'flex';
    document.getElementById('sku-selector-search').value = '';
    document.getElementById('sku-selector-filter-type').value = '';
    renderSkuSelectorList();
}

function closeSkuSelectorModal() {
    document.getElementById('sku-selector-modal').style.display = 'none';
}

function renderSkuSelectorList() {
    const listDiv = document.getElementById('sku-selector-list');
    if (!listDiv) return;
    listDiv.innerHTML = '';

    const searchVal = document.getElementById('sku-selector-search').value.toLowerCase().trim();
    const typeFilter = document.getElementById('sku-selector-filter-type').value;

    let filtered = availableSkus.filter(sku => {
        const matchesSearch = sku.toLowerCase().includes(searchVal) || (skuNames[sku] && skuNames[sku].toLowerCase().includes(searchVal));
        const matchesType = !typeFilter || getSkuServiceType(sku) === typeFilter;
        return matchesSearch && matchesType;
    });

    document.getElementById('sku-selector-total-found').innerText = `Tìm thấy ${filtered.length} SKUs`;
    document.getElementById('sku-selector-count').innerText = `Đã chọn ${tempSelectedSkus.length} SKUs`;

    if (filtered.length === 0) {
        listDiv.innerHTML = '<div style="grid-column: span 2; color:var(--text-muted); font-style:italic; font-size:12px; text-align:center; padding:20px;">Không tìm thấy SKU nào phù hợp</div>';
        return;
    }

    filtered.forEach(sku => {
        const isChecked = tempSelectedSkus.includes(sku) ? 'checked' : '';
        const item = document.createElement('div');
        item.style.display = 'flex';
        item.style.alignItems = 'center';
        item.style.gap = '8px';
        item.style.padding = '8px 10px';
        item.style.background = isChecked ? 'rgba(249, 115, 22, 0.08)' : 'rgba(255,255,255,0.02)';
        item.style.border = '1px solid';
        item.style.borderColor = isChecked ? 'rgba(249, 115, 22, 0.2)' : 'rgba(255,255,255,0.04)';
        item.style.borderRadius = '6px';
        item.style.transition = '0.2s';

        item.innerHTML = `
                    <input type="checkbox" id="sel-sku-${sku}" value="${sku}" ${isChecked} onchange="toggleSkuInSelector('${sku}', this.checked)" style="accent-color:var(--primary); cursor:pointer; width:16px; height:16px;">
                    <label for="sel-sku-${sku}" style="font-size:12px; cursor:pointer; color:#ccc; display:flex; flex-direction:column; gap:2px; flex:1; margin:0;">
                        <span style="font-weight:600; color:var(--warning); font-family:monospace;">${sku}</span>
                        <span style="font-size:11px; color:#aaa;">${skuNames[sku]}</span>
                        <span style="font-size:10px; color:#666;">Phân loại: ${getSkuServiceType(sku)}</span>
                    </label>
                `;
        listDiv.appendChild(item);
    });
}

function toggleSkuInSelector(sku, isChecked) {
    const index = tempSelectedSkus.indexOf(sku);
    if (isChecked) {
        if (index === -1) {
            tempSelectedSkus.push(sku);
        }
    } else {
        if (index > -1) {
            tempSelectedSkus.splice(index, 1);
        }
    }
    document.getElementById('sku-selector-count').innerText = `Đã chọn ${tempSelectedSkus.length} SKUs`;

    const chk = document.getElementById(`sel-sku-${sku}`);
    if (chk) {
        const parent = chk.parentElement;
        if (isChecked) {
            parent.style.background = 'rgba(249, 115, 22, 0.08)';
            parent.style.borderColor = 'rgba(249, 115, 22, 0.2)';
        } else {
            parent.style.background = 'rgba(255,255,255,0.02)';
            parent.style.borderColor = 'rgba(255,255,255,0.04)';
        }
    }
}

function filterSkuSelectorList() {
    renderSkuSelectorList();
}

function bulkSelectSkus(selectAll) {
    const searchVal = document.getElementById('sku-selector-search').value.toLowerCase().trim();
    const typeFilter = document.getElementById('sku-selector-filter-type').value;

    let filtered = availableSkus.filter(sku => {
        const matchesSearch = sku.toLowerCase().includes(searchVal) || (skuNames[sku] && skuNames[sku].toLowerCase().includes(searchVal));
        const matchesType = !typeFilter || getSkuServiceType(sku) === typeFilter;
        return matchesSearch && matchesType;
    });

    filtered.forEach(sku => {
        const index = tempSelectedSkus.indexOf(sku);
        if (selectAll) {
            if (index === -1) {
                tempSelectedSkus.push(sku);
            }
        } else {
            if (index > -1) {
                tempSelectedSkus.splice(index, 1);
            }
        }
    });

    renderSkuSelectorList();
}

function confirmSkuSelection() {
    closeSkuSelectorModal();
    renderSelectedSkusPreview();
}

function updateTagMappingPreview() {
    const tag = document.getElementById('selected-tag-name').value;
    const previewList = document.getElementById('tag-article-preview-list');
    if (!previewList) return;
    previewList.innerHTML = '';

    if (!tag) {
        previewList.innerHTML = '<div style="color:var(--text-muted); font-style:italic; font-size:11px; text-align:center; padding-top:30px;">Vui lòng chọn một Tag từ danh sách để xem Live Preview bài viết.</div>';
        return;
    }

    // Lấy các bài viết trùng tag
    let matched = mockArticles.filter(art => art.tag === tag);
    const fallbackEnabled = document.getElementById('tag-fallback-toggle').checked;

    if (matched.length > 0) {
        matched.forEach(art => {
            const icon = art.type === 'faq' ? '❓' : '📄';
            const typeText = art.type === 'faq' ? 'FAQ' : art.type === 'khuyen-mai' ? 'Ưu đãi' : 'Tin tức';
            const badgeColor = art.type === 'faq' ? 'rgba(168,85,247,0.15)' : art.type === 'khuyen-mai' ? 'rgba(239,68,68,0.15)' : 'rgba(249,115,22,0.15)';
            const textColor = art.type === 'faq' ? '#d946ef' : art.type === 'khuyen-mai' ? '#ef4444' : '#FB923C';

            const item = document.createElement('div');
            item.style.padding = '8px';
            item.style.background = 'rgba(255,255,255,0.03)';
            item.style.border = '1px solid rgba(255,255,255,0.06)';
            item.style.borderRadius = '5px';
            item.style.display = 'flex';
            item.style.flexDirection = 'column';
            item.style.gap = '4px';

            item.innerHTML = `
                        <div style="font-size:12.5px; font-weight:500; color:#fff; display:flex; align-items:flex-start; gap:6px;">
                            <span style="font-size:12px;">${icon}</span>
                            <span>${art.title}</span>
                        </div>
                        <div style="display:flex; align-items:center; gap:6px; font-size:10px;">
                            <span class="badge" style="background:${badgeColor}; color:${textColor}; padding:1px 4px; border-radius:3px;">${typeText}</span>
                            <span style="color:var(--text-muted);">Khớp tag: #${tag}</span>
                        </div>
                    `;
            previewList.appendChild(item);
        });
    } else {
        if (fallbackEnabled) {
            let fallbacks = mockArticles.filter(art => art.tag === 'khuyenmai');
            if (fallbacks.length > 0) {
                fallbacks.forEach(art => {
                    const item = document.createElement('div');
                    item.style.padding = '8px';
                    item.style.background = 'rgba(245,158,11,0.04)';
                    item.style.border = '1px dashed rgba(245,158,11,0.2)';
                    item.style.borderRadius = '5px';
                    item.style.display = 'flex';
                    item.style.flexDirection = 'column';
                    item.style.gap = '4px';

                    item.innerHTML = `
                                <div style="font-size:12.5px; font-weight:500; color:#eee; display:flex; align-items:flex-start; gap:6px;">
                                    <span style="font-size:12px;">🎁</span>
                                    <span>${art.title}</span>
                                </div>
                                <div style="display:flex; align-items:center; gap:6px; font-size:10px;">
                                    <span class="badge" style="background:rgba(245,158,11,0.15); color:var(--warning); padding:1px 4px; border-radius:3px;">Khuyến mãi Hot</span>
                                    <span style="color:var(--text-muted); font-style:italic;">Fallback logic kích hoạt</span>
                                </div>
                            `;
                    previewList.appendChild(item);
                });
            } else {
                previewList.innerHTML = '<div style="color:var(--danger); font-size:11px; text-align:center; padding:15px; border:1px dashed rgba(239,68,68,0.2); border-radius:6px; background:rgba(239,68,68,0.02);">Chưa cấu hình bài viết Fallback.</div>';
            }
        } else {
            previewList.innerHTML = '<div style="color:var(--text-muted); font-size:11.5px; text-align:center; padding:20px; border:1px dashed rgba(255,255,255,0.06); border-radius:6px; background:rgba(255,255,255,0.01);">Không tìm thấy bài viết trùng khớp và quy tắc Fallback đang tắt.</div>';
        }
    }
}

function saveTagConfig() {
    const tag = document.getElementById('selected-tag-name').value;
    if (!tag) {
        alert('Vui lòng chọn Tag để lưu cấu hình.');
        return;
    }

    const fallback = document.getElementById('tag-fallback-toggle').checked;

    if (!tagMappingData[tag]) {
        tagMappingData[tag] = {};
    }
    tagMappingData[tag].skus = [...tempSelectedSkus];
    tagMappingData[tag].fallback = fallback;

    syncTagMappingToSku();
    renderTagMappingTable();

    const openSkuHdr = document.getElementById('sku-hdr-code');
    if (openSkuHdr && openSkuHdr.innerText) {
        renderSkuTagsReadonly(openSkuHdr.innerText);
    }

    alert(`Lưu cấu hình cho Tag #${tag} thành công!`);
    resetTagConfig();
}

function resetTagConfig() {
    tempSelectedSkus = [];
    document.getElementById('selected-tag-name').value = '';
    document.getElementById('tag-config-title').innerText = 'Chọn một Tag để cấu hình';
    renderSelectedSkusPreview();
    document.getElementById('tag-fallback-toggle').checked = false;

    document.getElementById('tag-preview-status').className = 'badge';
    document.getElementById('tag-preview-status').innerText = 'Vui lòng chọn Tag';

    updateTagMappingPreview();

    // Đóng modal cấu hình (dạng drawer trượt từ phải qua)
    var drawerContent = document.getElementById('tag-config-drawer-content');
    if (drawerContent) {
        drawerContent.style.transform = 'translateX(100%)';
    }
    setTimeout(function () {
        document.getElementById('tag-config-modal').style.display = 'none';
    }, 260);
}

function showAddTagMappingModal() {
    // Render danh sách tags vào select dropdown
    const selectEl = document.getElementById('select-mapping-tag');
    if (selectEl) {
        selectEl.innerHTML = '';

        // Thêm option mặc định
        const defaultOpt = document.createElement('option');
        defaultOpt.value = '';
        defaultOpt.innerText = '-- Chọn Tag để thiết lập --';
        selectEl.appendChild(defaultOpt);

        // Lặp qua newsTagsData để thêm các tag đang active
        for (let id in newsTagsData) {
            const tag = newsTagsData[id];
            if (tag.status === 'Active') {
                const opt = document.createElement('option');
                opt.value = tag.slug;
                opt.innerText = '#' + tag.name;
                selectEl.appendChild(opt);
            }
        }
    }

    document.getElementById('add-tag-mapping-modal').style.display = 'flex';
}

function closeAddTagMappingModal() {
    document.getElementById('add-tag-mapping-modal').style.display = 'none';
    document.getElementById('select-mapping-tag').value = '';
}

function submitAddTagMapping() {
    const selectedTag = document.getElementById('select-mapping-tag').value;
    if (!selectedTag) {
        alert('Vui lòng chọn một Tag.');
        return;
    }

    // Nếu tagMappingData chưa có tag này, khởi tạo mapping trống
    if (!tagMappingData[selectedTag]) {
        tagMappingData[selectedTag] = { skus: [], fallback: false };
    }

    // Đồng bộ và render
    syncTagMappingToSku();
    renderTagMappingTable();
    closeAddTagMappingModal();

    // Mở drawer cấu hình tag
    selectTagForConfig(selectedTag);
}

function deleteTagMapping(tag) {
    if (confirm(`Bạn có chắc chắn muốn xóa Tag Mapping #${tag}?\nHành động này sẽ hủy liên kết Tag này khỏi toàn bộ SKUs.`)) {
        delete tagMappingData[tag];

        // Đồng bộ và render
        syncTagMappingToSku();
        renderTagMappingTable();

        // Reset form nếu đang cấu hình chính tag vừa xóa
        const currentConfigTag = document.getElementById('selected-tag-name').value;
        if (currentConfigTag === tag) {
            resetTagConfig();
        }

        // Cập nhật SKU Detail đang mở (nếu có)
        const openSkuHdr = document.getElementById('sku-hdr-code');
        if (openSkuHdr && openSkuHdr.innerText) {
            renderSkuTagsReadonly(openSkuHdr.innerText);
        }
    }
}

// Tự động chạy đồng bộ lần đầu
syncTagMappingToSku();
updateNewsStats();
renderFaqTable();

// --- slug sync patch ---
// Sync slug vào URL bar khi preview mở
var _origPreviewNewsArticle = window.previewNewsArticle;
window.previewNewsArticle = function () {
    var slugEl = document.getElementById('art-slug');
    var titleEl = document.getElementById('art-title');
    var slugBar = document.getElementById('preview-slug-bar');
    var titleBc = document.getElementById('prev-art-title-breadcrumb');
    if (slugBar && slugEl) slugBar.textContent = slugEl.value || 'url-slug';
    if (titleBc && titleEl) titleBc.textContent = titleEl.value || 'Tiêu đề bài viết';
    if (_origPreviewNewsArticle) _origPreviewNewsArticle();
    document.getElementById('news-preview-modal').style.display = 'flex';
};
