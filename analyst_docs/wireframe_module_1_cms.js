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
    'pdh-sku': 'Nội dung gói bán', 'pdh-package': 'Gói bán & Giá & Phí',
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
    { group: 'CẤU HÌNH SẢN PHẨM', name: 'Nội dung gói bán' },
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
    'Nội dung gói bán': [[1, 1], [1, 1], [1, 0], [1, 0]],
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
    'Quản lý Người dùng': [[1, 1], [1, 0], [0, 0], [0, 0]],
    'Phân quyền tính năng': [[1, 1], [1, 0], [0, 0], [0, 0]],
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
                        <td colspan="7" style="padding:7px 20px;font-size:11px;font-weight:700;letter-spacing:1px;color:#a78bfa;text-transform:uppercase;border-right:1px solid var(--border-glass);">${mod.group}</td>
                    </tr>`;
        }
        const roles = sysPermByRole[mod.name] || [[1, 1], [0, 0], [0, 0], [0, 0]];
        let cells = '';
        roles.forEach((rp, ri) => {
            if (ri === 0) return; // Bỏ qua Super Admin
            const locked = false;
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
    document.getElementById('news-author-list').style.display = 'none';
    document.getElementById('news-author-form').style.display = 'none';

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
    } else if (tab === 'author-list') {
        document.getElementById('news-author-list').style.display = 'block';
        renderNewsAuthorsTable();
    }
}

// ===== LOGIC QUẢN LÝ TÁC GIẢ TIN TỨC (CRUD) =====
var newsAuthorsData = {
    'auth-1': {
        id: 'auth-1',
        name: 'Admin',
        slug: 'admin',
        email: 'admin@fpt.com.vn',
        phone: '0901234567',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80',
        bio: 'Quản trị viên hệ thống FPT Telecom',
        status: 'Active',
        socials: [
            { platform: 'facebook', url: 'https://facebook.com/admin.fpt' },
            { platform: 'instagram', url: 'https://instagram.com/admin.fpt' }
        ]
    },
    'auth-2': {
        id: 'auth-2',
        name: 'Phương Nam',
        slug: 'phuong-nam',
        email: 'namnp3@fpt.com.vn',
        phone: '0902345678',
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=80&q=80',
        bio: 'Biên tập viên công nghệ FPT Camera',
        status: 'Active',
        socials: [
            { platform: 'facebook', url: 'https://facebook.com/phuongnam.fpt' },
            { platform: 'instagram', url: 'https://instagram.com/phuongnam.fpt' },
            { platform: 'tiktok', url: 'https://tiktok.com/@phuongnam.fpt' }
        ]
    },
    'auth-3': {
        id: 'auth-3',
        name: 'Đức Nguyễn',
        slug: 'duc-nguyen',
        email: 'ducnd4@fpt.com.vn',
        phone: '0903456789',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
        bio: 'Biên tập viên thể thao FPT Play',
        status: 'Active',
        socials: [
            { platform: 'facebook', url: 'https://facebook.com/ducnguyen.fpt' }
        ]
    }
};

function renderNewsAuthorsTable() {
    const tbody = document.getElementById('newsauthor-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    const searchKw = (document.getElementById('news-author-search-keyword')?.value || '').toLowerCase().trim();

    // Đếm động số bài viết của mỗi tác giả
    const authorArticleCounts = {};
    for (let artId in newsArticlesData) {
        const art = newsArticlesData[artId];
        const authorName = art.author || 'Admin';
        authorArticleCounts[authorName] = (authorArticleCounts[authorName] || 0) + 1;
    }

    const socialEmojis = {
        facebook: '📘 Facebook',
        instagram: '📸 Instagram',
        tiktok: '🎵 TikTok',
        youtube: '🔴 YouTube',
        linkedin: '💼 LinkedIn',
        twitter: '🐦 Twitter/X',
        other: '🔗 Link'
    };
    const socialColors = {
        facebook: '#3b5998',
        instagram: '#e1306c',
        tiktok: '#ff0050',
        youtube: '#ff0000',
        linkedin: '#0077b5',
        twitter: '#1da1f2',
        other: '#9ca3af'
    };

    for (let id in newsAuthorsData) {
        const author = newsAuthorsData[id];

        if (searchKw && !author.name.toLowerCase().includes(searchKw) && !author.slug.toLowerCase().includes(searchKw) && !author.email.toLowerCase().includes(searchKw)) {
            continue;
        }

        const tr = document.createElement('tr');
        tr.setAttribute('data-author-id', author.id);

        const statusBadge = author.status === 'Active'
            ? '<span class="badge active">Active</span>'
            : '<span class="badge warning">Draft</span>';

        const count = authorArticleCounts[author.name] || 0;

        let socialHTML = '';
        if (author.socials && author.socials.length > 0) {
            socialHTML = author.socials.map(item => {
                const label = socialEmojis[item.platform] || '🔗 Link';
                const color = socialColors[item.platform] || '#9ca3af';
                return `<a href="${item.url}" target="_blank" title="${item.platform}" style="color: ${color}; text-decoration: none; font-size: 11px; display: inline-flex; align-items: center; gap: 3px; margin-right: 5px;">${label}</a>`;
            }).join('');
        } else {
            socialHTML = '<span style="color: var(--text-muted); font-size: 11px;">Chưa liên kết</span>';
        }

        tr.innerHTML = `
            <td style="text-align:center;">
                <img src="${author.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80'}" alt="Avatar" style="width:36px; height:36px; border-radius:50%; object-fit:cover; border:1px solid var(--border-glass);">
            </td>
            <td>
                <strong>${author.name}</strong>
                <div style="margin-top: 4px; display: flex; flex-wrap: wrap; gap: 4px 8px;">
                    ${socialHTML}
                </div>
            </td>
            <td>${author.slug}</td>
            <td>${author.email || '-'}</td>
            <td>${author.phone || '-'}</td>
            <td style="text-align:center;"><span class="badge" style="background:rgba(255,255,255,0.05); color:#fff; padding:3px 10px; border-radius:20px;">${count}</span></td>
            <td>${statusBadge}</td>
            <td style="text-align:right;">
                <button class="btn btn-secondary btn-sm" style="color:var(--primary); border-color:var(--primary);" onclick="window.editNewsAuthor('${author.id}')">Sửa</button>
                <button class="btn btn-secondary btn-sm" style="color:var(--danger); border-color:var(--danger); margin-left:5px;" onclick="window.deleteNewsAuthor('${author.id}')">Xóa</button>
            </td>
        `;
        tbody.appendChild(tr);
    }
}

function openAddNewsAuthorForm() {
    document.getElementById('newsauthor-edit-id').value = '';
    document.getElementById('newsauthor-name').value = '';
    document.getElementById('newsauthor-slug').value = '';
    document.getElementById('newsauthor-bio').value = '';
    document.getElementById('newsauthor-email').value = '';
    document.getElementById('newsauthor-phone').value = '';
    document.getElementById('newsauthor-avatar').value = '';
    document.getElementById('newsauthor-status').checked = true;
    document.getElementById('newsauthor-form-title').innerText = 'Tạo mới Tác giả';

    const container = document.getElementById('newsauthor-socials-container');
    if (container) {
        container.innerHTML = '';
        window.addSocialLinkRow('facebook', '');
    }

    document.getElementById('news-author-list').style.display = 'none';
    document.getElementById('news-author-form').style.display = 'block';
}

function editNewsAuthor(id) {
    const author = newsAuthorsData[id];
    if (!author) return;

    document.getElementById('newsauthor-edit-id').value = author.id;
    document.getElementById('newsauthor-name').value = author.name;
    document.getElementById('newsauthor-slug').value = author.slug;
    document.getElementById('newsauthor-bio').value = author.bio || '';
    document.getElementById('newsauthor-email').value = author.email || '';
    document.getElementById('newsauthor-phone').value = author.phone || '';
    document.getElementById('newsauthor-avatar').value = author.avatar || '';
    document.getElementById('newsauthor-status').checked = author.status === 'Active';
    document.getElementById('newsauthor-form-title').innerText = 'Chỉnh sửa Tác giả #' + author.id;

    const container = document.getElementById('newsauthor-socials-container');
    if (container) {
        container.innerHTML = '';
        if (author.socials && author.socials.length > 0) {
            author.socials.forEach(item => {
                window.addSocialLinkRow(item.platform, item.url);
            });
        } else {
            window.addSocialLinkRow('facebook', '');
        }
    }

    document.getElementById('news-author-list').style.display = 'none';
    document.getElementById('news-author-form').style.display = 'block';
}

function saveNewsAuthorAction() {
    const editId = document.getElementById('newsauthor-edit-id').value;
    const name = document.getElementById('newsauthor-name').value.trim();
    const slug = document.getElementById('newsauthor-slug').value.trim();

    if (!name || !slug) {
        showLdpToast('Vui lòng nhập đầy đủ Tên tác giả và Biệt danh (slug)!');
        return;
    }

    const id = editId || 'auth-' + (Object.keys(newsAuthorsData).length + 1);

    newsAuthorsData[id] = {
        id: id,
        name: name,
        slug: slug,
        bio: document.getElementById('newsauthor-bio').value.trim(),
        email: document.getElementById('newsauthor-email').value.trim(),
        phone: document.getElementById('newsauthor-phone').value.trim(),
        avatar: document.getElementById('newsauthor-avatar').value.trim() || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80',
        socials: window.getSocialLinksFromForm(),
        status: document.getElementById('newsauthor-status').checked ? 'Active' : 'Draft'
    };

    updateArticleAuthorOptions();
    renderNewsAuthorsTable();

    document.getElementById('news-author-form').style.display = 'none';
    document.getElementById('news-author-list').style.display = 'block';
    showLdpToast('Đã lưu thông tin tác giả thành công!');
}

function deleteNewsAuthor(id) {
    const author = newsAuthorsData[id];
    if (!author) return;

    if (confirm(`Bạn có chắc chắn muốn xóa tác giả "${author.name}" không?`)) {
        delete newsAuthorsData[id];
        updateArticleAuthorOptions();
        renderNewsAuthorsTable();
        showLdpToast('Đã xóa tác giả thành công!');
    }
}

function updateArticleAuthorOptions() {
    const selectEl = document.getElementById('art-author');
    if (!selectEl) return;
    const currentVal = selectEl.value;
    selectEl.innerHTML = '';
    for (let id in newsAuthorsData) {
        const author = newsAuthorsData[id];
        if (author.status !== 'Active') continue;
        const opt = document.createElement('option');
        opt.value = author.name;
        opt.innerText = author.name;
        selectEl.appendChild(opt);
    }
    if (currentVal && Array.from(selectEl.options).some(opt => opt.value === currentVal)) {
        selectEl.value = currentVal;
    } else {
        selectEl.value = 'Admin';
    }
}

// Gắn các hàm vào global window scope
window.openAddNewsAuthorForm = openAddNewsAuthorForm;
window.editNewsAuthor = editNewsAuthor;
window.saveNewsAuthorAction = saveNewsAuthorAction;
window.deleteNewsAuthor = deleteNewsAuthor;
window.renderNewsAuthorsTable = renderNewsAuthorsTable;
window.updateArticleAuthorOptions = updateArticleAuthorOptions;

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
        thumbUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=150&q=80',
        views: 342
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
        thumbUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=150&q=80',
        views: 1205
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
        thumbUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=150&q=80',
        views: 0
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
        date: isNew ? '22/05/2026' : newsArticlesData[id].date,
        views: newsArticlesData[id] ? (newsArticlesData[id].views || 0) : 0
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
    else if (status === 'Scheduled') statusBadge = `<span class="badge info news-art-status-badge" style="background:rgba(56,189,248,0.15); color:#38bdf8;">Scheduled</span>`;

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
                <td style="text-align:center;" class="news-art-views">${newsArticlesData[id].views || 0}</td>
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

function updateDactinhNoibatLimit() {
    var list = document.getElementById('dactinh-attr-list');
    if (!list) return;

    var checkedBoxes = list.querySelectorAll('.dactinh-noibat-chk:checked');
    var totalChecked = checkedBoxes.length;

    // Cập nhật badge đếm
    var counterEl = document.getElementById('dactinh-noibat-counter');
    if (counterEl) {
        counterEl.textContent = '(Đã chọn: ' + totalChecked + '/3)';
        if (totalChecked >= 3) {
            counterEl.style.color = '#10b981'; // Green
            counterEl.style.borderColor = 'rgba(16,185,129,0.3)';
            counterEl.style.background = 'rgba(16,185,129,0.08)';
        } else {
            counterEl.style.color = 'var(--warning)'; // Yellow
            counterEl.style.borderColor = 'rgba(245,158,11,0.25)';
            counterEl.style.background = 'rgba(245,158,11,0.08)';
        }
    }

    // Khóa/mở khóa các checkbox khác
    list.querySelectorAll('.dactinh-noibat-chk').forEach(function (chk) {
        var labelSpan = chk.nextElementSibling;
        if (!chk.checked) {
            if (totalChecked >= 3) {
                chk.disabled = true;
                if (labelSpan) {
                    labelSpan.style.color = 'rgba(255,255,255,0.2)';
                    labelSpan.textContent = 'Khóa (Max 3)';
                }
            } else {
                chk.disabled = false;
                if (labelSpan) {
                    labelSpan.style.color = 'var(--text-muted)';
                    labelSpan.textContent = 'Nổi bật';
                }
            }
        } else {
            chk.disabled = false;
            if (labelSpan) {
                labelSpan.style.color = 'var(--primary)';
                labelSpan.textContent = 'Nổi bật';
            }
        }
    });
}

function skuRenderDactinh(dataKey) {
    var list = document.getElementById('dactinh-attr-list');
    var sel = document.getElementById('dactinh-nhom-select-dropdown');
    if (!list) return;

    var isService = (dataKey === 'service');

    // Sync nhóm đặc tính dropdown/label
    var nhomLabel = dataKey === 'camera' ? 'Thông số Camera'
        : dataKey === 'modem' ? 'Thông số Router/Modem'
            : dataKey === 'play' ? 'Thông số Truyền hình FPT Play'
                : 'Thông số Dịch vụ Internet';
    if (sel) {
        if (sel.tagName === 'SELECT') {
            for (var i = 0; i < sel.options.length; i++) {
                if (sel.options[i].text === nhomLabel) {
                    sel.selectedIndex = i;
                    break;
                }
            }
        } else {
            sel.textContent = nhomLabel;
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
        // Dùng grid 6 cột cùng template với header mới
        div.style.cssText = 'display:grid;grid-template-columns:30px 60px 200px 1fr 110px 50px;align-items:center;padding:7px 0;' + (isLast ? '' : 'border-bottom:1px solid rgba(255,255,255,0.04);');

        var noibatCol = '<label class="col-noibat" style="display:flex;align-items:center;justify-content:center;gap:6px;cursor:pointer;">'
            + '<input type="checkbox" class="dactinh-noibat-chk"' + (r.highlight ? ' checked' : '') + ' style="accent-color:var(--primary);width:15px;height:15px;" onchange="updateDactinhNoibatLimit()">'
            + '<span style="font-size:11px;color:' + (r.highlight ? 'var(--primary)' : 'var(--text-muted)') + ';">Nổi bật</span>'
            + '</label>';

        var actionCol = '<div style="display:flex;justify-content:center;color:var(--text-muted);font-size:12px;" title="Được đồng bộ từ QLCS">🔒</div>';

        var dragCol = '<div style="display:flex;justify-content:center;color:var(--text-muted);cursor:move;" title="Kéo thả đổi vị trí">☰</div>';

        var iconCol = '<div style="display:flex;justify-content:center;align-items:center;">'
            + '<div style="width:32px;height:32px;border-radius:6px;background:rgba(255,255,255,0.07);border:1px dashed rgba(249,115,22,0.4);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:14px;" title="Upload Icon đặc tính" onclick="this.nextElementSibling.click()">📷</div>'
            + '<input type="file" accept="image/*" style="display:none;" onchange="if(this.files&&this.files[0]){var p=this.previousElementSibling;var fr=new FileReader();fr.onload=function(e){p.innerHTML=\'<img src=\\\'\'+e.target.result+\'\\\' style=\\\'width:100%;height:100%;object-fit:contain;border-radius:4px;\\\'>\'};fr.readAsDataURL(this.files[0]);}"></div>';

        var nameVal = r.name;
        var valueVal = r.value + (r.unit ? ' ' + r.unit : '');

        div.innerHTML = dragCol
            + iconCol
            + '<div><input type="text" class="form-input" style="padding:4px 8px; width:90%; font-size:13px; color:#fff;" value="' + nameVal + '" placeholder="Tên đặc tính"></div>'
            + '<div><input type="text" class="form-input" style="padding:4px 8px; width:95%; font-size:13px; color:#fff;" value="' + valueVal + '" placeholder="Giá trị"></div>'
            + noibatCol
            + actionCol;
        list.appendChild(div);
    });

    // Cập nhật trạng thái sau khi render
    updateDactinhNoibatLimit();
}

function skuAddDactinhRow() {
    var list = document.getElementById('dactinh-attr-list');
    if (!list) return;

    var div = document.createElement('div');
    div.className = 'dactinh-row';
    div.style.cssText = 'display:grid;grid-template-columns:30px 60px 200px 1fr 110px 50px;align-items:center;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.04);';

    var noibatCol = '<label class="col-noibat" style="display:flex;align-items:center;justify-content:center;gap:6px;cursor:pointer;">'
        + '<input type="checkbox" class="dactinh-noibat-chk" style="accent-color:var(--primary);width:15px;height:15px;" onchange="updateDactinhNoibatLimit()">'
        + '<span style="font-size:11px;color:var(--text-muted);">Nổi bật</span>'
        + '</label>';

    var actionCol = '<div style="display:flex;justify-content:center;">'
        + '<button type="button" class="btn btn-sm" style="background:rgba(239,68,68,0.15); color:var(--danger); border:1px solid rgba(239,68,68,0.25); padding:2px 6px;" onclick="this.parentElement.parentElement.remove(); updateDactinhNoibatLimit();" title="Xóa">🗑️</button>'
        + '</div>';

    var dragCol = '<div style="display:flex;justify-content:center;color:var(--text-muted);cursor:move;" title="Kéo thả đổi vị trí">☰</div>';

    var iconCol = '<div style="display:flex;justify-content:center;align-items:center;">'
        + '<div style="width:32px;height:32px;border-radius:6px;background:rgba(255,255,255,0.07);border:1px dashed rgba(249,115,22,0.4);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:14px;" title="Upload Icon đặc tính" onclick="this.nextElementSibling.click()">📷</div>'
        + '<input type="file" accept="image/*" style="display:none;" onchange="if(this.files&&this.files[0]){var p=this.previousElementSibling;var fr=new FileReader();fr.onload=function(e){p.innerHTML=\'<img src=\\\'\'+e.target.result+\'\\\' style=\\\'width:100%;height:100%;object-fit:contain;border-radius:4px;\\\'>\'};fr.readAsDataURL(this.files[0]);}"></div>';

    div.innerHTML = dragCol
        + iconCol
        + '<div><input type="text" class="form-input" style="padding:4px 8px; width:90%; font-size:13px; color:#fff;" value="" placeholder="Tên đặc tính"></div>'
        + '<div><input type="text" class="form-input" style="padding:4px 8px; width:95%; font-size:13px; color:#fff;" value="" placeholder="Giá trị"></div>'
        + noibatCol
        + actionCol;
    list.appendChild(div);

    // Cập nhật trạng thái sau khi thêm dòng
    updateDactinhNoibatLimit();
}

function applyDactinhTemplate() {
    var dropdown = document.getElementById('dactinh-nhom-select-dropdown');
    var selectedType = dropdown ? (dropdown.value || dropdown.textContent) : 'Thông số Router/Modem';
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
        // Kích hoạt lại đếm khi import xong (nếu có dữ liệu thật)
        setTimeout(updateDactinhNoibatLimit, 100);
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
    const bannerSelectSec = document.getElementById('blk-banner-section');
    const popupSelectSec = document.getElementById('blk-popup-section');

    if (goiCuocSec) goiCuocSec.style.display = 'none';
    if (articleSec) articleSec.style.display = 'none';
    if (faqSec) faqSec.style.display = 'none';
    if (bannerSec) bannerSec.style.display = 'none';
    if (pdhAssignSec) pdhAssignSec.style.display = 'none';
    if (bannerSelectSec) bannerSelectSec.style.display = 'none';
    if (popupSelectSec) popupSelectSec.style.display = 'none';

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

    // 6. Chọn Banner (Nguồn dữ liệu Banner)
    if (dataSource === 'banner') {
        if (bannerSelectSec) bannerSelectSec.style.display = 'block';
    }

    // 7. Chọn Popup (Nguồn dữ liệu Popup)
    if (dataSource === 'popup') {
        if (popupSelectSec) popupSelectSec.style.display = 'block';
    }
}

function onPopupTriggerTypeChange() {
    const triggerType = document.getElementById('popup-trigger-type').value;
    const delayGroup = document.getElementById('popup-delay-time-group');
    if (delayGroup) {
        if (triggerType === 'delay') {
            delayGroup.style.display = 'block';
        } else {
            delayGroup.style.display = 'none';
        }
    }
}

function showBlockBannerPickerModal() {
    document.getElementById('modal-block-banner-picker').style.display = 'flex';
}
function closeBlockBannerPickerModal() {
    document.getElementById('modal-block-banner-picker').style.display = 'none';
    const checkboxes = document.querySelectorAll('.banner-picker-cb');
    checkboxes.forEach(cb => cb.checked = false);
    const searchInput = document.getElementById('banner-picker-search');
    if (searchInput) {
        searchInput.value = '';
        filterPickerItems('banner');
    }
}
function addSelectedBannersToBlock() {
    const checkboxes = document.querySelectorAll('.banner-picker-cb');
    const tbody = document.querySelector('#blk-banner-section tbody');
    if (!tbody) return;

    let addedCount = 0;
    checkboxes.forEach(cb => {
        if (cb.checked) {
            const parts = cb.value.split('|');
            const name = parts[0];
            const img = parts[1];

            // Check trùng lặp
            let isDuplicate = false;
            tbody.querySelectorAll('tr').forEach(tr => {
                const trName = tr.querySelector('strong')?.innerText;
                if (trName === name) isDuplicate = true;
            });

            if (!isDuplicate) {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td style="cursor:move; text-align:center; padding:10px;">↕️ Kéo thả</td>
                    <td style="padding:10px;"><strong>${name}</strong></td>
                    <td style="padding:10px; font-size:12px; color:var(--text-muted);">${img}</td>
                    <td style="padding:10px;"><span class="badge active">Hoạt động</span></td>
                    <td style="text-align:center; padding:10px;">
                        <button class="btn btn-secondary btn-sm" style="color:var(--danger); border-color:var(--danger); padding:2px 6px; font-size:11px;" onclick="this.closest('tr').remove();">🗑️ Xóa</button>
                    </td>
                `;
                tbody.appendChild(tr);
                addedCount++;
            }
        }
    });

    closeBlockBannerPickerModal();
    if (addedCount > 0) {
        showLdpToast(`Đã thêm thành công ${addedCount} Banner vào Block!`);
    } else {
        showLdpToast('Không có Banner mới nào được thêm.');
    }
}

function showBlockPopupPickerModal() {
    document.getElementById('modal-block-popup-picker').style.display = 'flex';
}
function closeBlockPopupPickerModal() {
    document.getElementById('modal-block-popup-picker').style.display = 'none';
    const checkboxes = document.querySelectorAll('.popup-picker-cb');
    checkboxes.forEach(cb => cb.checked = false);
    const searchInput = document.getElementById('popup-picker-search');
    if (searchInput) {
        searchInput.value = '';
        filterPickerItems('popup');
    }
}
function addSelectedPopupsToBlock() {
    const checkboxes = document.querySelectorAll('.popup-picker-cb');
    const tbody = document.querySelector('#blk-popup-section tbody');
    if (!tbody) return;

    let addedCount = 0;
    checkboxes.forEach(cb => {
        if (cb.checked) {
            const parts = cb.value.split('|');
            const name = parts[0];
            const img = parts[1];

            // Check trùng lặp
            let isDuplicate = false;
            tbody.querySelectorAll('tr').forEach(tr => {
                const trName = tr.querySelector('strong')?.innerText;
                if (trName === name) isDuplicate = true;
            });

            if (!isDuplicate) {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td style="cursor:move; text-align:center; padding:10px;">↕️ Kéo thả</td>
                    <td style="padding:10px;"><strong>${name}</strong></td>
                    <td style="padding:10px; font-size:12px; color:var(--text-muted);">${img}</td>
                    <td style="padding:10px;"><span class="badge active">Hoạt động</span></td>
                    <td style="text-align:center; padding:10px;">
                        <button class="btn btn-secondary btn-sm" style="color:var(--danger); border-color:var(--danger); padding:2px 6px; font-size:11px;" onclick="this.closest('tr').remove();">🗑️ Xóa</button>
                    </td>
                `;
                tbody.appendChild(tr);
                addedCount++;
            }
        }
    });

    closeBlockPopupPickerModal();
    if (addedCount > 0) {
        showLdpToast(`Đã thêm thành công ${addedCount} Popup vào Block!`);
    } else {
        showLdpToast('Không có Popup mới nào được thêm.');
    }
}

// JS cho Article Picker Modal trong Block Form
function showBlockArticlePickerModal() {
    document.getElementById('modal-block-article-picker').style.display = 'flex';
}
function closeBlockArticlePickerModal() {
    document.getElementById('modal-block-article-picker').style.display = 'none';
    const checkboxes = document.querySelectorAll('.article-picker-cb');
    checkboxes.forEach(cb => cb.checked = false);
    const searchInput = document.getElementById('article-picker-search');
    if (searchInput) searchInput.value = '';
    const catSelect = document.getElementById('article-picker-category');
    if (catSelect) catSelect.value = '';
    const selectAllCb = document.getElementById('article-select-all');
    if (selectAllCb) selectAllCb.checked = false;
    filterPickerItems('article');
}
function addSelectedArticlesToBlock() {
    const checkboxes = document.querySelectorAll('.article-picker-cb');
    const tbody = document.querySelector('#blk-article-section tbody');
    if (!tbody) return;

    let addedCount = 0;
    checkboxes.forEach(cb => {
        if (cb.checked) {
            const val = cb.value.split('|');
            const title = val[0];
            const category = val[1];
            const pubDate = val[2];

            // Check trùng lặp
            let isDuplicate = false;
            tbody.querySelectorAll('tr').forEach(tr => {
                const trTitle = tr.querySelector('strong')?.innerText;
                if (trTitle === title) isDuplicate = true;
            });

            if (!isDuplicate) {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td style="cursor:move; text-align:center; padding:10px;">↕️ Kéo thả</td>
                    <td style="padding:10px;"><strong>${title}</strong></td>
                    <td style="padding:10px;"><span class="badge active">${category}</span></td>
                    <td style="padding:10px; color:var(--text-muted);">${pubDate}</td>
                    <td style="text-align:center; padding:10px;">
                        <button class="btn btn-secondary btn-sm" style="color:var(--danger); border-color:var(--danger); padding:2px 6px; font-size:11px;" onclick="this.closest('tr').remove();">🗑️ Xóa</button>
                    </td>
                `;
                tbody.appendChild(tr);
                addedCount++;
            }
        }
    });

    closeBlockArticlePickerModal();
    if (addedCount > 0) {
        showLdpToast(`Đã thêm thành công ${addedCount} Bài viết vào Block!`);
    } else {
        showLdpToast('Không có Bài viết mới nào được thêm.');
    }
}

// JS cho FAQ Picker Modal trong Block Form
function showBlockFaqPickerModal() {
    document.getElementById('modal-block-faq-picker').style.display = 'flex';
}
function closeBlockFaqPickerModal() {
    document.getElementById('modal-block-faq-picker').style.display = 'none';
    const checkboxes = document.querySelectorAll('.faq-picker-cb');
    checkboxes.forEach(cb => cb.checked = false);
    const searchInput = document.getElementById('faq-picker-search');
    if (searchInput) searchInput.value = '';
    const catSelect = document.getElementById('faq-picker-category');
    if (catSelect) catSelect.value = '';
    const selectAllCb = document.getElementById('faq-select-all');
    if (selectAllCb) selectAllCb.checked = false;
    filterPickerItems('faq');
}
function addSelectedFaqsToBlock() {
    const checkboxes = document.querySelectorAll('.faq-picker-cb');
    const tbody = document.querySelector('#blk-faq-section tbody');
    if (!tbody) return;

    let addedCount = 0;
    checkboxes.forEach(cb => {
        if (cb.checked) {
            const val = cb.value.split('|');
            const question = val[0];
            const category = val[1];

            // Check trùng lặp
            let isDuplicate = false;
            tbody.querySelectorAll('tr').forEach(tr => {
                const trQuestion = tr.querySelector('strong')?.innerText;
                if (trQuestion === question) isDuplicate = true;
            });

            if (!isDuplicate) {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td style="cursor:move; text-align:center; padding:10px;">↕️ Kéo thả</td>
                    <td style="padding:10px;"><strong>${question}</strong></td>
                    <td style="padding:10px;"><span class="badge warning">${category}</span></td>
                    <td style="text-align:center; padding:10px;">
                        <button class="btn btn-secondary btn-sm" style="color:var(--danger); border-color:var(--danger); padding:2px 6px; font-size:11px;" onclick="this.closest('tr').remove();">🗑️ Xóa</button>
                    </td>
                `;
                tbody.appendChild(tr);
                addedCount++;
            }
        }
    });

    closeBlockFaqPickerModal();
    if (addedCount > 0) {
        showLdpToast(`Đã thêm thành công ${addedCount} Câu hỏi FAQ vào Block!`);
    } else {
        showLdpToast('Không có Câu hỏi FAQ mới nào được thêm.');
    }
}

function filterPickerItems(type) {
    const kwInput = document.getElementById(type + '-picker-search');
    const catSelect = document.getElementById(type + '-picker-category');
    const table = document.getElementById(type + '-picker-table');
    if (!table) return;

    const kw = kwInput ? kwInput.value.toLowerCase().trim() : '';
    const cat = catSelect ? catSelect.value.toLowerCase().trim() : '';

    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const nameText = row.querySelector('strong')?.innerText.toLowerCase() || '';
        const badge = row.querySelector('.badge');
        const catText = badge ? badge.innerText.toLowerCase() : '';

        const matchesKw = nameText.includes(kw);
        const matchesCat = cat === '' || catText === cat;

        if (matchesKw && matchesCat) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
            const cb = row.querySelector('input[type="checkbox"]');
            if (cb) cb.checked = false;
        }
    });

    const selectAllCb = document.getElementById(type + '-select-all');
    if (selectAllCb) {
        selectAllCb.checked = false;
    }
}

function toggleSelectAllPickerItems(type) {
    const selectAllCb = document.getElementById(type + '-select-all');
    if (!selectAllCb) return;
    const checked = selectAllCb.checked;

    const table = document.getElementById(type + '-picker-table');
    if (!table) return;

    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
        if (row.style.display !== 'none') {
            const cb = row.querySelector('.' + type + '-picker-cb');
            if (cb) {
                cb.checked = checked;
            }
        }
    });
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

// ===== Mock SKU Data & Dynamic Filter Logic =====
var mockSkuData = [
    { code: 'INT-GIGA', name: 'Gói Internet Giga (150Mbps)', type: 'Internet', service: 'Internet', price: '150.000 đ', status: 'Hoạt động', time: '20/05/2026 13:40', user: '24092 - Nguyễn', active: true, channels: { tdw: true, fptvn: true, hifpt: true } },
    { code: 'INT-SKY', name: 'Gói Internet Sky (1Gbps/150Mbps)', type: 'Internet', service: 'Internet', price: '250.000 đ', status: 'Hoạt động', time: '20/05/2026 14:00', user: '24092 - Nguyễn', active: true, channels: { tdw: true, fptvn: true, hifpt: true } },
    { code: 'CAM-IQ3', name: 'FPT Camera IQ3', type: 'FPT camera', service: 'Camera', price: '900.000 đ', status: 'Hoạt động', time: '20/05/2026 09:30', user: 'FI-25128', active: true, channels: { tdw: true, fptvn: true, hifpt: false } },
    { code: 'CAM-SE', name: 'FPT Camera SE', type: 'FPT camera', service: 'Camera', price: '700.000 đ', status: 'Hoạt động', time: '20/05/2026 09:40', user: 'FI-25128', active: true, channels: { tdw: true, fptvn: false, hifpt: true } },
    { code: 'PLAY-MAX', name: 'Gói FPT Play SMAX', type: 'FPT play', service: 'Truyền hình', price: '88.000 đ', status: 'Hoạt động', time: '18/05/2026 15:30', user: '24092 - Nguyễn', active: true, channels: { tdw: true, fptvn: true, hifpt: true } },
    { code: 'MODEM-AX3000GZ', name: 'Modem Wi-Fi 6 AX3000GZ', type: 'AP', service: 'Internet', price: '500.000 đ', status: 'Ngừng hoạt động', time: '15/05/2026 10:10', user: 'FI-25128', active: false, channels: { tdw: false, fptvn: true, hifpt: false } },
    { code: 'SA-SMAX', name: 'FPT Play SMAX (SA)', type: 'FPT play', service: 'Truyền hình', price: '88.000 đ', status: 'Hoạt động', time: '20/05/2026 10:30', user: '24092 - Nguyễn', active: true, channels: { tdw: true, fptvn: true, hifpt: true } },
    { code: 'SA-SVIP', name: 'FPT Play SVIP (SA)', type: 'FPT play', service: 'Truyền hình', price: '140.000 đ', status: 'Hoạt động', time: '20/05/2026 11:15', user: '24092 - Nguyễn', active: true, channels: { tdw: true, fptvn: true, hifpt: true } }
];

function initSkuTable() {
    renderSkuTable(mockSkuData);
}

function renderSkuTable(list) {
    var tbody = document.getElementById('sku-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    if (list.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" style="text-align:center; padding:20px; color:var(--text-muted);">Không tìm thấy sản phẩm nào phù hợp</td></tr>';
        var countEl = document.getElementById('sku-count-text');
        if (countEl) countEl.textContent = 'Hiển thị 0 / 0 kết quả';
        return;
    }

    list.forEach(function (item) {
        var tr = document.createElement('tr');
        tr.style.cursor = 'pointer';
        tr.onclick = function () {
            skuOpenDetail(item.code, item.name, item.type, item.service);
        };

        var checkboxTd = '<td onclick="event.stopPropagation();"><input type="checkbox" style="accent-color:var(--primary);"></td>';
        var nameTd = '<td onclick="event.stopPropagation(); skuOpenDetail(\'' + item.code + '\',\'' + item.name + '\',\'' + item.type + '\',\'' + item.service + '\')">'
            + '<a style="color:var(--warning); font-weight:600; text-decoration:underline; cursor:pointer; font-size:13px;">' + item.name + '</a>'
            + '</td>';
        var typeTd = '<td><span style="background:rgba(255,255,255,0.08); padding:3px 8px; border-radius:4px; font-size:12px;">' + item.type + '</span></td>';
        var priceTd = '<td style="font-size:13px; color:var(--warning); font-weight:600;">' + item.price + '</td>';

        var ch = item.channels || { tdw: true, fptvn: true, hifpt: true };
        var channelBadges = [];
        if (ch.tdw) channelBadges.push('<span style="background:rgba(245,158,11,0.12); color:#F59E0B; padding:2px 6px; border-radius:4px; font-size:11px; font-weight:600; white-space:nowrap; margin-right:4px;">tongdaiwifi</span>');
        if (ch.fptvn) channelBadges.push('<span style="background:rgba(59,130,246,0.12); color:#60A5FA; padding:2px 6px; border-radius:4px; font-size:11px; font-weight:600; white-space:nowrap; margin-right:4px;">fptvn</span>');
        if (ch.hifpt) channelBadges.push('<span style="background:rgba(16,185,129,0.12); color:#34D399; padding:2px 6px; border-radius:4px; font-size:11px; font-weight:600; white-space:nowrap; margin-right:4px;">hifpt</span>');
        var channelTd = '<td onclick="event.stopPropagation();"><div style="display:flex; gap:4px; flex-wrap:wrap;">' + (channelBadges.join('') || '<span style="color:var(--text-muted); font-size:11px;">-</span>') + '</div></td>';

        var timeTd = '<td style="font-size:13px; color:var(--text-muted);">' + item.time + '</td>';
        var userTd = '<td style="font-size:13px; color:var(--text-muted);">' + item.user + '</td>';

        var toggleChecked = item.active ? 'checked' : '';
        var toggleBackground = item.active ? 'var(--warning)' : 'rgba(255,255,255,0.2)';
        var toggleDotLeft = item.active ? '16px' : '2px';

        var actionTd = '<td onclick="event.stopPropagation();" style="text-align:center; white-space:nowrap;">'
            + '<label style="display:inline-flex; align-items:center; cursor:pointer; margin-right:6px;" title="Kích hoạt/Tắt">'
            + '<input type="checkbox" ' + toggleChecked + ' onchange="event.stopPropagation(); toggleSkuActiveStatus(\'' + item.code + '\', this.checked)" style="display:none;" id="toggle-' + item.code + '">'
            + '<span onclick="this.previousElementSibling.click();" style="display:inline-block; width:34px; height:18px; background:' + toggleBackground + '; border-radius:9px; transition:0.3s; position:relative;">'
            + '<span style="position:absolute; top:2px; left:' + toggleDotLeft + '; width:14px; height:14px; background:#fff; border-radius:50%; transition: 0.3s;"></span>'
            + '</span>'
            + '</label>'
            + '<button class="btn btn-sm" style="background:rgba(249,115,22,0.2); color:#FB923C; padding:4px 8px;" title="Xem nhanh" onclick="skuOpenPreview(\'' + item.code + '\',\'' + item.name + '\',\'' + item.type + '\',\'' + item.service + '\')">✏️</button>'
            + '</td>';

        tr.innerHTML = checkboxTd + nameTd + typeTd + priceTd + channelTd + timeTd + userTd + actionTd;
        tbody.appendChild(tr);
    });

    var countEl = document.getElementById('sku-count-text');
    if (countEl) countEl.textContent = 'Hiển thị 1-' + list.length + ' / ' + list.length + ' kết quả';
}

function filterSkuTable() {
    var searchEl = document.getElementById('sku-filter-search');
    var typeEl = document.getElementById('sku-filter-type');
    var serviceEl = document.getElementById('sku-filter-service');
    var statusEl = document.getElementById('sku-filter-status');

    var searchVal = searchEl ? searchEl.value.toLowerCase().trim() : '';
    var typeVal = typeEl ? typeEl.value : '';
    var serviceVal = serviceEl ? serviceEl.value : '';
    var statusVal = statusEl ? statusEl.value : '';

    var filtered = mockSkuData.filter(function (item) {
        var matchSearch = !searchVal ||
            item.code.toLowerCase().indexOf(searchVal) >= 0 ||
            item.name.toLowerCase().indexOf(searchVal) >= 0;

        var matchType = !typeVal || item.type === typeVal;
        var matchService = !serviceVal || item.service === serviceVal;
        var matchStatus = !statusVal || item.status === statusVal;

        return matchSearch && matchType && matchService && matchStatus;
    });

    renderSkuTable(filtered);
}

function toggleSkuActiveStatus(code, isChecked) {
    var item = mockSkuData.find(function (s) { return s.code === code; });
    if (item) {
        item.active = isChecked;
        item.status = isChecked ? 'Hoạt động' : 'Ngừng hoạt động';
        item.time = new Date().toLocaleString('vi-VN', { hour12: false }).replace(/\//g, '-').replace(',', '');
        filterSkuTable();
        showLdpToast('Đã ' + (isChecked ? 'kích hoạt' : 'ngừng kích hoạt') + ' gói bán ' + code + ' thành công!');
    }
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

// Data đặc tính theo từng loại SKU (Rich Example Data)
var dactinhData = {
    'camera': [
        { name: 'Độ phân giải', value: '2MP Full HD (1920×1080)', unit: '', highlight: true },
        { name: 'Góc quan sát', value: '107', unit: '° (Góc rộng)', highlight: true },
        { name: 'Hồng ngoại ban đêm', value: 'Tầm xa 10m', unit: '', highlight: true },
        { name: 'Phát hiện AI', value: 'Nhận diện người & phân biệt vật chuyển động', unit: '', highlight: false },
        { name: 'Âm thanh', value: 'Đàm thoại 2 chiều (Micro & Loa tích hợp)', unit: '', highlight: false },
        { name: 'Lưu trữ', value: 'FPT Cloud bảo mật cao', unit: '', highlight: false },
        { name: 'Kháng nước & bụi', value: 'Chuẩn IP66 (Dùng trong nhà & ngoài trời)', unit: '', highlight: false }
    ],
    'modem': [
        { name: 'Tốc độ Wi-Fi', value: 'AX3000 (Up to 3000 Mbps)', unit: '', highlight: true },
        { name: 'Chuẩn Wi-Fi', value: 'Wi-Fi 6 (802.11ax)', unit: '', highlight: true },
        { name: 'Băng tần hỗ trợ', value: 'Dual-band (2.4GHz & 5GHz)', unit: '', highlight: true },
        { name: 'Số cổng LAN', value: '4 x Gigabit LAN (1000Mbps)', unit: '', highlight: false },
        { name: 'Khả năng chịu tải', value: '30 - 50 thiết bị kết nối đồng thời', unit: '', highlight: false },
        { name: 'Tính năng Mesh', value: 'Hỗ trợ EasyMesh phủ sóng toàn nhà', unit: '', highlight: false }
    ],
    'service': [
        { name: 'Tốc độ download', value: '150', unit: 'Mbps', highlight: true },
        { name: 'Tốc độ upload', value: '150', unit: 'Mbps (Không giới hạn)', highlight: true },
        { name: 'Loại đường truyền', value: 'Cáp quang FTTH 100%', unit: '', highlight: true },
        { name: 'Thiết bị đi kèm', value: 'Modem Wi-Fi 6 thế hệ mới', unit: '', highlight: false },
        { name: 'IP tĩnh', value: 'Hỗ trợ IP Động (Dynamic IP)', unit: '', highlight: false },
        { name: 'Băng thông quốc tế', value: 'Tối thiểu 2 Mbps', unit: '', highlight: false }
    ],
    'play': [
        { name: 'Số lượng kênh TV', value: '170+ Kênh (gồm 70+ kênh HD)', unit: '', highlight: true },
        { name: 'Độ phân giải video', value: '4K Ultra HD', unit: '', highlight: true },
        { name: 'Kho nội dung', value: 'Hàng ngàn Phim bộ, Phim điện ảnh & Show giải trí', unit: '', highlight: true },
        { name: 'Đăng nhập đồng thời', value: 'Xem cùng lúc trên 3 thiết bị', unit: '', highlight: false },
        { name: 'Bản quyền thể thao', value: 'Trực tiếp V-League, UEFA Champions League', unit: '', highlight: false },
        { name: 'Tính năng xem lại', value: 'Hỗ trợ xem lại chương trình trong vòng 48h', unit: '', highlight: false }
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
    var bcCatEl = document.getElementById('sku-bc-cat');
    if (bcCatEl) bcCatEl.innerText = category || '—';
    var bcCodeEl = document.getElementById('sku-bc-code');
    if (bcCodeEl) bcCodeEl.innerText = code;

    // Fill Tab 1 — QLCS data theo SKU code
    skuFillQlcs(code);

    // Swap đặc tính data theo category, type, code, name
    var cat = (category || '').toLowerCase();
    var typeStr = (type || '').toLowerCase();
    var codeStr = (code || '').toLowerCase();
    var nameStr = (name || '').toLowerCase();

    var dataKey = 'service';
    if (cat.indexOf('camera') >= 0 || typeStr.indexOf('camera') >= 0 || codeStr.indexOf('cam') >= 0 || nameStr.indexOf('camera') >= 0) {
        dataKey = 'camera';
    } else if (cat.indexOf('play') >= 0 || typeStr.indexOf('play') >= 0 || codeStr.indexOf('play') >= 0 || nameStr.indexOf('play') >= 0) {
        dataKey = 'play';
    } else if (cat.indexOf('modem') >= 0 || typeStr.indexOf('ap') >= 0 || codeStr.indexOf('modem') >= 0 || codeStr.indexOf('ax') >= 0) {
        dataKey = 'modem';
    }
    skuRenderDactinh(dataKey);

    function skuToggleMediaUI() {
        var typeEl = document.getElementById('sku-bc-type') || document.getElementById('qlcs-loai');
        var typeStr = typeEl ? (typeEl.innerText || typeEl.value || '').toLowerCase() : '';
        var qlcsDichvu = document.getElementById('qlcs-dichvu')?.value || '';
        var skuCode = document.getElementById('sku-hdr-code')?.innerText || '';
        var codeStr = skuCode.toLowerCase();

        var galleryGroup = document.getElementById('sku-media-gallery-group');
        var bannerHeadGroup = document.getElementById('sku-media-banner-head-group');
        if (galleryGroup && bannerHeadGroup) {
            // Nếu là thiết bị phần cứng
            if (typeStr.indexOf('thiết bị') >= 0 || typeStr.indexOf('device') >= 0 || codeStr.indexOf('cam') >= 0 || codeStr.indexOf('modem') >= 0 || codeStr.indexOf('ax') >= 0) {
                galleryGroup.style.display = 'block';
                bannerHeadGroup.style.display = 'none';
            } else {
                // Nếu là dịch vụ phi vật lý
                galleryGroup.style.display = 'none';
                bannerHeadGroup.style.display = 'block';
            }
        }
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
        var bcCatEl = document.getElementById('sku-bc-cat');
        if (bcCatEl) bcCatEl.innerText = category || '—';
        var bcCodeEl = document.getElementById('sku-bc-code');
        if (bcCodeEl) bcCodeEl.innerText = code;

        // Fill Tab 1 — QLCS data theo SKU code
        skuFillQlcs(code);

        // Swap đặc tính data theo category, type, code, name
        var cat = (category || '').toLowerCase();
        var typeStr = (type || '').toLowerCase();
        var codeStr = (code || '').toLowerCase();
        var nameStr = (name || '').toLowerCase();

        var dataKey = 'service';
        if (cat.indexOf('camera') >= 0 || typeStr.indexOf('camera') >= 0 || codeStr.indexOf('cam') >= 0 || nameStr.indexOf('camera') >= 0) {
            dataKey = 'camera';
        } else if (cat.indexOf('play') >= 0 || typeStr.indexOf('play') >= 0 || codeStr.indexOf('play') >= 0 || nameStr.indexOf('play') >= 0) {
            dataKey = 'play';
        } else if (cat.indexOf('modem') >= 0 || typeStr.indexOf('ap') >= 0 || codeStr.indexOf('modem') >= 0 || codeStr.indexOf('ax') >= 0) {
            dataKey = 'modem';
        }
        skuRenderDactinh(dataKey);

        skuSwitchTab('dactinh');
        renderSkuTagsReadonly(code);

        // Cập nhật UI hình ảnh / banner
        skuToggleMediaUI();
    }

    function toggleTreeRow(groupClass, btn) {
        const rows = document.querySelectorAll('.' + groupClass);
        let isCollapse = false;
        if (btn.innerText === '▼') {
            btn.innerText = '▶';
            isCollapse = true;
        } else {
            btn.innerText = '▼';
            isCollapse = false;
        }
        rows.forEach(row => {
            row.style.display = isCollapse ? 'none' : '';
        });
    }

    function skuSwitchTab(tabName) {
        const tabs = ['chung', 'dactinh', 'content', 'faq']; // chung kept for hide logic
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
        if (tabName === 'dactinh') {
            var list = document.getElementById('dactinh-attr-list');
            if (list && list.querySelectorAll('.dactinh-row').length === 0) {
                var skuCode = (document.getElementById('sku-hdr-code')?.innerText || 'CAM-IQ3').toLowerCase();
                var skuCat = (document.getElementById('sku-bc-cat')?.innerText || document.getElementById('qlcs-dichvu')?.value || '').toLowerCase();
                var skuType = (document.getElementById('sku-bc-type')?.innerText || '').toLowerCase();
                var catLower = skuCat + ' ' + skuType + ' ' + skuCode;
                var dataKey = catLower.indexOf('camera') >= 0 || catLower.indexOf('cam') >= 0 ? 'camera' : catLower.indexOf('play') >= 0 ? 'play' : catLower.indexOf('modem') >= 0 || catLower.indexOf('ap') >= 0 || catLower.indexOf('wifi') >= 0 ? 'modem' : 'service';
                if (typeof skuRenderDactinh === 'function') skuRenderDactinh(dataKey);
            }
        }
    }

    function addLinkedFaqRow(question, answer) {
        var tbody = document.getElementById('custom-faq-tbody');
        if (!tbody) return;
        var rowCount = tbody.getElementsByTagName('tr').length + 1;
        var tr = document.createElement('tr');
        tr.innerHTML = `
        <td style="padding:10px; text-align:center; border-bottom:1px solid var(--border-glass); cursor:move;" title="Kéo thả để sắp xếp">
            ☰ <input type="number" class="form-input" value="${rowCount}" style="width:45px; display:inline-block; text-align:center; padding:2px; height:24px; font-size:12px; margin-left:5px; background:rgba(255,255,255,0.05); color:#fff; border:1px solid var(--border-glass);">
        </td>
        <td style="padding:10px; border-bottom:1px solid var(--border-glass); background:rgba(255,255,255,0.02); color:var(--text-main); font-weight:600;">
            ${question}
        </td>
        <td style="padding:10px; border-bottom:1px solid var(--border-glass); background:rgba(255,255,255,0.02); color:var(--text-muted); font-size:12px; line-height:1.5;">
            ${answer}
        </td>
        <td style="padding:10px; text-align:center; border-bottom:1px solid var(--border-glass);">
            <button type="button" class="btn btn-sm" onclick="this.closest('tr').remove()" style="background:rgba(239,68,68,0.15); color:var(--danger); border:1px solid var(--danger); padding:4px 8px;">🗑️ Xóa</button>
        </td>
    `;
        tbody.appendChild(tr);
    }

    function openFaqBankModal() {
        var oldModal = document.getElementById('faq-bank-modal');
        if (oldModal) oldModal.remove();

        var modal = document.createElement('div');
        modal.id = 'faq-bank-modal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.background = 'rgba(0, 0, 0, 0.75)';
        modal.style.backdropFilter = 'blur(4px)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '99999';

        var box = document.createElement('div');
        box.style.background = '#111827';
        box.style.border = '1px solid var(--border-glass)';
        box.style.borderRadius = '12px';
        box.style.width = '600px';
        box.style.maxWidth = '90%';
        box.style.padding = '24px';
        box.style.color = '#fff';
        box.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.5)';

        box.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; border-bottom:1px solid var(--border-glass); padding-bottom:12px;">
            <h3 style="margin:0; color:var(--warning); font-size:16px;">🔍 Chọn FAQ từ Ngân hàng câu hỏi</h3>
            <span onclick="document.getElementById('faq-bank-modal').remove()" style="cursor:pointer; font-size:20px; opacity:0.6;">&times;</span>
        </div>
        <p style="font-size:12px; color:var(--text-muted); margin-bottom:16px;">Tích chọn câu hỏi thường gặp dưới đây để liên kết hiển thị vào trang chi tiết SKU hiện tại.</p>
        
        <div style="max-height:300px; overflow-y:auto; display:flex; flex-direction:column; gap:10px; margin-bottom:20px; padding-right:5px;">
            <label style="display:flex; gap:10px; padding:10px; background:rgba(255,255,255,0.03); border:1px solid var(--border-glass); border-radius:6px; cursor:pointer; align-items:flex-start;">
                <input type="checkbox" class="faq-bank-chk" data-q="Gói cước có áp dụng phí lắp đặt ban đầu không?" data-a="Phí lắp đặt mặc định là 300,000đ. Tuy nhiên khi tham gia trả trước 6 hoặc 12 tháng cước, quý khách hàng sẽ được miễn phí hoàn toàn 100% phí lắp đặt." style="margin-top:3px; accent-color:var(--primary);">
                <div>
                    <div style="font-size:13px; font-weight:600; color:#fff;">Gói cước có áp dụng phí lắp đặt ban đầu không?</div>
                    <div style="font-size:11px; color:var(--text-muted); margin-top:3px;">Trả lời: Phí lắp đặt mặc định là 300,000đ. Tuy nhiên khi tham gia trả trước...</div>
                </div>
            </label>
            <label style="display:flex; gap:10px; padding:10px; background:rgba(255,255,255,0.03); border:1px solid var(--border-glass); border-radius:6px; cursor:pointer; align-items:flex-start;">
                <input type="checkbox" class="faq-bank-chk" data-q="Thiết bị Modem Wifi 6 được bảo hành trong bao lâu?" data-a="Thiết bị Modem Wifi 6 thế hệ mới được bảo hành chính hãng 12 tháng kể từ thời điểm nghiệm thu lắp đặt thành công." style="margin-top:3px; accent-color:var(--primary);">
                <div>
                    <div style="font-size:13px; font-weight:600; color:#fff;">Thiết bị Modem Wifi 6 được bảo hành trong bao lâu?</div>
                    <div style="font-size:11px; color:var(--text-muted); margin-top:3px;">Trả lời: Thiết bị Modem Wifi 6 thế hệ mới được bảo hành chính hãng 12 tháng...</div>
                </div>
            </label>
            <label style="display:flex; gap:10px; padding:10px; background:rgba(255,255,255,0.03); border:1px solid var(--border-glass); border-radius:6px; cursor:pointer; align-items:flex-start;">
                <input type="checkbox" class="faq-bank-chk" data-q="Chính sách hoàn trả thiết bị khi ngưng sử dụng?" data-a="Khách hàng cần trả lại thiết bị Modem và Bộ giải mã truyền hình (nếu có) tại văn phòng giao dịch FPT Telecom gần nhất khi thanh lý hợp đồng." style="margin-top:3px; accent-color:var(--primary);">
                <div>
                    <div style="font-size:13px; font-weight:600; color:#fff;">Chính sách hoàn trả thiết bị khi ngưng sử dụng?</div>
                    <div style="font-size:11px; color:var(--text-muted); margin-top:3px;">Trả lời: Khách hàng cần trả lại thiết bị Modem và Bộ giải mã truyền hình...</div>
                </div>
            </label>
        </div>
        
        <div style="display:flex; justify-content:end; gap:10px;">
            <button type="button" onclick="document.getElementById('faq-bank-modal').remove()" class="btn btn-secondary btn-sm" style="background:rgba(255,255,255,0.05); color:#fff; border:1px solid var(--border-glass);">Hủy</button>
            <button type="button" onclick="submitFaqBankSelection()" class="btn btn-warning btn-sm">Xác nhận liên kết</button>
        </div>
    `;

        modal.appendChild(box);
        document.body.appendChild(modal);
    }

    function submitFaqBankSelection() {
        var checkboxes = document.querySelectorAll('.faq-bank-chk:checked');
        if (checkboxes.length === 0) {
            alert("Vui lòng chọn ít nhất một câu hỏi để liên kết.");
            return;
        }

        checkboxes.forEach(function (chk) {
            var question = chk.getAttribute('data-q');
            var answer = chk.getAttribute('data-a');
            addLinkedFaqRow(question, answer);
        });

        document.getElementById('faq-bank-modal').remove();
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
        document.querySelectorAll('.col-noibat').forEach(function (el) {
            el.style.display = '';
        });
        var hintEl = document.getElementById('dactinh-hint-thietbi');
        if (hintEl) hintEl.style.display = '';
        var headerEl = document.getElementById('dactinh-header-row');
        if (headerEl) headerEl.style.display = '';
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

        if (sectionId === 'camp-products') {
            if (typeof campInitProducts === 'function') {
                campInitProducts();
            }
        } else if (sectionId === 'inet-products') {
            if (typeof inetInitAllTabs === 'function') {
                inetInitAllTabs();
            }
        } else if (sectionId === 'sa-pricing') {
            if (typeof leadInitAllTabs === 'function') {
                leadInitAllTabs();
            }
            if (typeof ldpUpdateAllPricingFeatures === 'function') {
                ldpUpdateAllPricingFeatures();
            }
        } else if (sectionId === 'cam-select') {
            if (typeof camInitSelect === 'function') {
                camInitSelect();
            }
        }

        // Tự động thu gọn giao diện tất cả các block FAQ Accordion thành flex row 1 dòng cực kỳ gọn
        if (typeof ldpRefactorFaqItems === 'function') {
            ldpRefactorFaqItems();
        }

        // Đảm bảo tất cả các trường FAQ tĩnh và động đều là readonly để người dùng chỉ được đồng bộ từ kho FAQ chung
        document.querySelectorAll('.faq-question-input, .faq-answer-textarea').forEach(function (el) {
            el.readOnly = true;
            el.placeholder = 'Đồng bộ từ kho FAQ chung...';
        });

        var titles = {
            // Internet
            'inet-hero': 'Hero Banner + Form đăng ký (kèm Countdown Case 1)', 'inet-countdown': 'Dải Countdown độc lập (Case 2)', 'inet-stats': 'Thanh số liệu nổi bật',
            'inet-products': 'Danh sách gói Internet', 'inet-playbox': 'FPT Play Box — Giải trí không giới hạn',
            'inet-review': 'Video Review', 'inet-testimonials': 'Đánh giá khách hàng',
            'inet-steps': 'Hướng dẫn thủ tục', 'inet-promo': 'Ưu đãi khuyến mãi',
            'inet-faq': 'Câu hỏi thường gặp', 'inet-form': 'Form đăng ký (cuối trang)',
            // SA
            'sa-hero': 'Hero Banner khuyến mãi (kèm Countdown Case 1)', 'sa-offer': 'Dải ưu đãi & Countdown',
            'sa-sports': 'Thể thao trực tiếp',
            'sa-categories': 'Danh mục nội dung giải trí', 'sa-experience': 'Trải nghiệm giải trí đỉnh cao', 'sa-pricing': 'Bảng giá & Đăng ký',
            'sa-commentators': 'Bình luận viên & chuyên gia', 'sa-faq-support': 'FAQ & Hỗ trợ',
            'sa-sticky': 'Sticky ưu đãi cuối trang',
            'sa-popup-form': 'Popup Form đăng ký tư vấn chung', 'sa-footer-main': 'Footer',
            // Camera
            'cam-hero': 'Hero Banner + Nút CTA chính & phụ', 'cam-usp': 'Công nghệ nổi bật',
            'cam-detail': 'Chi tiết FPT Camera AI', 'cam-select': 'Danh mục & Chọn mua',
            'cam-app': 'Ứng dụng FPT Camera',
            'cam-awards': 'Thương hiệu & Giải thưởng', 'cam-faq': 'FAQ Accordion',
            'cam-sticky': 'Sticky Bottom Bar',
            // Campaign
            'camp-hero': 'Hero Wi-Fi 7 (kèm Countdown Case 1)', 'camp-countdown': 'Dải Countdown độc lập (Case 2)',
            'camp-usp': 'Vì sao chọn SpeedX – Wi-Fi 7 của FPT', 'camp-products': 'Các gói cước Wi-Fi 7',
            'camp-compare': 'Bảng so sánh thế hệ Wi-Fi', 'camp-targets': 'Đối tượng mục tiêu',
            'camp-videos': 'Video Review thực tế', 'camp-form': 'Form đăng ký tư vấn',
            'camp-sticky': 'Sticky Bottom Bar',
            'camp-faq': 'FAQ Accordion',
            // Thu Lead
            'lead-hero': 'Hero + Form thu Lead', 'lead-proof': 'Social Proof chạy chữ',
            'lead-pricing': 'Bảng giá & So sánh gói', 'lead-steps': 'Giá ưu đãi, nhiều tiện ích',
            'lead-reviews': 'Review Internet FPT', 'lead-faq': 'FAQ Accordion',
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
        var cycleInput = card.querySelector('.pricing-cycle-input');

        if (nameInput && headerTitleEl) {
            headerTitleEl.textContent = nameInput.value || 'Gói chưa đặt tên';
        }
        if (priceInput && headerPriceEl) {
            var cycle = cycleInput ? cycleInput.value : '/tháng';
            headerPriceEl.textContent = priceInput.value ? priceInput.value + cycle : '';
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
            + '<div class="form-group" style="margin-bottom:6px;"><label style="font-size:11px;">Tag line</label><input type="text" class="form-input" placeholder="VD: Nổi bật, ƯU ĐÃI 50% GÓI 12 THÁNG ✨" value="Nổi bật"></div>'
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

    // Mock data from PDH
    var pdhPackagesMock = [
        {
            code: 'PKG-WIFI7-GIGA',
            name: 'Gói Internet FPT Play Giga Wi-Fi 7',
            price: '220.000',
            download: '300 Mbps',
            upload: '300 Mbps',
            banner: '/media/banner-giga-wf7.png',
            features: 'Sử dụng chuẩn Wi-Fi 7 thế hệ mới nhất\nTốc độ download/upload 300 Mbps\nPhù hợp cá nhân và hộ gia đình nhỏ\nTặng kèm modem Wi-Fi 7 thế hệ mới',
            ctaSubText: 'Nhận tư vấn',
            ctaSubUrl: '#tu-van-giga',
            ctaMainText: 'Đăng ký ngay',
            ctaMainUrl: '#dang-ky-giga'
        },
        {
            code: 'PKG-WIFI7-SKY',
            name: 'Gói Internet FPT Play Sky Wi-Fi 7',
            price: '280.000',
            download: '1 Gbps',
            upload: '300 Mbps',
            banner: '/media/banner-sky-wf7.png',
            features: 'Băng thông download lên đến 1 Gbps\nTốc độ upload vượt trội 300 Mbps\nPhù hợp gia đình đông người, nhà nhiều tầng\nTrải nghiệm mượt mà không lo giật lag',
            ctaSubText: 'Nhận tư vấn',
            ctaSubUrl: '#tu-van-sky',
            ctaMainText: 'Đăng ký ngay',
            ctaMainUrl: '#dang-ky-sky'
        },
        {
            code: 'PKG-WIFI7-META',
            name: 'Gói Internet FPT Play Meta Wi-Fi 7',
            price: '350.000',
            download: '1 Gbps',
            upload: '1 Gbps',
            banner: '/media/banner-meta-wf7.png',
            features: 'Tốc độ không giới hạn download & upload 1 Gbps\nTrải nghiệm chuẩn Wi-Fi 7 cực đỉnh\nTối ưu cho livestreamer, game thủ chuyên nghiệp\nKết nối đồng thời lên đến 50 thiết bị',
            ctaSubText: 'Nhận tư vấn',
            ctaSubUrl: '#tu-van-meta',
            ctaMainText: 'Đăng ký ngay',
            ctaMainUrl: '#dang-ky-meta'
        },
        {
            code: 'PKG-WIFI7-ULTRA',
            name: 'Gói Internet FPT Play Ultra Wi-Fi 7',
            price: '450.000',
            download: '2 Gbps',
            upload: '1 Gbps',
            banner: '/media/banner-ultra-wf7.png',
            features: 'Băng thông download lên đến 2 Gbps siêu tốc\nTốc độ upload 1 Gbps cực nhanh\nCông nghệ XGS-PON thế mới nhất\nTặng kèm 01 AP mở rộng sóng Wi-Fi 7',
            ctaSubText: 'Nhận tư vấn',
            ctaSubUrl: '#tu-van-ultra',
            ctaMainText: 'Đăng ký ngay',
            ctaMainUrl: '#dang-ky-ultra'
        },
        {
            code: 'PKG-FPT-SPEED-X2',
            name: 'FPT Speed X2',
            price: '999.000',
            download: '2Gbps',
            upload: '2Gbps',
            banner: '/media/banner-x2-wf7.png',
            features: 'Wi-Fi 7 tăng khả năng tải gấp 4 lần\nCông nghệ XGS-PON tốc độ 2 Gbps\nKết nối đến 100 thiết bị\nTặng 01 Mesh Wi-Fi 7 mở rộng vùng',
            ctaSubText: 'Nhận tư vấn',
            ctaSubUrl: '#tu-van',
            ctaMainText: 'Mua ngay',
            ctaMainUrl: '#dang-ky-x2'
        },
        {
            code: 'PKG-FPT-SPEED-X2-PRO',
            name: 'FPT Speed X2 Pro',
            price: '1.099.000',
            download: '2Gbps',
            upload: '2Gbps',
            banner: '/media/banner-x2pro-wf7.png',
            features: 'Wi-Fi 7 tăng khả năng tải gấp 4 lần\nCông nghệ XGS-PON tốc độ 2 Gbps\nKết nối đến 100 thiết bị\nTặng 01 Mesh Wi-Fi 7 mở rộng vùng',
            ctaSubText: 'Nhận tư vấn',
            ctaSubUrl: '#tu-van',
            ctaMainText: 'Mua ngay',
            ctaMainUrl: '#dang-ky-x2pro'
        },
        {
            code: 'PKG-FPT-SPEED-X10',
            name: 'FPT Speed X10',
            price: '1.599.000',
            download: '10Gbps',
            upload: '10Gbps',
            banner: '/media/banner-x10-wf7.png',
            features: 'Wi-Fi 7 tăng khả năng tải gấp 4 lần\nCông nghệ XGS-PON tốc độ vượt trội lên đến 10 Gbps\nKết nối đến 100 thiết bị',
            ctaSubText: 'Nhận tư vấn',
            ctaSubUrl: '#tu-van',
            ctaMainText: 'Mua ngay',
            ctaMainUrl: '#dang-ky-x10'
        },
        {
            code: 'PKG-FPT-SPEED-X10-PRO',
            name: 'FPT Speed X10 Pro',
            price: '1.690.000',
            download: '10Gbps',
            upload: '10Gbps',
            banner: '/media/banner-x10pro-wf7.png',
            features: 'Wi-Fi 7 tăng khả năng tải gấp 4 lần\nCông nghệ XGS-PON tốc độ vượt trội lên đến 10 Gbps\nKết nối đến 100 thiết bị',
            ctaSubText: 'Nhận tư vấn',
            ctaSubUrl: '#tu-van',
            ctaMainText: 'Mua ngay',
            ctaMainUrl: '#dang-ky-x10pro'
        }
    ];

    var campProductsData = [];
    var campActiveIndex = -1;

    function campInitProducts() {
        if (campProductsData.length > 0) {
            campRenderProductsList();
            return;
        }

        var defaultPackages = [
            {
                banner: '',
                name: 'FPT Speed X2',
                price: '999.000',
                download: '2Gbps',
                upload: '2Gbps',
                features: 'Wi-Fi 7 tăng khả năng tải gấp 4 lần\nCông nghệ XGS-PON tốc độ 2 Gbps\nKết nối đến 100 thiết bị\nTặng 01 Mesh Wi-Fi 7 mở rộng vùng',
                ctaSubText: 'Nhận tư vấn',
                ctaSubUrl: '#tu-van',
                ctaMainText: 'Mua ngay',
                ctaMainUrl: '#dang-ky-x2',
                highlight: false
            },
            {
                banner: '',
                name: 'FPT Speed X2 Pro',
                price: '1.099.000',
                download: '2Gbps',
                upload: '2Gbps',
                features: 'Wi-Fi 7 tăng khả năng tải gấp 4 lần\nCông nghệ XGS-PON tốc độ 2 Gbps\nKết nối đến 100 thiết bị\nTặng 01 Mesh Wi-Fi 7 mở rộng vùng',
                ctaSubText: 'Nhận tư vấn',
                ctaSubUrl: '#tu-van',
                ctaMainText: 'Mua ngay',
                ctaMainUrl: '#dang-ky-x2pro',
                highlight: false
            },
            {
                banner: '',
                name: 'FPT Speed X10',
                price: '1.599.000',
                download: '10Gbps',
                upload: '10Gbps',
                features: 'Wi-Fi 7 tăng khả năng tải gấp 4 lần\nCông nghệ XGS-PON tốc độ vượt trội lên đến 10 Gbps\nKết nối đến 100 thiết bị',
                ctaSubText: 'Nhận tư vấn',
                ctaSubUrl: '#tu-van',
                ctaMainText: 'Mua ngay',
                ctaMainUrl: '#dang-ky-x10',
                highlight: false
            },
            {
                banner: '',
                name: 'FPT Speed X10 Pro',
                price: '1.690.000',
                download: '10Gbps',
                upload: '10Gbps',
                features: 'Wi-Fi 7 tăng khả năng tải gấp 4 lần\nCông nghệ XGS-PON tốc độ vượt trội lên đến 10 Gbps\nKết nối đến 100 thiết bị',
                ctaSubText: 'Nhận tư vấn',
                ctaSubUrl: '#tu-van',
                ctaMainText: 'Mua ngay',
                ctaMainUrl: '#dang-ky-x10pro',
                highlight: false
            }
        ];

        var container = document.getElementById('camp-products-list');
        if (container) {
            var cards = container.querySelectorAll('.inet-product-card');
            if (cards.length > 0) {
                cards.forEach(function (card, i) {
                    var bannerInput = card.querySelector('input[placeholder="URL ảnh banner"]') || card.querySelectorAll('input[type="text"]')[0];
                    var nameInput = card.querySelector('.inet-product-name-input') || card.querySelectorAll('input[type="text"]')[1];
                    var priceInput = card.querySelector('.inet-product-price-input') || card.querySelectorAll('input[type="text"]')[2];

                    var inputs = card.querySelectorAll('input[type="text"]');
                    var download = inputs[3] ? inputs[3].value : '2Gbps';
                    var upload = inputs[4] ? inputs[4].value : '2Gbps';
                    var featuresTextarea = card.querySelector('textarea');
                    var features = featuresTextarea ? featuresTextarea.value : '';

                    var ctaSubText = inputs[5] ? inputs[5].value : 'Nhận tư vấn';
                    var ctaSubUrl = inputs[6] ? inputs[6].value : '#tu-van';
                    var ctaMainText = inputs[7] ? inputs[7].value : 'Mua ngay';
                    var ctaMainUrl = inputs[8] ? inputs[8].value : '';

                    var highlightCb = card.querySelector('input[type="checkbox"]');
                    var highlight = highlightCb ? highlightCb.checked : false;

                    campProductsData.push({
                        banner: bannerInput ? bannerInput.value : '',
                        name: nameInput ? nameInput.value : ('Gói ' + (i + 1)),
                        price: priceInput ? priceInput.value : '0',
                        download: download,
                        upload: upload,
                        features: features,
                        ctaSubText: ctaSubText,
                        ctaSubUrl: ctaSubUrl,
                        ctaMainText: ctaMainText,
                        ctaMainUrl: ctaMainUrl,
                        highlight: highlight
                    });
                });
            } else {
                campProductsData = defaultPackages;
            }
        } else {
            campProductsData = defaultPackages;
        }

        var pdhOptsContainer = document.getElementById('camp-pdh-list-options');
        if (pdhOptsContainer) {
            campPdhCurrentPage = 1;
            var searchInput = document.getElementById('camp-pdh-search');
            if (searchInput) searchInput.value = '';
            campRenderPdhDropdownList();

            var style = document.createElement('style');
            style.innerHTML = '.pdh-dropdown-item:hover { background: rgba(255,255,255,0.08) !important; } .camp-product-list-item:hover { background: rgba(255,255,255,0.06) !important; } .camp-product-list-item.active { background: rgba(249,115,22,0.15) !important; border-color: var(--primary) !important; }';
            document.head.appendChild(style);
        }

        campRenderProductsList();
    }

    var campPdhCurrentPage = 1;
    var campPdhItemsPerPage = 10;

    function campRenderPdhDropdownList() {
        var searchInput = document.getElementById('camp-pdh-search');
        var searchVal = searchInput ? searchInput.value.toLowerCase().trim() : '';

        var filtered = pdhPackagesMock.map(function (pkg, idx) {
            return { pkg: pkg, originalIdx: idx };
        }).filter(function (item) {
            return !searchVal || item.pkg.code.toLowerCase().indexOf(searchVal) > -1 || item.pkg.name.toLowerCase().indexOf(searchVal) > -1;
        });

        var totalPages = Math.ceil(filtered.length / campPdhItemsPerPage) || 1;
        if (campPdhCurrentPage > totalPages) campPdhCurrentPage = totalPages;
        if (campPdhCurrentPage < 1) campPdhCurrentPage = 1;

        var start = (campPdhCurrentPage - 1) * campPdhItemsPerPage;
        var end = start + campPdhItemsPerPage;
        var pageItems = filtered.slice(start, end);

        var container = document.getElementById('camp-pdh-list-options');
        if (container) {
            var html = '';
            pageItems.forEach(function (item) {
                var pkg = item.pkg;
                var index = item.originalIdx;
                html += '<div onclick="campSyncPdhPackage(' + index + ')" style="padding: 6px 8px; font-size: 11px; cursor: pointer; color: #fff; border-radius: 4px; transition: background 0.15s;" class="pdh-dropdown-item">'
                    + '<div style="font-weight: 700; color: var(--warning);">' + pkg.code + '</div>'
                    + '<div style="font-size: 10px; color: var(--text-muted); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">' + pkg.name + ' - ' + pkg.price + 'đ</div>'
                    + '</div>';
            });
            if (filtered.length === 0) {
                html = '<div style="font-size: 10px; color: var(--text-muted); padding: 10px; text-align: center;">Không tìm thấy gói</div>';
            }
            container.innerHTML = html;
        }

        var pagContainer = document.getElementById('camp-pdh-pagination');
        if (pagContainer) {
            var pagHtml = '';
            if (totalPages > 1) {
                var prevDisabled = campPdhCurrentPage === 1 ? 'pointer-events:none; opacity:0.4;' : 'cursor:pointer;';
                var nextDisabled = campPdhCurrentPage === totalPages ? 'pointer-events:none; opacity:0.4;' : 'cursor:pointer;';
                pagHtml += '<span onclick="campPdhChangePage(-1)" style="padding: 2px 6px; background: rgba(255,255,255,0.08); border-radius: 4px; color: #fff; font-weight: bold; ' + prevDisabled + '">◀</span>';
                pagHtml += '<span style="color: var(--text-muted); margin: 0 4px;">Trang ' + campPdhCurrentPage + '/' + totalPages + '</span>';
                pagHtml += '<span onclick="campPdhChangePage(1)" style="padding: 2px 6px; background: rgba(255,255,255,0.08); border-radius: 4px; color: #fff; font-weight: bold; ' + nextDisabled + '">▶</span>';
            }
            pagContainer.innerHTML = pagHtml;
        }
    }

    function campPdhChangePage(dir) {
        campPdhCurrentPage += dir;
        campRenderPdhDropdownList();
    }

    var campProductsPerPage = 10;
    var campCurrentPage = 1;

    function campRenderProductsList() {
        var container = document.getElementById('camp-products-nav-list');
        if (!container) return;

        var searchVal = document.getElementById('camp-product-search') ? document.getElementById('camp-product-search').value.toLowerCase() : '';

        // Lọc danh sách theo từ khóa tìm kiếm
        var filtered = campProductsData.map(function (pkg, idx) {
            return { pkg: pkg, originalIdx: idx };
        }).filter(function (item) {
            return !searchVal || item.pkg.name.toLowerCase().indexOf(searchVal) > -1 || item.pkg.price.toLowerCase().indexOf(searchVal) > -1;
        });

        // Tính toán tổng số trang
        var totalPages = Math.ceil(filtered.length / campProductsPerPage) || 1;
        if (campCurrentPage > totalPages) {
            campCurrentPage = totalPages;
        }
        if (campCurrentPage < 1) {
            campCurrentPage = 1;
        }

        // Lấy item trang hiện hành
        var start = (campCurrentPage - 1) * campProductsPerPage;
        var end = start + campProductsPerPage;
        var pageItems = filtered.slice(start, end);

        var html = '';
        pageItems.forEach(function (item) {
            var pkg = item.pkg;
            var idx = item.originalIdx;
            var activeClass = idx === campActiveIndex ? 'active' : '';
            var highlightChecked = pkg.highlight ? 'checked' : '';
            var displayIdx = idx + 1;

            html += '<div class="camp-product-list-item ' + activeClass + '" style="display: flex; align-items: center; justify-content: space-between; padding: 8px 10px; background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 6px; cursor: pointer; transition: all 0.2s;" onclick="campSelectProduct(' + idx + ')">'
                + '<div style="display: flex; align-items: center; gap: 8px; flex: 1; overflow: hidden;">'
                + '<span style="font-size: 11px; font-weight: 700; color: var(--primary); min-width: 45px;">Gói ' + displayIdx + '</span>'
                + '<span style="font-size: 12px; color: #fff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 500;" class="item-title">' + pkg.name + '</span>'
                + '</div>'
                + '<div style="display: flex; align-items: center; gap: 6px;" onclick="event.stopPropagation()">'
                + '<input type="checkbox" ' + highlightChecked + ' onchange="campToggleHighlight(' + idx + ', this)" title="Nổi bật" style="accent-color: var(--warning); cursor: pointer; width: 13px; height: 13px; margin: 0;">'
                + '<span onclick="campMoveProduct(' + idx + ', -1)" title="Di chuyển lên" style="cursor: pointer; font-size: 10px; color: var(--text-muted); padding: 2px;">▲</span>'
                + '<span onclick="campMoveProduct(' + idx + ', 1)" title="Di chuyển xuống" style="cursor: pointer; font-size: 10px; color: var(--text-muted); padding: 2px;">▼</span>'
                + '<span onclick="campDeleteProduct(' + idx + ')" title="Xóa gói cước" style="cursor: pointer; font-size: 12px; color: var(--danger); font-weight: bold; padding: 2px 4px; margin-left: 2px;">✕</span>'
                + '</div>'
                + '</div>';
        });

        if (filtered.length === 0) {
            html = '<div style="text-align: center; color: var(--text-muted); font-size: 12px; padding: 20px 0;">Không tìm thấy gói cước</div>';
        }

        container.innerHTML = html;

        campRenderPagination(filtered.length, totalPages);
        campSyncHiddenDom();
    }

    function campRenderPagination(totalItems, totalPages) {
        var pagContainer = document.getElementById('camp-products-pagination');
        if (!pagContainer) return;

        if (totalItems <= campProductsPerPage) {
            pagContainer.style.display = 'none';
            return;
        }

        pagContainer.style.display = 'flex';
        var prevDisabled = campCurrentPage === 1 ? 'disabled style="opacity: 0.3; cursor: not-allowed;"' : '';
        var nextDisabled = campCurrentPage === totalPages ? 'disabled style="opacity: 0.3; cursor: not-allowed;"' : '';

        var html = '<button class="btn btn-secondary btn-sm" onclick="campPrevPage()" ' + prevDisabled + ' style="padding: 2px 8px; font-size: 10px; font-weight: bold; border-radius: 4px;">◀</button>'
            + '<span style="font-size: 11px; color: var(--text-muted); font-weight: 500;">Trang ' + campCurrentPage + ' / ' + totalPages + '</span>'
            + '<button class="btn btn-secondary btn-sm" onclick="campNextPage()" ' + nextDisabled + ' style="padding: 2px 8px; font-size: 10px; font-weight: bold; border-radius: 4px;">▶</button>';

        pagContainer.innerHTML = html;
    }

    function campPrevPage() {
        if (campCurrentPage > 1) {
            campCurrentPage--;
            campRenderProductsList();
        }
    }

    function campNextPage() {
        var searchVal = document.getElementById('camp-product-search') ? document.getElementById('camp-product-search').value.toLowerCase() : '';
        var filteredCount = campProductsData.filter(function (pkg) {
            return !searchVal || pkg.name.toLowerCase().indexOf(searchVal) > -1 || pkg.price.toLowerCase().indexOf(searchVal) > -1;
        }).length;
        var totalPages = Math.ceil(filteredCount / campProductsPerPage) || 1;
        if (campCurrentPage < totalPages) {
            campCurrentPage++;
            campRenderProductsList();
        }
    }

    function campSelectProduct(idx) {
        campActiveIndex = idx;

        var items = document.querySelectorAll('#camp-products-nav-list .camp-product-list-item');
        items.forEach(function (item) {
            item.classList.remove('active');
        });

        var clickedItem = Array.from(document.querySelectorAll('#camp-products-nav-list .camp-product-list-item')).find(function (item) {
            return item.getAttribute('onclick') && item.getAttribute('onclick').indexOf('campSelectProduct(' + idx + ')') > -1;
        });
        if (clickedItem) clickedItem.classList.add('active');

        var pkg = campProductsData[idx];
        if (!pkg) return;

        document.getElementById('camp-product-detail-empty').style.display = 'none';
        document.getElementById('camp-product-detail-form').style.display = 'block';

        document.getElementById('camp-edit-idx').value = idx;
        document.getElementById('camp-edit-banner').value = pkg.banner || '';
        document.getElementById('camp-edit-name').value = pkg.name || '';
        document.getElementById('camp-edit-price').value = pkg.price || '';
        document.getElementById('camp-edit-download').value = pkg.download || '';
        document.getElementById('camp-edit-upload').value = pkg.upload || '';
        document.getElementById('camp-edit-features').value = pkg.features || '';
        document.getElementById('camp-edit-cta-sub-text').value = pkg.ctaSubText || '';
        document.getElementById('camp-edit-cta-sub-url').value = pkg.ctaSubUrl || '';
        document.getElementById('camp-edit-cta-main-text').value = pkg.ctaMainText || '';
        document.getElementById('camp-edit-cta-main-url').value = pkg.ctaMainUrl || '';
    }

    function campSaveDetailField(fieldName) {
        var idx = parseInt(document.getElementById('camp-edit-idx').value);
        if (isNaN(idx) || idx < 0 || idx >= campProductsData.length) return;

        var pkg = campProductsData[idx];
        if (!pkg) return;

        if (fieldName === 'banner') pkg.banner = document.getElementById('camp-edit-banner').value;
        else if (fieldName === 'name') {
            pkg.name = document.getElementById('camp-edit-name').value;
            var items = document.querySelectorAll('#camp-products-nav-list .camp-product-list-item');
            var clickedItem = Array.from(items).find(function (item) {
                return item.getAttribute('onclick') && item.getAttribute('onclick').indexOf('campSelectProduct(' + idx + ')') > -1;
            });
            if (clickedItem) {
                var titleSpan = clickedItem.querySelector('.item-title');
                if (titleSpan) titleSpan.textContent = pkg.name || 'Gói chưa đặt tên';
            }
        }
        else if (fieldName === 'price') pkg.price = document.getElementById('camp-edit-price').value;
        else if (fieldName === 'download') pkg.download = document.getElementById('camp-edit-download').value;
        else if (fieldName === 'upload') pkg.upload = document.getElementById('camp-edit-upload').value;
        else if (fieldName === 'features') pkg.features = document.getElementById('camp-edit-features').value;
        else if (fieldName === 'ctaSubText') pkg.ctaSubText = document.getElementById('camp-edit-cta-sub-text').value;
        else if (fieldName === 'ctaSubUrl') pkg.ctaSubUrl = document.getElementById('camp-edit-cta-sub-url').value;
        else if (fieldName === 'ctaMainText') pkg.ctaMainText = document.getElementById('camp-edit-cta-main-text').value;
        else if (fieldName === 'ctaMainUrl') pkg.ctaMainUrl = document.getElementById('camp-edit-cta-main-url').value;

        campSyncHiddenDom();
    }

    function campAddProductCardGóiMới() {
        var idx = campProductsData.length;
        campProductsData.push({
            banner: '',
            name: 'Gói mới ' + (idx + 1),
            price: '200.000',
            download: '1Gbps',
            upload: '1Gbps',
            features: 'Wi-Fi 7 thế hệ mới\nKết nối tốc độ cao',
            ctaSubText: 'Nhận tư vấn',
            ctaSubUrl: '#tu-van',
            ctaMainText: 'Đăng ký ngay',
            ctaMainUrl: '#dang-ky',
            highlight: false
        });
        campCurrentPage = Math.ceil(campProductsData.length / campProductsPerPage) || 1;
        campRenderProductsList();
        campSelectProduct(idx);
    }

    function campAddProductCard() {
        campAddProductCardGóiMới();
    }

    function campToggleHighlight(idx, checkbox) {
        if (campProductsData[idx]) {
            campProductsData[idx].highlight = checkbox.checked;
            campSyncHiddenDom();
        }
    }

    // Đóng dropdown khi click ngoài
    document.addEventListener('click', function (event) {
        var dropdown = document.getElementById('camp-pdh-dropdown');
        var btn = document.querySelector('button[onclick="campTogglePdhDropdown()"]');
        if (dropdown && dropdown.style.display === 'block' && btn && !btn.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });

    function campMoveProduct(idx, direction) {
        var targetIdx = idx + direction;
        if (targetIdx < 0 || targetIdx >= campProductsData.length) return;

        var temp = campProductsData[idx];
        campProductsData[idx] = campProductsData[targetIdx];
        campProductsData[targetIdx] = temp;

        if (campActiveIndex === idx) {
            campActiveIndex = targetIdx;
        } else if (campActiveIndex === targetIdx) {
            campActiveIndex = idx;
        }

        campCurrentPage = Math.ceil((campActiveIndex + 1) / campProductsPerPage) || 1;

        campRenderProductsList();
        if (campActiveIndex >= 0) {
            campSelectProduct(campActiveIndex);
        }
    }

    function campDeleteProduct(idx) {
        campProductsData.splice(idx, 1);
        if (campActiveIndex === idx) {
            campActiveIndex = -1;
            document.getElementById('camp-product-detail-empty').style.display = 'flex';
            document.getElementById('camp-product-detail-form').style.display = 'none';
        } else if (campActiveIndex > idx) {
            campActiveIndex--;
        }

        var totalPages = Math.ceil(campProductsData.length / campProductsPerPage) || 1;
        if (campCurrentPage > totalPages) {
            campCurrentPage = totalPages;
        }

        campRenderProductsList();
        if (campActiveIndex >= 0) {
            campSelectProduct(campActiveIndex);
        }
    }

    function campTogglePdhDropdown() {
        var dropdown = document.getElementById('camp-pdh-dropdown');
        if (dropdown) {
            var isHidden = dropdown.style.display === 'none';
            dropdown.style.display = isHidden ? 'block' : 'none';
            if (isHidden) {
                campPdhCurrentPage = 1;
                var searchInput = document.getElementById('camp-pdh-search');
                if (searchInput) searchInput.value = '';
                campRenderPdhDropdownList();
            }
        }
    }

    function campSyncPdhPackage(pdhIndex) {
        var pkgMock = pdhPackagesMock[pdhIndex];
        if (!pkgMock) return;

        var idx = campProductsData.length;
        campProductsData.push({
            banner: pkgMock.banner,
            name: pkgMock.name,
            price: pkgMock.price,
            download: pkgMock.download,
            upload: pkgMock.upload,
            features: pkgMock.features,
            ctaSubText: pkgMock.ctaSubText,
            ctaSubUrl: pkgMock.ctaSubUrl,
            ctaMainText: pkgMock.ctaMainText,
            ctaMainUrl: pkgMock.ctaMainUrl,
            highlight: false
        });

        var dropdown = document.getElementById('camp-pdh-dropdown');
        if (dropdown) dropdown.style.display = 'none';

        campCurrentPage = Math.ceil(campProductsData.length / campProductsPerPage) || 1;

        campRenderProductsList();
        campSelectProduct(idx);
    }

    function campFilterProducts() {
        campCurrentPage = 1;
        campRenderProductsList();
        if (campActiveIndex >= 0) {
            var searchVal = document.getElementById('camp-product-search') ? document.getElementById('camp-product-search').value.toLowerCase() : '';
            var pkg = campProductsData[campActiveIndex];
            if (pkg && searchVal && pkg.name.toLowerCase().indexOf(searchVal) === -1 && pkg.price.toLowerCase().indexOf(searchVal) === -1) {
                document.getElementById('camp-product-detail-empty').style.display = 'flex';
                document.getElementById('camp-product-detail-form').style.display = 'none';
            } else {
                var filteredIdx = campProductsData.map(function (p, i) {
                    return { p: p, i: i };
                }).filter(function (item) {
                    return !searchVal || item.p.name.toLowerCase().indexOf(searchVal) > -1 || item.p.price.toLowerCase().indexOf(searchVal) > -1;
                }).findIndex(function (item) {
                    return item.i === campActiveIndex;
                });
                if (filteredIdx >= 0) {
                    campCurrentPage = Math.ceil((filteredIdx + 1) / campProductsPerPage) || 1;
                    campRenderProductsList();
                    campSelectProduct(campActiveIndex);
                }
            }
        }
    }

    function campSyncHiddenDom() {
        var container = document.getElementById('camp-products-list');
        if (!container) return;

        container.innerHTML = '';

        campProductsData.forEach(function (pkg, i) {
            var card = document.createElement('div');
            card.className = 'inet-product-card';
            card.style.display = 'none';

            var highlightChecked = pkg.highlight ? 'checked' : '';

            var html = '<div class="inet-product-card-header">'
                + '<span class="inet-product-card-idx">Gói ' + (i + 1) + '</span>'
                + '<span class="inet-product-card-title">' + pkg.name + '</span>'
                + '<span class="inet-product-card-price-summary"> - ' + pkg.price + ' VNĐ/tháng</span>'
                + '<input type="checkbox" ' + highlightChecked + '>'
                + '</div>'
                + '<div class="inet-product-card-body">'
                + '<input type="text" value="' + pkg.banner + '">'
                + '<input type="text" class="inet-product-name-input" value="' + pkg.name + '">'
                + '<input type="text" class="inet-product-price-input" value="' + pkg.price + '">'
                + '<input type="text" value="' + pkg.download + '">'
                + '<input type="text" value="' + pkg.upload + '">'
                + '<textarea>' + pkg.features + '</textarea>'
                + '<input type="text" value="' + pkg.ctaSubText + '">'
                + '<input type="text" value="' + pkg.ctaSubUrl + '">'
                + '<input type="text" value="' + pkg.ctaMainText + '">'
                + '<input type="text" value="' + pkg.ctaMainUrl + '">'
                + '</div>';

            card.innerHTML = html;
            container.appendChild(card);
        });
    }

    // --- TAB-BASED SPLIT VIEW & PAGINATION FOR INTERNET & THU LEAD ---
    var tabProductsPerPage = 10;

    function tabInit(tabEl, type) {
        if (!tabEl) return;
        if (tabEl.dataset.initialized === 'true') return;
        tabEl.dataset.initialized = 'true';

        // 1. Tạo container ẩn chứa cards gốc
        var hiddenContainer = tabEl.querySelector('.inet-tab-hidden-cards-container');
        if (!hiddenContainer) {
            hiddenContainer = document.createElement('div');
            hiddenContainer.className = 'inet-tab-hidden-cards-container';
            hiddenContainer.style.display = 'none';

            // Di chuyển các card cũ vào hiddenContainer
            var oldCards = tabEl.querySelectorAll('.inet-product-card');
            oldCards.forEach(function (card) {
                hiddenContainer.appendChild(card);
            });

            // Xóa nút thêm cũ
            var oldAddBtn = tabEl.querySelector('button[onclick*="ldpAddProductCard"]');
            if (oldAddBtn) oldAddBtn.remove();

            tabEl.appendChild(hiddenContainer);
        }

        tabEl.productsData = [];
        tabEl.activeIndex = -1;
        tabEl.currentPage = 1;
        tabEl.type = type;

        var cards = hiddenContainer.querySelectorAll('.inet-product-card');
        cards.forEach(function (card, idx) {
            var data = {};
            if (type === 'inet') {
                var bannerInput = card.querySelector('input[placeholder="URL ảnh banner"]') || card.querySelectorAll('input[type="text"]')[0];
                var nameInput = card.querySelector('.inet-product-name-input') || card.querySelectorAll('input[type="text"]')[1];
                var priceInput = card.querySelector('.inet-product-price-input') || card.querySelectorAll('input[type="text"]')[2];
                var inputs = card.querySelectorAll('input[type="text"]');
                var download = inputs[3] ? inputs[3].value : '';
                var upload = inputs[4] ? inputs[4].value : '';
                var badge = inputs[5] ? inputs[5].value : '';
                var featuresTextarea = card.querySelector('textarea');
                var features = featuresTextarea ? featuresTextarea.value : '';
                var ctaSubText = inputs[6] ? inputs[6].value : '';
                var ctaSubUrl = inputs[7] ? inputs[7].value : '';
                var ctaMainText = inputs[8] ? inputs[8].value : '';
                var ctaMainUrl = inputs[9] ? inputs[9].value : '';
                var highlightCb = card.querySelector('input[type="checkbox"]');
                var highlight = highlightCb ? highlightCb.checked : false;

                data = {
                    banner: bannerInput ? bannerInput.value : '',
                    name: nameInput ? nameInput.value : 'Gói ' + (idx + 1),
                    price: priceInput ? priceInput.value : '',
                    download: download,
                    upload: upload,
                    badge: badge,
                    features: features,
                    ctaSubText: ctaSubText,
                    ctaSubUrl: ctaSubUrl,
                    ctaMainText: ctaMainText,
                    ctaMainUrl: ctaMainUrl,
                    highlight: highlight
                };
            } else {
                // lead
                var nameInput = card.querySelector('.inet-product-name-input') || card.querySelectorAll('input[type="text"]')[0];
                var inputs = card.querySelectorAll('input[type="text"]');
                var price = inputs[1] ? inputs[1].value : '';
                var download = inputs[2] ? inputs[2].value : '';
                var upload = inputs[3] ? inputs[3].value : '';
                var badge = inputs[4] ? inputs[4].value : '';
                var featuresTextarea = card.querySelector('textarea');
                var features = featuresTextarea ? featuresTextarea.value : '';
                var ctaSubText = inputs[5] ? inputs[5].value : '';
                var ctaSubUrl = inputs[6] ? inputs[6].value : '';
                var ctaMainText = inputs[7] ? inputs[7].value : '';
                var ctaMainUrl = inputs[8] ? inputs[8].value : '';
                var highlightCb = card.querySelector('input[type="checkbox"]');
                var highlight = highlightCb ? highlightCb.checked : false;

                data = {
                    banner: '',
                    name: nameInput ? nameInput.value : 'Gói ' + (idx + 1),
                    price: price,
                    download: download,
                    upload: upload,
                    badge: badge,
                    features: features,
                    ctaSubText: ctaSubText,
                    ctaSubUrl: ctaSubUrl,
                    ctaMainText: ctaMainText,
                    ctaMainUrl: ctaMainUrl,
                    highlight: highlight
                };
            }
            tabEl.productsData.push(data);
        });

        // 2. Tạo giao diện Split View
        var splitViewContainer = document.createElement('div');
        splitViewContainer.className = 'tab-split-view-container';
        splitViewContainer.style.cssText = 'display: grid; grid-template-columns: 240px 1fr; gap: 16px; min-height: 380px; padding: 14px;';

        // Cột trái
        var leftCol = document.createElement('div');
        leftCol.style.cssText = 'display: flex; flex-direction: column; gap: 8px; border-right: 1px solid rgba(255,255,255,0.06); padding-right: 16px;';
        leftCol.innerHTML =
            '<div style="display: flex; gap: 8px; margin-bottom: 2px; align-items: center;">'
            + '  <button class="btn btn-primary tab-add-pkg-btn" style="flex: 1; font-size: 11px; padding: 6px 10px; background: var(--primary-gradient); font-weight: 600; border: none; border-radius: 6px; color: #fff; cursor: pointer; height: 28px; line-height: 1;">+ Thêm gói trống</button>'
            + '  <div style="position: relative;">'
            + '    <button class="btn btn-secondary btn-sm tab-sync-pdh-btn" style="font-size: 11px; padding: 4px 10px; height: 28px; display: flex; align-items: center; gap: 4px; white-space: nowrap;">Sync PDH ▾</button>'
            + '    <div class="tab-pdh-dropdown" style="display: none; position: absolute; top: 100%; right: 0; background: #1e293b; border: 1px solid rgba(255,255,255,0.15); border-radius: 6px; box-shadow: 0 10px 25px rgba(0,0,0,0.6); z-index: 1000; min-width: 240px; padding: 8px; max-height: 380px; overflow-y: auto; margin-top: 4px;">'
            + '       <div style="font-size: 10px; font-weight: 600; color: var(--text-muted); padding: 4px 8px; text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,0.06); margin-bottom: 6px;">Chọn gói từ PDH</div>'
            + '       <div style="padding: 4px 8px; margin-bottom: 6px;">'
            + '         <input type="text" class="tab-pdh-search" placeholder="🔍 Lọc mã / tên gói..." style="width: 100%; font-size: 11px; padding: 6px 10px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; color: #fff;">'
            + '       </div>'
            + '       <div class="tab-pdh-list-options" style="display: flex; flex-direction: column; gap: 4px;"></div>'
            + '       <div class="tab-pdh-pagination" style="display: flex; align-items: center; justify-content: center; gap: 6px; padding-top: 6px; border-top: 1px solid rgba(255,255,255,0.06); margin-top: 6px; font-size: 10px;"></div>'
            + '    </div>'
            + '  </div>'
            + '</div>'
            + '<div style="margin-bottom: 4px;">'
            + '  <input type="text" class="form-input tab-search-input" placeholder="🔍 Tìm kiếm gói cước..." style="font-size: 11px; padding: 6px 10px; width: 100%;">'
            + '</div>'
            + '<div class="tab-nav-list" style="display: flex; flex-direction: column; gap: 6px; max-height: 280px; overflow-y: auto; flex: 1; padding-right: 2px; scrollbar-width: thin;"></div>'
            + '<div class="tab-pagination" style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: auto; padding-top: 6px; border-top: 1px solid rgba(255,255,255,0.06);"></div>';

        // Cột phải
        var rightCol = document.createElement('div');
        rightCol.style.cssText = 'display: flex; flex-direction: column;';

        var emptyState = document.createElement('div');
        emptyState.className = 'tab-detail-empty';
        emptyState.style.cssText = 'display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1; border: 1px dashed var(--border); border-radius: 6px; color: var(--text-muted); font-size: 11px; min-height: 300px;';
        emptyState.textContent = 'Chọn hoặc thêm gói cước để chỉnh sửa';

        var detailForm = document.createElement('div');
        detailForm.className = 'tab-detail-form';
        detailForm.style.display = 'none';

        var bannerFieldHtml = type === 'inet' ?
            '<div class="form-group" style="margin-bottom:8px;"><label style="font-size:11px;">Ảnh banner gói</label>'
            + '  <div style="display:flex; gap:6px;"><input type="text" class="form-input tab-edit-banner" placeholder="URL ảnh banner" style="flex:1;"><button class="btn btn-secondary btn-sm" style="font-size:10px; padding:2px 6px;">Upload</button></div>'
            + '</div>' : '';

        detailForm.innerHTML =
            '<input type="hidden" class="tab-edit-idx">'
            + bannerFieldHtml
            + '<div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">'
            + '  <div class="form-group" style="margin-bottom:6px;"><label style="font-size:11px;">Tên gói</label><input type="text" class="form-input tab-edit-name" placeholder="vd: Internet GIGA"></div>'
            + '  <div class="form-group" style="margin-bottom:6px;"><label style="font-size:11px;">Giá (VNĐ/tháng)</label><input type="text" class="form-input tab-edit-price" placeholder="vd: 165.000"></div>'
            + '  <div class="form-group" style="margin-bottom:6px;"><label style="font-size:11px;">Tốc độ Download</label><input type="text" class="form-input tab-edit-download" placeholder="vd: 150 Mbps"></div>'
            + '  <div class="form-group" style="margin-bottom:6px;"><label style="font-size:11px;">Tốc độ Upload</label><input type="text" class="form-input tab-edit-upload" placeholder="vd: 150 Mbps"></div>'
            + '  <div class="form-group" style="margin-bottom:6px;"><label style="font-size:11px;">Tag line</label><input type="text" class="form-input tab-edit-badge" placeholder="VD: Nổi bật, ƯU ĐÃI 50% GÓI 12 THÁNG ✨" value="ƯU ĐÃI 50% GÓI 12 THÁNG ✨"></div>'
            + '  <div class="form-group" style="margin-bottom:6px;"></div>'
            + '  <div class="form-group" style="grid-column:1/-1; margin-bottom:6px;"><label style="font-size:11px;">Tính năng (mỗi dòng 1 mục)</label><textarea class="form-textarea tab-edit-features" rows="3" placeholder="Wifi Router miễn phí\nHỗ trợ 24/7"></textarea></div>'
            + '  <div class="form-group" style="margin-bottom:6px;"><label style="font-size:11px;">CTA phụ (text)</label><input type="text" class="form-input tab-edit-cta-sub-text" placeholder="Xem chi tiết"></div>'
            + '  <div class="form-group" style="margin-bottom:6px;"><label style="font-size:11px;">CTA phụ (URL)</label><input type="text" class="form-input tab-edit-cta-sub-url" placeholder="/goi-giga"></div>'
            + '  <div class="form-group" style="margin-bottom:0;"><label style="font-size:11px;">CTA chính (text)</label><input type="text" class="form-input tab-edit-cta-main-text" value="Đăng ký ngay"></div>'
            + '  <div class="form-group" style="margin-bottom:0;"><label style="font-size:11px;">CTA chính (URL)</label><input type="text" class="form-input tab-edit-cta-main-url" placeholder="/dang-ky?goi=giga"></div>'
            + '</div>';

        rightCol.appendChild(emptyState);
        rightCol.appendChild(detailForm);

        splitViewContainer.appendChild(leftCol);
        splitViewContainer.appendChild(rightCol);

        tabEl.appendChild(splitViewContainer);

        // Gán các sự kiện điều khiển
        var searchInput = leftCol.querySelector('.tab-search-input');
        searchInput.addEventListener('input', function () {
            tabEl.currentPage = 1;
            tabRenderProducts(tabEl);
        });

        tabEl.pdhCurrentPage = 1;
        tabEl.pdhItemsPerPage = 10;

        function tabRenderPdhDropdown(el) {
            var searchInput = el.querySelector('.tab-pdh-search');
            var searchVal = searchInput ? searchInput.value.toLowerCase().trim() : '';

            var filtered = pdhPackagesMock.map(function (pkg, idx) {
                return { pkg: pkg, originalIdx: idx };
            }).filter(function (item) {
                return !searchVal || item.pkg.code.toLowerCase().indexOf(searchVal) > -1 || item.pkg.name.toLowerCase().indexOf(searchVal) > -1;
            });

            var totalPages = Math.ceil(filtered.length / el.pdhItemsPerPage) || 1;
            if (el.pdhCurrentPage > totalPages) el.pdhCurrentPage = totalPages;
            if (el.pdhCurrentPage < 1) el.pdhCurrentPage = 1;

            var start = (el.pdhCurrentPage - 1) * el.pdhItemsPerPage;
            var end = start + el.pdhItemsPerPage;
            var pageItems = filtered.slice(start, end);

            var optionsContainer = el.querySelector('.tab-pdh-list-options');
            if (optionsContainer) {
                var html = '';
                pageItems.forEach(function (item) {
                    var pkg = item.pkg;
                    var idx = item.originalIdx;
                    html += '<div onclick="tabSyncPdh(' + idx + ', this)" style="padding: 6px 8px; font-size: 11px; cursor: pointer; color: #fff; border-radius: 4px; transition: background 0.15s;" class="pdh-dropdown-item">'
                        + '<div style="font-weight: 700; color: var(--warning);">' + pkg.code + '</div>'
                        + '<div style="font-size: 10px; color: var(--text-muted); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">' + pkg.name + ' - ' + pkg.price + 'đ</div>'
                        + '</div>';
                });
                if (filtered.length === 0) {
                    html = '<div style="font-size: 10px; color: var(--text-muted); padding: 10px; text-align: center;">Không tìm thấy gói</div>';
                }
                optionsContainer.innerHTML = html;
            }

            var pagContainer = el.querySelector('.tab-pdh-pagination');
            if (pagContainer) {
                var pagHtml = '';
                if (totalPages > 1) {
                    var prevDisabled = el.pdhCurrentPage === 1 ? 'pointer-events:none; opacity:0.4;' : 'cursor:pointer;';
                    var nextDisabled = el.pdhCurrentPage === totalPages ? 'pointer-events:none; opacity:0.4;' : 'cursor:pointer;';
                    pagHtml += '<span class="tab-pdh-prev" style="padding: 2px 6px; background: rgba(255,255,255,0.08); border-radius: 4px; color: #fff; font-weight: bold; ' + prevDisabled + '">◀</span>';
                    pagHtml += '<span style="color: var(--text-muted); margin: 0 4px;">Trang ' + el.pdhCurrentPage + '/' + totalPages + '</span>';
                    pagHtml += '<span class="tab-pdh-next" style="padding: 2px 6px; background: rgba(255,255,255,0.08); border-radius: 4px; color: #fff; font-weight: bold; ' + nextDisabled + '">▶</span>';
                }
                pagContainer.innerHTML = pagHtml;

                var prevBtn = pagContainer.querySelector('.tab-pdh-prev');
                if (prevBtn) {
                    prevBtn.addEventListener('click', function (ev) {
                        ev.stopPropagation();
                        el.pdhCurrentPage--;
                        tabRenderPdhDropdown(el);
                    });
                }
                var nextBtn = pagContainer.querySelector('.tab-pdh-next');
                if (nextBtn) {
                    nextBtn.addEventListener('click', function (ev) {
                        ev.stopPropagation();
                        el.pdhCurrentPage++;
                        tabRenderPdhDropdown(el);
                    });
                }
            }
        }

        var syncBtn = leftCol.querySelector('.tab-sync-pdh-btn');
        syncBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            var dropdown = leftCol.querySelector('.tab-pdh-dropdown');
            if (dropdown) {
                var isHidden = dropdown.style.display === 'none';
                dropdown.style.display = isHidden ? 'block' : 'none';
                if (isHidden) {
                    tabEl.pdhCurrentPage = 1;
                    var sInput = leftCol.querySelector('.tab-pdh-search');
                    if (sInput) sInput.value = '';
                    tabRenderPdhDropdown(tabEl);
                }
            }
        });

        var pdhSearchInput = leftCol.querySelector('.tab-pdh-search');
        if (pdhSearchInput) {
            pdhSearchInput.addEventListener('input', function (e) {
                tabEl.pdhCurrentPage = 1;
                tabRenderPdhDropdown(tabEl);
            });
            pdhSearchInput.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        }

        // Lắng nghe thay đổi trên form để tự lưu
        var fields = ['banner', 'name', 'price', 'download', 'upload', 'badge', 'features', 'ctaSubText', 'ctaSubUrl', 'ctaMainText', 'ctaMainUrl'];
        fields.forEach(function (field) {
            var el = detailForm.querySelector('.tab-edit-' + field);
            if (el) {
                el.addEventListener('input', function () {
                    var idx = parseInt(detailForm.querySelector('.tab-edit-idx').value);
                    if (!isNaN(idx) && tabEl.productsData[idx]) {
                        tabEl.productsData[idx][field] = el.value;
                        if (field === 'name') {
                            var clickedItem = leftCol.querySelector('.camp-product-list-item[data-idx="' + idx + '"]');
                            if (clickedItem) {
                                var titleSpan = clickedItem.querySelector('.item-title');
                                if (titleSpan) titleSpan.textContent = el.value || 'Gói chưa đặt tên';
                            }
                        }
                        tabSyncHiddenDom(tabEl);
                    }
                });
            }
        });

        leftCol.querySelector('.tab-add-pkg-btn').addEventListener('click', function () {
            tabAddProduct(tabEl);
        });

        tabRenderProducts(tabEl);
    }

    function tabRenderProducts(tabEl) {
        var container = tabEl.querySelector('.tab-nav-list');
        if (!container) return;

        var searchVal = tabEl.querySelector('.tab-search-input').value.toLowerCase();

        var filtered = tabEl.productsData.map(function (pkg, idx) {
            return { pkg: pkg, originalIdx: idx };
        }).filter(function (item) {
            return !searchVal || item.pkg.name.toLowerCase().indexOf(searchVal) > -1 || item.pkg.price.toLowerCase().indexOf(searchVal) > -1;
        });

        var totalPages = Math.ceil(filtered.length / tabProductsPerPage) || 1;
        if (tabEl.currentPage > totalPages) tabEl.currentPage = totalPages;
        if (tabEl.currentPage < 1) tabEl.currentPage = 1;

        var start = (tabEl.currentPage - 1) * tabProductsPerPage;
        var end = start + tabProductsPerPage;
        var pageItems = filtered.slice(start, end);

        var html = '';
        pageItems.forEach(function (item) {
            var pkg = item.pkg;
            var idx = item.originalIdx;
            var activeClass = idx === tabEl.activeIndex ? 'active' : '';
            var activeStyle = idx === tabEl.activeIndex ? 'background: rgba(249,115,22,0.15) !important; border-color: var(--primary) !important;' : '';
            var highlightChecked = pkg.highlight ? 'checked' : '';
            var displayIdx = idx + 1;

            html += '<div class="camp-product-list-item ' + activeClass + '" data-idx="' + idx + '" style="display: flex; align-items: center; justify-content: space-between; padding: 8px 10px; background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 6px; cursor: pointer; transition: all 0.2s; ' + activeStyle + '" onclick="tabSelectProduct(' + idx + ', this)">'
                + '<div style="display: flex; align-items: center; gap: 8px; flex: 1; overflow: hidden; white-space: nowrap;">'
                + '<span style="font-size: 11px; font-weight: 700; color: var(--primary); min-width: 45px;">Gói ' + displayIdx + '</span>'
                + '<span style="font-size: 12px; color: #fff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 500;" class="item-title">' + pkg.name + '</span>'
                + '</div>'
                + '<div style="display: flex; align-items: center; gap: 6px;" onclick="event.stopPropagation()">'
                + '<input type="checkbox" ' + highlightChecked + ' onchange="tabToggleHighlight(' + idx + ', this)" title="Nổi bật" style="accent-color: var(--warning); cursor: pointer; width: 13px; height: 13px; margin: 0;">'
                + '<span onclick="tabMoveProduct(' + idx + ', -1, this)" title="Di chuyển lên" style="cursor: pointer; font-size: 10px; color: var(--text-muted); padding: 2px;">▲</span>'
                + '<span onclick="tabMoveProduct(' + idx + ', 1, this)" title="Di chuyển xuống" style="cursor: pointer; font-size: 10px; color: var(--text-muted); padding: 2px;">▼</span>'
                + '<span onclick="tabDeleteProduct(' + idx + ', this)" title="Xóa gói" style="cursor: pointer; font-size: 12px; color: var(--danger); font-weight: bold; padding: 2px 4px; margin-left: 2px;">✕</span>'
                + '</div>'
                + '</div>';
        });

        if (filtered.length === 0) {
            html = '<div style="text-align: center; color: var(--text-muted); font-size: 12px; padding: 20px 0;">Không tìm thấy gói</div>';
        }

        container.innerHTML = html;

        // Render Pagination
        var pagContainer = tabEl.querySelector('.tab-pagination');
        if (pagContainer) {
            if (filtered.length <= tabProductsPerPage) {
                pagContainer.style.display = 'none';
            } else {
                pagContainer.style.display = 'flex';
                var prevDisabled = tabEl.currentPage === 1 ? 'disabled style="opacity: 0.3; cursor: not-allowed;"' : '';
                var nextDisabled = tabEl.currentPage === totalPages ? 'disabled style="opacity: 0.3; cursor: not-allowed;"' : '';

                pagContainer.innerHTML = '<button class="btn btn-secondary btn-sm" onclick="tabPrevPage(this)" ' + prevDisabled + ' style="padding: 2px 8px; font-size: 10px; font-weight: bold; border-radius: 4px;">◀</button>'
                    + '<span style="font-size: 11px; color: var(--text-muted); font-weight: 500;">Trang ' + tabEl.currentPage + ' / ' + totalPages + '</span>'
                    + '<button class="btn btn-secondary btn-sm" onclick="tabNextPage(this)" ' + nextDisabled + ' style="padding: 2px 8px; font-size: 10px; font-weight: bold; border-radius: 4px;">▶</button>';
            }
        }
    }

    function tabSelectProduct(idx, childEl) {
        var tabEl = childEl.closest('div[style*="border-radius:10px"]');
        if (!tabEl) return;

        tabEl.activeIndex = idx;

        var navList = tabEl.querySelector('.tab-nav-list');
        navList.querySelectorAll('.camp-product-list-item').forEach(function (item) {
            item.classList.remove('active');
            item.style.borderColor = 'var(--border)';
            item.style.background = 'rgba(255,255,255,0.03)';
        });

        var clickedItem = navList.querySelector('.camp-product-list-item[data-idx="' + idx + '"]');
        if (clickedItem) {
            clickedItem.classList.add('active');
            clickedItem.style.background = 'rgba(249,115,22,0.15)';
            clickedItem.style.borderColor = 'var(--primary)';
        }

        var pkg = tabEl.productsData[idx];
        if (!pkg) return;

        var emptyState = tabEl.querySelector('.tab-detail-empty');
        var detailForm = tabEl.querySelector('.tab-detail-form');

        emptyState.style.display = 'none';
        detailForm.style.display = 'block';

        detailForm.querySelector('.tab-edit-idx').value = idx;
        if (tabEl.type === 'inet') {
            detailForm.querySelector('.tab-edit-banner').value = pkg.banner || '';
        }
        detailForm.querySelector('.tab-edit-name').value = pkg.name || '';
        detailForm.querySelector('.tab-edit-price').value = pkg.price || '';
        detailForm.querySelector('.tab-edit-download').value = pkg.download || '';
        detailForm.querySelector('.tab-edit-upload').value = pkg.upload || '';
        detailForm.querySelector('.tab-edit-badge').value = pkg.badge || '';
        detailForm.querySelector('.tab-edit-features').value = pkg.features || '';
        detailForm.querySelector('.tab-edit-cta-sub-text').value = pkg.ctaSubText || '';
        detailForm.querySelector('.tab-edit-cta-sub-url').value = pkg.ctaSubUrl || '';
        detailForm.querySelector('.tab-edit-cta-main-text').value = pkg.ctaMainText || '';
        detailForm.querySelector('.tab-edit-cta-main-url').value = pkg.ctaMainUrl || '';
    }

    function tabPrevPage(btnEl) {
        var tabEl = btnEl.closest('div[style*="border-radius:10px"]');
        if (tabEl && tabEl.currentPage > 1) {
            tabEl.currentPage--;
            tabRenderProducts(tabEl);
        }
    }

    document.addEventListener('click', function (event) {
        var dropdowns = document.querySelectorAll('.tab-pdh-dropdown');
        dropdowns.forEach(function (dropdown) {
            var btn = dropdown.parentElement.querySelector('.tab-sync-pdh-btn');
            if (dropdown.style.display === 'block' && btn && !btn.contains(event.target) && !dropdown.contains(event.target)) {
                dropdown.style.display = 'none';
            }
        });
    });

    function tabNextPage(btnEl) {
        var tabEl = btnEl.closest('div[style*="border-radius:10px"]');
        if (!tabEl) return;
        var searchVal = tabEl.querySelector('.tab-search-input').value.toLowerCase();
        var filteredCount = tabEl.productsData.filter(function (pkg) {
            return !searchVal || pkg.name.toLowerCase().indexOf(searchVal) > -1 || pkg.price.toLowerCase().indexOf(searchVal) > -1;
        }).length;
        var totalPages = Math.ceil(filteredCount / tabProductsPerPage) || 1;
        if (tabEl.currentPage < totalPages) {
            tabEl.currentPage++;
            tabRenderProducts(tabEl);
        }
    }

    function tabAddProduct(tabEl) {
        var idx = tabEl.productsData.length;
        tabEl.productsData.push({
            banner: '',
            name: 'Gói mới ' + (idx + 1),
            price: '200.000',
            download: '1Gbps',
            upload: '1Gbps',
            badge: '',
            features: 'Tính năng gói cước mới',
            ctaSubText: 'Nhận tư vấn',
            ctaSubUrl: '#tu-van',
            ctaMainText: 'Đăng ký ngay',
            ctaMainUrl: '#dang-ky',
            highlight: false
        });
        tabEl.currentPage = Math.ceil(tabEl.productsData.length / tabProductsPerPage) || 1;
        tabRenderProducts(tabEl);
        tabSelectProduct(idx, tabEl.querySelector('.tab-nav-list'));
        tabSyncHiddenDom(tabEl);
    }

    function tabToggleHighlight(idx, checkbox) {
        var tabEl = checkbox.closest('div[style*="border-radius:10px"]');
        if (tabEl && tabEl.productsData[idx]) {
            tabEl.productsData[idx].highlight = checkbox.checked;
            tabSyncHiddenDom(tabEl);
        }
    }

    function tabMoveProduct(idx, direction, btnEl) {
        var tabEl = btnEl.closest('div[style*="border-radius:10px"]');
        if (!tabEl) return;

        var targetIdx = idx + direction;
        if (targetIdx < 0 || targetIdx >= tabEl.productsData.length) return;

        var temp = tabEl.productsData[idx];
        tabEl.productsData[idx] = tabEl.productsData[targetIdx];
        tabEl.productsData[targetIdx] = temp;

        if (tabEl.activeIndex === idx) {
            tabEl.activeIndex = targetIdx;
        } else if (tabEl.activeIndex === targetIdx) {
            tabEl.activeIndex = idx;
        }

        tabEl.currentPage = Math.ceil((tabEl.activeIndex + 1) / tabProductsPerPage) || 1;

        tabRenderProducts(tabEl);
        if (tabEl.activeIndex >= 0) {
            tabSelectProduct(tabEl.activeIndex, tabEl.querySelector('.tab-nav-list'));
        }
        tabSyncHiddenDom(tabEl);
    }

    function tabDeleteProduct(idx, btnEl) {
        var tabEl = btnEl.closest('div[style*="border-radius:10px"]');
        if (!tabEl) return;

        tabEl.productsData.splice(idx, 1);
        if (tabEl.activeIndex === idx) {
            tabEl.activeIndex = -1;
            tabEl.querySelector('.tab-detail-empty').style.display = 'flex';
            tabEl.querySelector('.tab-detail-form').style.display = 'none';
        } else if (tabEl.activeIndex > idx) {
            tabEl.activeIndex--;
        }

        var totalPages = Math.ceil(tabEl.productsData.length / tabProductsPerPage) || 1;
        if (tabEl.currentPage > totalPages) tabEl.currentPage = totalPages;

        tabRenderProducts(tabEl);
        if (tabEl.activeIndex >= 0) {
            tabSelectProduct(tabEl.activeIndex, tabEl.querySelector('.tab-nav-list'));
        }
        tabSyncHiddenDom(tabEl);
    }

    function inetTogglePdhDropdown(btnEl) {
        var tabEl = btnEl.closest('div[style*="border-radius:10px"]');
        if (!tabEl) return;
        var dropdown = tabEl.querySelector('.tab-pdh-dropdown');
        if (dropdown) {
            dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
        }
    }

    function tabSyncPdh(pdhIndex, itemEl) {
        var tabEl = itemEl.closest('div[style*="border-radius:10px"]');
        if (!tabEl) return;

        var pkgMock = pdhPackagesMock[pdhIndex];
        if (!pkgMock) return;

        var idx = tabEl.productsData.length;
        tabEl.productsData.push({
            banner: pkgMock.banner || '',
            name: pkgMock.name,
            price: pkgMock.price,
            download: pkgMock.download,
            upload: pkgMock.upload,
            badge: '',
            features: pkgMock.features,
            ctaSubText: pkgMock.ctaSubText,
            ctaSubUrl: pkgMock.ctaSubUrl,
            ctaMainText: pkgMock.ctaMainText,
            ctaMainUrl: pkgMock.ctaMainUrl,
            highlight: false
        });

        var dropdown = tabEl.querySelector('.tab-pdh-dropdown');
        if (dropdown) dropdown.style.display = 'none';

        tabEl.currentPage = Math.ceil(tabEl.productsData.length / tabProductsPerPage) || 1;

        tabRenderProducts(tabEl);
        tabSelectProduct(idx, tabEl.querySelector('.tab-nav-list'));
        tabSyncHiddenDom(tabEl);
    }

    function inetFilterProducts(inputEl) {
        var tabEl = inputEl.closest('div[style*="border-radius:10px"]');
        if (tabEl) {
            tabEl.currentPage = 1;
            tabRenderProducts(tabEl);

            if (tabEl.activeIndex >= 0) {
                var searchVal = inputEl.value.toLowerCase();
                var pkg = tabEl.productsData[tabEl.activeIndex];
                if (pkg && searchVal && pkg.name.toLowerCase().indexOf(searchVal) === -1 && pkg.price.toLowerCase().indexOf(searchVal) === -1) {
                    tabEl.querySelector('.tab-detail-empty').style.display = 'flex';
                    tabEl.querySelector('.tab-detail-form').style.display = 'none';
                } else {
                    var filteredIdx = tabEl.productsData.map(function (p, i) {
                        return { p: p, i: i };
                    }).filter(function (item) {
                        return !searchVal || item.p.name.toLowerCase().indexOf(searchVal) > -1 || item.p.price.toLowerCase().indexOf(searchVal) > -1;
                    }).findIndex(function (item) {
                        return item.i === tabEl.activeIndex;
                    });
                    if (filteredIdx >= 0) {
                        tabEl.currentPage = Math.ceil((filteredIdx + 1) / tabProductsPerPage) || 1;
                        tabRenderProducts(tabEl);
                        tabSelectProduct(tabEl.activeIndex, tabEl.querySelector('.tab-nav-list'));
                    }
                }
            }
        }
    }

    function tabSyncHiddenDom(tabEl) {
        var container = tabEl.querySelector('.inet-tab-hidden-cards-container');
        if (!container) return;

        container.innerHTML = '';

        tabEl.productsData.forEach(function (pkg, i) {
            var card = document.createElement('div');
            card.className = 'inet-product-card';
            card.style.display = 'none';

            var highlightChecked = pkg.highlight ? 'checked' : '';

            var html = '';
            if (tabEl.type === 'inet') {
                html = '<div class="inet-product-card-header">'
                    + '<span class="inet-product-card-idx">Gói ' + (i + 1) + '</span>'
                    + '<span class="inet-product-card-title">' + pkg.name + '</span>'
                    + '<span class="inet-product-card-price-summary"> - ' + pkg.price + ' VNĐ/tháng</span>'
                    + '<input type="checkbox" ' + highlightChecked + '>'
                    + '</div>'
                    + '<div class="inet-product-card-body">'
                    + '<input type="text" value="' + pkg.banner + '">'
                    + '<input type="text" class="inet-product-name-input" value="' + pkg.name + '">'
                    + '<input type="text" class="inet-product-price-input" value="' + pkg.price + '">'
                    + '<input type="text" value="' + pkg.download + '">'
                    + '<input type="text" value="' + pkg.upload + '">'
                    + '<input type="text" value="' + pkg.badge + '">'
                    + '<textarea>' + pkg.features + '</textarea>'
                    + '<input type="text" value="' + pkg.ctaSubText + '">'
                    + '<input type="text" value="' + pkg.ctaSubUrl + '">'
                    + '<input type="text" value="' + pkg.ctaMainText + '">'
                    + '<input type="text" value="' + pkg.ctaMainUrl + '">'
                    + '</div>';
            } else {
                // lead
                html = '<div class="inet-product-card-header">'
                    + '<span class="inet-product-card-title">' + pkg.name + '</span>'
                    + '<input type="checkbox" ' + highlightChecked + '>'
                    + '</div>'
                    + '<div class="inet-product-card-body">'
                    + '<input type="text" class="inet-product-name-input" value="' + pkg.name + '">'
                    + '<input type="text" value="' + pkg.price + '">'
                    + '<input type="text" value="' + pkg.download + '">'
                    + '<input type="text" value="' + pkg.upload + '">'
                    + '<input type="text" value="' + pkg.badge + '">'
                    + '<textarea>' + pkg.features + '</textarea>'
                    + '<input type="text" value="' + pkg.ctaSubText + '">'
                    + '<input type="text" value="' + pkg.ctaSubUrl + '">'
                    + '<input type="text" value="' + pkg.ctaMainText + '">'
                    + '<input type="text" value="' + pkg.ctaMainUrl + '">'
                    + '</div>';
            }

            card.innerHTML = html;
            container.appendChild(card);
        });
    }

    function inetInitAllTabs() {
        var section = document.getElementById('ldpsec-inet-products');
        if (!section) return;

        var tabs = section.querySelectorAll('div[style*="border-radius:10px"]');
        tabs.forEach(function (tab) {
            tabInit(tab, 'inet');
        });
    }

    function leadInitAllTabs() {
        var section = document.getElementById('ldpsec-lead-pricing');
        if (!section) return;

        var tabs = section.querySelectorAll('div[style*="border-radius:10px"]');
        tabs.forEach(function (tab) {
            tabInit(tab, 'lead');
        });
    }

    function ldpAddProductTab(btnEl) {
        var container = btnEl.parentElement;
        if (!container) return;
        var tabs = container.querySelectorAll('div[style*="border-radius:10px"]');
        var idx = tabs.length + 1;

        var borderColor = 'rgba(16,185,129,0.4)';
        var bgColor = 'rgba(16,185,129,0.1)';
        var textColor = '#34d399';
        var slug = 'tab-moi-' + idx;
        var name = 'Tab mới ' + idx;

        if (idx % 3 === 1) {
            borderColor = 'rgba(16,185,129,0.4)';
            bgColor = 'rgba(16,185,129,0.1)';
            textColor = '#34d399';
        } else if (idx % 3 === 2) {
            borderColor = 'rgba(245,158,11,0.4)';
            bgColor = 'rgba(245,158,11,0.1)';
            textColor = '#fbbf24';
        } else {
            borderColor = 'rgba(244,63,94,0.4)';
            bgColor = 'rgba(244,63,94,0.1)';
            textColor = '#fb7185';
        }

        var tabDiv = document.createElement('div');
        tabDiv.style.cssText = 'border:2px solid ' + borderColor + '; border-radius:10px; margin-bottom:14px; overflow:hidden;';

        var sectionId = btnEl.closest('.ldp-sec-form') ? btnEl.closest('.ldp-sec-form').id : '';
        var type = sectionId === 'ldpsec-lead-pricing' ? 'lead' : 'inet';

        var html = '<div style="background:' + bgColor + '; padding:10px 14px; display:flex; align-items:center; gap:10px; flex-wrap:wrap;">'
            + '<span style="font-weight:700; font-size:13px; color:' + textColor + '; flex:1;">Tab: ' + name + '</span>'
            + '<input type="text" class="form-input" value="' + slug + '" placeholder="slug" style="width:120px; font-size:11px; padding:3px 6px;">'
            + '<label style="font-size:11px; display:flex; align-items:center; gap:4px;"><input type="checkbox" style="accent-color:var(--success);"> Mặc định</label>'
            + '<button class="btn btn-secondary btn-sm" style="font-size:10px; padding:2px 7px; color:var(--danger); border-color:var(--danger);" onclick="this.closest(\'div\').parentElement.remove()">Xóa tab</button>'
            + '</div>';

        tabDiv.innerHTML = html;
        container.insertBefore(tabDiv, btnEl);

        tabInit(tabDiv, type);
        tabAddProduct(tabDiv);
    }

    function ldpAddProductCard(btnEl) {
        // Để tương thích ngược nếu còn chỗ nào gọi trực tiếp ldpAddProductCard(btnEl) mà chưa được nâng cấp
        var tabEl = btnEl.closest('div[style*="border-radius:10px"]');
        if (tabEl) {
            if (tabEl.dataset.initialized === 'true') {
                tabAddProduct(tabEl);
            } else {
                var sectionId = btnEl.closest('.ldp-sec-form') ? btnEl.closest('.ldp-sec-form').id : '';
                var type = sectionId === 'ldpsec-lead-pricing' ? 'lead' : 'inet';
                tabInit(tabEl, type);
                tabAddProduct(tabEl);
            }
        }
    }

    function campAddCompareRow() {
        var container = document.getElementById('camp-compare-list');
        if (!container) return;
        var row = document.createElement('div');
        row.className = 'camp-compare-row';
        row.style.cssText = 'display:grid; grid-template-columns:1.5fr 1fr 1fr 1fr 1fr 30px; gap:8px; align-items:center;';
        row.innerHTML = '<input type="text" class="form-input form-input-sm compare-feature" placeholder="Tính năng" style="font-size:12px; padding:6px 8px;">'
            + '<input type="text" class="form-input form-input-sm compare-wf7" placeholder="Wi-Fi 7" style="font-size:12px; padding:6px 8px; font-weight:600; color:var(--primary);">'
            + '<input type="text" class="form-input form-input-sm compare-wf6e" placeholder="Wi-Fi 6E" style="font-size:12px; padding:6px 8px;">'
            + '<input type="text" class="form-input form-input-sm compare-wf6" placeholder="Wi-Fi 6" style="font-size:12px; padding:6px 8px;">'
            + '<input type="text" class="form-input form-input-sm compare-wf5" placeholder="Wi-Fi 5" style="font-size:12px; padding:6px 8px;">'
            + '<button class="btn btn-secondary btn-sm" style="color:var(--danger); border-color:transparent; background:transparent; padding:4px;" onclick="this.closest(\'.camp-compare-row\').remove()">✕</button>';
        container.appendChild(row);
    }

    function campAddVideoCard() {
        var container = document.getElementById('camp-videos-list');
        if (!container) return;
        var idx = container.querySelectorAll('.inet-product-card').length + 1;
        var card = document.createElement('div');
        card.className = 'inet-product-card';
        card.style.cssText = 'border:1px solid var(--border); border-radius:8px; background:var(--bg-secondary); overflow:hidden;';
        card.innerHTML = '<div class="inet-product-card-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; background:rgba(255,255,255,0.03); cursor:pointer;" onclick="ldpToggleProductCard(this)">'
            + '<div style="display:flex; align-items:center; gap:8px; flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">'
            + '<span style="font-weight:600; font-size:13px; color:#fff;" class="inet-product-card-title">Video mới ' + idx + '</span>'
            + '</div>'
            + '<div style="display:flex; align-items:center; gap:12px;" onclick="event.stopPropagation()">'
            + '<button class="btn btn-secondary btn-sm" style="color:var(--danger); border-color:transparent; background:transparent; padding:4px 8px; font-size:12px;" onclick="this.closest(\'.inet-product-card\').remove()">Xóa</button>'
            + '<span class="arrow-indicator" style="color:var(--text-muted); font-size:12px;">▼</span>'
            + '</div>'
            + '</div>'
            + '<div class="inet-product-card-body" style="padding:12px; border-top:1px solid rgba(255,255,255,0.06); display:block;">'
            + '<div class="form-group" style="margin-bottom:8px;">'
            + '<label style="font-size:11px;">Ảnh thumbnail</label>'
            + '<div style="display:flex; gap:6px;">'
            + '<input type="text" class="form-input" placeholder="URL ảnh thumbnail" style="flex:1;">'
            + '<button class="btn btn-secondary btn-sm" style="font-size:10px; padding:2px 6px;">Upload</button>'
            + '</div>'
            + '</div>'
            + '<div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">'
            + '<div class="form-group" style="margin-bottom:0;"><label style="font-size:11px;">Tiêu đề video</label><input type="text" class="form-input inet-product-name-input" placeholder="Nhập tiêu đề video" oninput="ldpUpdateProductCardHeader(this)"></div>'
            + '<div class="form-group" style="margin-bottom:0;"><label style="font-size:11px;">URL Video</label><input type="text" class="form-input" placeholder="https://..."></div>'
            + '</div>'
            + '</div>';
        container.appendChild(card);
    }

    function leadAddVideoCard() {
        var container = document.getElementById('lead-videos-list');
        if (!container) return;
        var idx = container.querySelectorAll('.inet-product-card').length + 1;
        var card = document.createElement('div');
        card.className = 'inet-product-card';
        card.style.cssText = 'border:1px solid var(--border); border-radius:8px; background:var(--bg-secondary); overflow:hidden;';
        card.innerHTML = '<div class="inet-product-card-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; background:rgba(255,255,255,0.03); cursor:pointer;" onclick="ldpToggleProductCard(this)">'
            + '<div style="display:flex; align-items:center; gap:8px; flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">'
            + '<span style="font-weight:600; font-size:13px; color:#fff;" class="inet-product-card-title">Video mới ' + idx + '</span>'
            + '</div>'
            + '<div style="display:flex; align-items:center; gap:12px;" onclick="event.stopPropagation()">'
            + '<button class="btn btn-secondary btn-sm" style="color:var(--danger); border-color:transparent; background:transparent; padding:4px 8px; font-size:12px;" onclick="this.closest(\'.inet-product-card\').remove()">Xóa</button>'
            + '<span class="arrow-indicator" style="color:var(--text-muted); font-size:12px;">▼</span>'
            + '</div>'
            + '</div>'
            + '<div class="inet-product-card-body" style="padding:12px; border-top:1px solid rgba(255,255,255,0.06); display:block;">'
            + '<div class="form-group" style="margin-bottom:8px;">'
            + '<label style="font-size:11px;">Ảnh thumbnail</label>'
            + '<div style="display:flex; gap:6px;">'
            + '<input type="text" class="form-input" placeholder="URL ảnh thumbnail" style="flex:1;">'
            + '<button class="btn btn-secondary btn-sm" style="font-size:10px; padding:2px 6px;">Upload</button>'
            + '</div>'
            + '</div>'
            + '<div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">'
            + '<div class="form-group" style="margin-bottom:0;"><label style="font-size:11px;">Tiêu đề video</label><input type="text" class="form-input inet-product-name-input" placeholder="Nhập tiêu đề video" oninput="ldpUpdateProductCardHeader(this)"></div>'
            + '<div class="form-group" style="margin-bottom:0;"><label style="font-size:11px;">URL Video</label><input type="text" class="form-input" placeholder="https://..."></div>'
            + '</div>'
            + '</div>';
        container.appendChild(card);
    }

    function inetAddVideoCard() {
        var container = document.getElementById('inet-review-list');
        if (!container) return;
        var idx = container.querySelectorAll('.inet-product-card').length + 1;
        var card = document.createElement('div');
        card.className = 'inet-product-card';
        card.style.cssText = 'border:1px solid var(--border-glass); border-radius:8px; background:var(--bg-secondary); overflow:hidden;';
        card.innerHTML = '<div class="inet-product-card-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; background:rgba(255,255,255,0.03); cursor:pointer;" onclick="ldpToggleProductCard(this)">'
            + '<div style="display:flex; align-items:center; gap:8px; flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">'
            + '<span class="video-preview-thumb" style="width:24px; height:16px; border-radius:2px; background:rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; overflow:hidden; border:1px solid rgba(255,255,255,0.15);">'
            + '<span style="color:var(--text-muted); font-size:8px;">▶</span>'
            + '</span>'
            + '<span style="font-weight:600; font-size:13px; color:#fff;" class="inet-product-card-title">Video mới ' + idx + '</span>'
            + '</div>'
            + '<div style="display:flex; align-items:center; gap:8px;" onclick="event.stopPropagation()">'
            + '<span onclick="ldpMoveCard(this, -1)" title="Di chuyển lên" style="cursor:pointer; font-size:12px; color:var(--text-muted); padding:4px;">▲</span>'
            + '<span onclick="ldpMoveCard(this, 1)" title="Di chuyển xuống" style="cursor:pointer; font-size:12px; color:var(--text-muted); padding:4px;">▼</span>'
            + '<button class="btn btn-secondary btn-sm" style="color:var(--danger); border-color:transparent; background:transparent; padding:4px 8px; font-size:12px;" onclick="this.closest(\'.inet-product-card\').remove()">Xóa</button>'
            + '<span class="arrow-indicator" style="color:var(--text-muted); font-size:12px;">▼</span>'
            + '</div>'
            + '</div>'
            + '<div class="inet-product-card-body" style="padding:12px; border-top:1px solid rgba(255,255,255,0.06); display:block;">'
            + '<div class="form-group" style="margin-bottom:8px;">'
            + '<label style="font-size:11px;">Thumbnail (ảnh đại diện)</label>'
            + '<div style="display:flex; gap:6px;">'
            + '<input type="text" class="form-input video-thumbnail-input" placeholder="URL ảnh" style="flex:1;" oninput="ldpUpdateVideoThumbnail(this)">'
            + '<button class="btn btn-secondary btn-sm" style="font-size:10px; padding:2px 6px;">Upload</button>'
            + '</div>'
            + '</div>'
            + '<div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">'
            + '<div class="form-group" style="margin-bottom:0;"><label style="font-size:11px;">Link YouTube</label><input type="text" class="form-input" placeholder="https://youtube.com/..."></div>'
            + '<div class="form-group" style="margin-bottom:0;"><label style="font-size:11px;">Mô tả ngắn</label><input type="text" class="form-input inet-product-name-input" placeholder="Nhập mô tả ngắn" oninput="ldpUpdateProductCardHeader(this)"></div>'
            + '</div>'
            + '</div>';
        container.appendChild(card);
    }

    function ldpMoveCard(btnEl, direction) {
        var card = btnEl.closest('.inet-product-card');
        if (!card) return;
        var container = card.parentElement;
        if (direction === -1) {
            var prev = card.previousElementSibling;
            if (prev && prev.classList.contains('inet-product-card')) {
                container.insertBefore(card, prev);
            }
        } else if (direction === 1) {
            var next = card.nextElementSibling;
            if (next && next.classList.contains('inet-product-card')) {
                container.insertBefore(next, card);
            }
        }
    }

    function ldpUpdateVideoThumbnail(inputEl) {
        var card = inputEl.closest('.inet-product-card');
        if (!card) return;
        var previewEl = card.querySelector('.video-preview-thumb');
        if (!previewEl) return;
        var url = inputEl.value.trim();
        if (url) {
            previewEl.innerHTML = '<img src="' + url + '" style="width:100%; height:100%; object-fit:cover;">';
        } else {
            previewEl.innerHTML = '<span style="color:var(--text-muted); font-size:8px;">▶</span>';
        }
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
            + '<div class="form-group"><label>Tên gói <span style="color:var(--danger)">*</span></label><input type="text" class="form-input pricing-name-input" placeholder="vd: V.VIP2" oninput="ldpUpdatePricingCardHeader(this)"></div>'
            + '<div class="form-group"><label>Badge nhãn (vd: Gói phổ biến nhất ✨)</label><input type="text" class="form-input pricing-badge-input" placeholder="Để trống nếu không có"></div>'
            + '<div class="form-group" style="grid-column: 1/-1;"><label>Ảnh logo gói (vd: V.VIP2)</label>'
            + '<div class="media-upload-wrapper" style="display:flex; gap:8px; align-items:center; width:100%;">'
            + '<input type="text" class="form-input media-url pricing-logo-input" placeholder="URL ảnh logo gói" style="flex:1;">'
            + '<input type="file" class="media-file-input" style="display:none;" accept="image/*" onchange="ldpHandleFileUpload(this)">'
            + '<button class="btn btn-secondary btn-sm" onclick="this.previousElementSibling.click()">Upload</button></div></div>'
            + '<div class="form-group"><label>Giá hiển thị</label><input type="text" class="form-input pricing-price-input" placeholder="vd: 150.000đ" oninput="ldpUpdatePricingCardHeader(this)"></div>'
            + '<div class="form-group"><label>Chu kỳ</label><input type="text" class="form-input pricing-cycle-input" value="/tháng" oninput="ldpUpdatePricingCardHeader(this)"></div>'
            + '<div class="form-group"><label>Chu kỳ phụ / Khuyến mãi</label><input type="text" class="form-input pricing-subcycle-input" placeholder="vd: Mua 3 tháng còn 133k/ tháng"></div>'
            + '<div class="form-group"><label>Thứ tự vị trí</label><input type="number" class="form-input pricing-position-input" value="' + idx + '" min="1" style="width:80px;"></div>'
            + '<div class="form-group" style="grid-column:1/-1; margin-bottom: 0;">'
            + '<label style="font-weight: 600; color: var(--primary);">Giá trị so sánh (tương ứng với các tiêu chí bên trái)</label>'
            + '<div class="pricing-features-values-container" style="display: flex; flex-direction: column; gap: 8px; margin-top: 8px;"></div></div>'
            + '<textarea class="form-textarea pricing-features-input" style="display:none;"></textarea>'
            + '<div class="form-group"><label>Nút CTA chính — Text</label><input type="text" class="form-input pricing-cta-text-input" value="Đăng ký ngay"></div>'
            + '<div class="form-group"><label>Nút CTA chính — URL</label><input type="text" class="form-input pricing-cta-url-input" placeholder="/dang-ky-..."></div>'
            + '</div>'
            + '<div style="display:flex; justify-content:flex-end; gap:8px; margin-top:10px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.06);">'
            + '<label style="display:flex; align-items:center; gap:6px; font-size:12px; cursor:pointer;"><input type="checkbox" class="pricing-show-checkbox" checked style="accent-color:var(--success);"> Hiển thị gói này</label>'
            + '<button class="btn btn-secondary btn-sm" style="color:var(--danger); border-color:rgba(239,68,68,0.3);" onclick="this.closest(\'.pricing-card-item\').remove()">🗑 Xoá gói</button>'
            + '</div></div>';
        list.appendChild(card);
        if (typeof ldpUpdatePricingFeaturesInputs === 'function') {
            ldpUpdatePricingFeaturesInputs(card);
        }
    }

    function ldpUpdatePricingFeaturesInputs(cardItem) {
        var container = cardItem.querySelector('.pricing-features-values-container');
        var hiddenTextarea = cardItem.querySelector('.pricing-features-input');
        var featuresListTextarea = document.getElementById('sa-pricing-features-list');

        if (!container || !hiddenTextarea || !featuresListTextarea) return;

        var features = featuresListTextarea.value.split('\n').map(function (f) {
            return f.trim();
        }).filter(function (f) {
            return f !== '';
        });

        var currentValuesMap = {};
        var lines = hiddenTextarea.value.split('\n');
        lines.forEach(function (line) {
            var parts = line.split('|');
            if (parts.length >= 2) {
                var featureName = parts[0].trim();
                var val = parts.slice(1).join('|').trim();
                currentValuesMap[featureName] = val;
            }
        });

        var html = '';
        features.forEach(function (feature, index) {
            var val = currentValuesMap[feature] || '';
            if (val === '') {
                if (lines[index]) {
                    var parts = lines[index].split('|');
                    if (parts.length >= 2) {
                        val = parts.slice(1).join('|').trim();
                    } else if (lines[index].trim() !== '') {
                        val = lines[index].trim();
                    }
                }
            }

            html += '<div class="form-group" style="margin-bottom:8px; display:flex; align-items:center; gap:8px;">'
                + '<span style="font-size:12px; color:var(--text-muted); width:150px; font-weight:500; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;" title="' + feature + '">' + feature + '</span>'
                + '<input type="text" class="form-input pricing-feature-value-input" data-feature="' + feature + '" value="' + val + '" oninput="ldpSavePricingFeatures(this)" placeholder="Nhập giá trị (vd: check, TV...)" style="flex:1;">'
                + '</div>';
        });

        container.innerHTML = html;

        var compositeValue = '';
        var inputEls = container.querySelectorAll('.pricing-feature-value-input');
        inputEls.forEach(function (input) {
            var fName = input.getAttribute('data-feature');
            var fVal = input.value.trim();
            compositeValue += fName + ' | ' + fVal + '\n';
        });
        hiddenTextarea.value = compositeValue.trim();
    }

    function ldpSavePricingFeatures(inputEl) {
        var cardItem = inputEl.closest('.pricing-card-item');
        if (!cardItem) return;

        var hiddenTextarea = cardItem.querySelector('.pricing-features-input');
        var container = cardItem.querySelector('.pricing-features-values-container');
        if (!hiddenTextarea || !container) return;

        var compositeValue = '';
        var inputEls = container.querySelectorAll('.pricing-feature-value-input');
        inputEls.forEach(function (input) {
            var fName = input.getAttribute('data-feature');
            var fVal = input.value.trim();
            compositeValue += fName + ' | ' + fVal + '\n';
        });
        hiddenTextarea.value = compositeValue.trim();
    }

    function ldpUpdateAllPricingFeatures() {
        var cards = document.querySelectorAll('#sa-pricing-list .pricing-card-item');
        cards.forEach(function (card) {
            ldpUpdatePricingFeaturesInputs(card);
        });
    }

    var camSelectData = [];
    var camActiveSelectIndex = -1;
    var camProductsPerPage = 10;
    var camCurrentPage = 1;

    function camInitSelect() {
        if (camSelectData.length > 0) {
            camRenderSelectList();
            return;
        }

        var defaultCombos = [
            {
                show: true,
                name: '3 Camera Ngoài trời',
                badge: 'COMBO',
                image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1',
                price: '999.999đ',
                originalPrice: '1.200.000đ',
                discount: '-16%',
                promo: 'Ưu đãi 1 TRIỆU 3 CAM',
                ctaText: 'Mua ngay',
                ctaUrl: '#',
                desc: 'Phù hợp nhà có nhiều mặt tiếp cận, biệt thự mini, cơ sở kinh doanh'
            },
            {
                show: true,
                name: '3 camera trong nhà',
                badge: 'COMBO',
                image: 'https://images.unsplash.com/photo-1557318041-1ce374d55ebf',
                price: '999.999đ',
                originalPrice: '1.200.000đ',
                discount: '-16%',
                promo: 'Ưu đãi 1 TRIỆU 3 CAM',
                ctaText: 'Mua ngay',
                ctaUrl: '#',
                desc: 'Phù hợp nhà nhiều tầng/phòng, có trẻ nhỏ và người già cần quan sát'
            },
            {
                show: true,
                name: '1 trong - 2 ngoài',
                badge: 'COMBO',
                image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
                price: '999.999đ',
                originalPrice: '1.200.000đ',
                discount: '-16%',
                promo: 'Ưu đãi 1 TRIỆU 3 CAM',
                ctaText: 'Mua ngay',
                ctaUrl: '#',
                desc: 'Phù hợp giám sát chính bao quát bên ngoài, quan sát cơ bản bên trong.'
            }
        ];

        camSelectData = defaultCombos;

        var pdhOptsContainer = document.getElementById('cam-pdh-list-options');
        if (pdhOptsContainer) {
            var html = '';
            pdhPackagesMock.forEach(function (pkg, index) {
                html += '<div onclick="camSyncPdhPackage(' + index + ')" style="padding: 6px 8px; font-size: 11px; cursor: pointer; color: #fff; border-radius: 4px; transition: background 0.15s;" class="pdh-dropdown-item">'
                    + '<div style="font-weight: 700; color: var(--warning);">' + pkg.code + '</div>'
                    + '<div style="font-size: 10px; color: var(--text-muted); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">' + pkg.name + ' - ' + pkg.price + 'đ</div>'
                    + '</div>';
            });
            pdhOptsContainer.innerHTML = html;

            var style = document.createElement('style');
            style.innerHTML = '.pdh-dropdown-item:hover { background: rgba(255,255,255,0.08) !important; } .cam-product-list-item:hover { background: rgba(255,255,255,0.06) !important; } .cam-product-list-item.active { background: rgba(249,115,22,0.15) !important; border-color: var(--primary) !important; }';
            document.head.appendChild(style);
        }

        camRenderSelectList();
    }

    function camRenderSelectList() {
        var container = document.getElementById('cam-products-nav-list');
        if (!container) return;

        var searchVal = document.getElementById('cam-product-search') ? document.getElementById('cam-product-search').value.toLowerCase() : '';

        var filtered = camSelectData.map(function (combo, idx) {
            return { combo: combo, originalIdx: idx };
        }).filter(function (item) {
            return !searchVal || item.combo.name.toLowerCase().indexOf(searchVal) > -1 || item.combo.price.toLowerCase().indexOf(searchVal) > -1;
        });

        var totalPages = Math.ceil(filtered.length / camProductsPerPage) || 1;
        if (camCurrentPage > totalPages) camCurrentPage = totalPages;
        if (camCurrentPage < 1) camCurrentPage = 1;

        var start = (camCurrentPage - 1) * camProductsPerPage;
        var end = start + camProductsPerPage;
        var pageItems = filtered.slice(start, end);

        var html = '';
        pageItems.forEach(function (item) {
            var combo = item.combo;
            var idx = item.originalIdx;
            var activeClass = idx === camActiveSelectIndex ? 'active' : '';
            var showChecked = combo.show ? 'checked' : '';
            var displayIdx = idx + 1;

            html += '<div class="cam-product-list-item ' + activeClass + '" style="display: flex; align-items: center; justify-content: space-between; padding: 8px 10px; background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 6px; cursor: pointer; transition: all 0.2s;" onclick="camSelectProduct(' + idx + ')">'
                + '<div style="display: flex; align-items: center; gap: 8px; flex: 1; overflow: hidden;">'
                + '<span style="font-size: 11px; font-weight: 700; color: var(--primary); min-width: 45px;">Combo ' + displayIdx + '</span>'
                + '<span style="font-size: 12px; color: #fff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 500;" class="item-title">' + combo.name + '</span>'
                + '</div>'
                + '<div style="display: flex; align-items: center; gap: 6px;" onclick="event.stopPropagation()">'
                + '<input type="checkbox" ' + showChecked + ' onchange="camToggleShow(' + idx + ', this)" title="Hiển thị" style="accent-color: var(--success); cursor: pointer; width: 13px; height: 13px; margin: 0;">'
                + '<span onclick="camMoveProduct(' + idx + ', -1)" title="Di chuyển lên" style="cursor: pointer; font-size: 10px; color: var(--text-muted); padding: 2px;">▲</span>'
                + '<span onclick="camMoveProduct(' + idx + ', 1)" title="Di chuyển xuống" style="cursor: pointer; font-size: 10px; color: var(--text-muted); padding: 2px;">▼</span>'
                + '<span onclick="camDeleteProduct(' + idx + ')" title="Xóa combo" style="cursor: pointer; font-size: 12px; color: var(--danger); font-weight: bold; padding: 2px 4px; margin-left: 2px;">✕</span>'
                + '</div>'
                + '</div>';
        });

        if (filtered.length === 0) {
            html = '<div style="text-align: center; color: var(--text-muted); font-size: 12px; padding: 20px 0;">Không tìm thấy combo nào</div>';
        }

        container.innerHTML = html;

        camRenderPagination(filtered.length, totalPages);
        camSyncHiddenDom();
    }

    function camRenderPagination(totalItems, totalPages) {
        var pagContainer = document.getElementById('cam-products-pagination');
        if (!pagContainer) return;

        if (totalItems <= camProductsPerPage) {
            pagContainer.style.display = 'none';
            return;
        }

        pagContainer.style.display = 'flex';
        var prevDisabled = camCurrentPage === 1 ? 'disabled style="opacity: 0.3; cursor: not-allowed;"' : '';
        var nextDisabled = camCurrentPage === totalPages ? 'disabled style="opacity: 0.3; cursor: not-allowed;"' : '';

        var html = '<button class="btn btn-secondary btn-sm" onclick="camPrevPage()" ' + prevDisabled + ' style="padding: 2px 8px; font-size: 10px; font-weight: bold; border-radius: 4px;">◀</button>'
            + '<span style="font-size: 11px; color: var(--text-muted); font-weight: 500;">Trang ' + camCurrentPage + ' / ' + totalPages + '</span>'
            + '<button class="btn btn-secondary btn-sm" onclick="camNextPage()" ' + nextDisabled + ' style="padding: 2px 8px; font-size: 10px; font-weight: bold; border-radius: 4px;">▶</button>';

        pagContainer.innerHTML = html;
    }

    function camPrevPage() {
        if (camCurrentPage > 1) {
            camCurrentPage--;
            camRenderSelectList();
        }
    }

    function camNextPage() {
        var searchVal = document.getElementById('cam-product-search') ? document.getElementById('cam-product-search').value.toLowerCase() : '';
        var filteredCount = camSelectData.filter(function (combo) {
            return !searchVal || combo.name.toLowerCase().indexOf(searchVal) > -1 || combo.price.toLowerCase().indexOf(searchVal) > -1;
        }).length;
        var totalPages = Math.ceil(filteredCount / camProductsPerPage) || 1;
        if (camCurrentPage < totalPages) {
            camCurrentPage++;
            camRenderSelectList();
        }
    }

    function camSelectProduct(idx) {
        camActiveSelectIndex = idx;

        var items = document.querySelectorAll('#cam-products-nav-list .cam-product-list-item');
        items.forEach(function (item) {
            item.classList.remove('active');
        });

        var clickedItem = Array.from(document.querySelectorAll('#cam-products-nav-list .cam-product-list-item')).find(function (item) {
            return item.getAttribute('onclick') && item.getAttribute('onclick').indexOf('camSelectProduct(' + idx + ')') > -1;
        });
        if (clickedItem) clickedItem.classList.add('active');

        var combo = camSelectData[idx];
        if (!combo) return;

        document.getElementById('cam-product-detail-empty').style.display = 'none';
        document.getElementById('cam-product-detail-form').style.display = 'block';

        document.getElementById('cam-edit-idx').value = idx;
        document.getElementById('cam-edit-header-title').textContent = combo.name || 'Combo mới';
        document.getElementById('cam-edit-show').checked = combo.show;
        document.getElementById('cam-edit-name').value = combo.name || '';
        document.getElementById('cam-edit-badge').value = combo.badge || '';
        document.getElementById('cam-edit-image').value = combo.image || '';
        document.getElementById('cam-edit-price').value = combo.price || '';
        document.getElementById('cam-edit-originalprice').value = combo.originalPrice || '';
        document.getElementById('cam-edit-discount').value = combo.discount || '';
        document.getElementById('cam-edit-promo').value = combo.promo || '';
        document.getElementById('cam-edit-cta-text').value = combo.ctaText || 'Mua ngay';
        document.getElementById('cam-edit-cta-url').value = combo.ctaUrl || '';
        document.getElementById('cam-edit-desc').value = combo.desc || '';
    }

    function camSaveDetailField(fieldName) {
        var idx = parseInt(document.getElementById('cam-edit-idx').value);
        if (isNaN(idx) || idx < 0 || idx >= camSelectData.length) return;

        var combo = camSelectData[idx];
        if (!combo) return;

        if (fieldName === 'show') combo.show = document.getElementById('cam-edit-show').checked;
        else if (fieldName === 'name') {
            combo.name = document.getElementById('cam-edit-name').value;
            document.getElementById('cam-edit-header-title').textContent = combo.name || 'Combo mới';
            var items = document.querySelectorAll('#cam-products-nav-list .cam-product-list-item');
            var clickedItem = Array.from(items).find(function (item) {
                return item.getAttribute('onclick') && item.getAttribute('onclick').indexOf('camSelectProduct(' + idx + ')') > -1;
            });
            if (clickedItem) {
                var titleSpan = clickedItem.querySelector('.item-title');
                if (titleSpan) titleSpan.textContent = combo.name || 'Combo chưa đặt tên';
            }
        }
        else if (fieldName === 'badge') combo.badge = document.getElementById('cam-edit-badge').value;
        else if (fieldName === 'image') combo.image = document.getElementById('cam-edit-image').value;
        else if (fieldName === 'price') combo.price = document.getElementById('cam-edit-price').value;
        else if (fieldName === 'originalPrice') combo.originalPrice = document.getElementById('cam-edit-originalprice').value;
        else if (fieldName === 'discount') combo.discount = document.getElementById('cam-edit-discount').value;
        else if (fieldName === 'promo') combo.promo = document.getElementById('cam-edit-promo').value;
        else if (fieldName === 'ctaText') combo.ctaText = document.getElementById('cam-edit-cta-text').value;
        else if (fieldName === 'ctaUrl') combo.ctaUrl = document.getElementById('cam-edit-cta-url').value;
        else if (fieldName === 'desc') combo.desc = document.getElementById('cam-edit-desc').value;

        camSyncHiddenDom();
    }

    function camAddSelectCardGóiMới() {
        var idx = camSelectData.length;
        camSelectData.push({
            show: true,
            name: 'Combo mới ' + (idx + 1),
            badge: 'COMBO',
            image: '',
            price: '1.000.000đ',
            originalPrice: '1.200.000đ',
            discount: '-16%',
            promo: 'Ưu đãi hấp dẫn',
            ctaText: 'Mua ngay',
            ctaUrl: '#',
            desc: 'Mô tả chi tiết combo mới...'
        });
        camCurrentPage = Math.ceil(camSelectData.length / camProductsPerPage) || 1;
        camRenderSelectList();
        camSelectProduct(idx);
    }

    function camToggleShow(idx, checkbox) {
        if (camSelectData[idx]) {
            camSelectData[idx].show = checkbox.checked;
            if (idx === camActiveSelectIndex) {
                document.getElementById('cam-edit-show').checked = checkbox.checked;
            }
            camSyncHiddenDom();
        }
    }

    function camMoveProduct(idx, direction) {
        var targetIdx = idx + direction;
        if (targetIdx < 0 || targetIdx >= camSelectData.length) return;

        var temp = camSelectData[idx];
        camSelectData[idx] = camSelectData[targetIdx];
        camSelectData[targetIdx] = temp;

        if (camActiveSelectIndex === idx) {
            camActiveSelectIndex = targetIdx;
        } else if (camActiveSelectIndex === targetIdx) {
            camActiveSelectIndex = idx;
        }

        camCurrentPage = Math.ceil((camActiveSelectIndex + 1) / camProductsPerPage) || 1;
        camRenderSelectList();
        if (camActiveSelectIndex >= 0) {
            camSelectProduct(camActiveSelectIndex);
        }
    }

    function camDeleteProduct(idx) {
        camSelectData.splice(idx, 1);
        if (camActiveSelectIndex === idx) {
            camActiveSelectIndex = -1;
            document.getElementById('cam-product-detail-empty').style.display = 'flex';
            document.getElementById('cam-product-detail-form').style.display = 'none';
        } else if (camActiveSelectIndex > idx) {
            camActiveSelectIndex--;
        }

        var totalPages = Math.ceil(camSelectData.length / camProductsPerPage) || 1;
        if (camCurrentPage > totalPages) {
            camCurrentPage = totalPages;
        }

        camRenderSelectList();
        if (camActiveSelectIndex >= 0) {
            camSelectProduct(camActiveSelectIndex);
        }
    }

    function camDeleteActiveProduct() {
        var idx = parseInt(document.getElementById('cam-edit-idx').value);
        if (!isNaN(idx) && idx >= 0) {
            camDeleteProduct(idx);
        }
    }

    function camTogglePdhDropdown() {
        var dropdown = document.getElementById('cam-pdh-dropdown');
        if (dropdown) {
            var isHidden = dropdown.style.display === 'none';
            dropdown.style.display = isHidden ? 'block' : 'none';
        }
    }

    function camSyncPdhPackage(pdhIndex) {
        var pkgMock = pdhPackagesMock[pdhIndex];
        if (!pkgMock) return;

        var idx = camSelectData.length;

        // Tính toán giá gốc mock = giá khuyến mãi * 1.2
        var cleanedPriceStr = pkgMock.price.replace(/\./g, '');
        var priceNum = parseInt(cleanedPriceStr) || 1000000;
        var origPriceNum = Math.round(priceNum * 1.2);

        // Format dạng e.g. 1.200.000đ
        var formatPrice = function (num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
        };

        camSelectData.push({
            show: true,
            name: pkgMock.name,
            badge: 'COMBO',
            image: pkgMock.banner || '',
            price: formatPrice(priceNum),
            originalPrice: formatPrice(origPriceNum),
            discount: '-16%',
            promo: 'Đồng bộ từ PDH',
            ctaText: 'Mua ngay',
            ctaUrl: '#',
            desc: pkgMock.features ? pkgMock.features.replace(/\n/g, ', ') : 'Mô tả chi tiết combo mới...'
        });

        var dropdown = document.getElementById('cam-pdh-dropdown');
        if (dropdown) dropdown.style.display = 'none';

        camCurrentPage = Math.ceil(camSelectData.length / camProductsPerPage) || 1;
        camRenderSelectList();
        camSelectProduct(idx);
    }

    function camFilterProducts() {
        camCurrentPage = 1;
        camRenderSelectList();
        if (camActiveSelectIndex >= 0) {
            var searchVal = document.getElementById('cam-product-search') ? document.getElementById('cam-product-search').value.toLowerCase() : '';
            var combo = camSelectData[camActiveSelectIndex];
            if (combo && searchVal && combo.name.toLowerCase().indexOf(searchVal) === -1 && combo.price.toLowerCase().indexOf(searchVal) === -1) {
                document.getElementById('cam-product-detail-empty').style.display = 'flex';
                document.getElementById('cam-product-detail-form').style.display = 'none';
            } else {
                var filteredIdx = camSelectData.map(function (p, i) {
                    return { p: p, i: i };
                }).filter(function (item) {
                    return !searchVal || item.p.name.toLowerCase().indexOf(searchVal) > -1 || item.p.price.toLowerCase().indexOf(searchVal) > -1;
                }).findIndex(function (item) {
                    return item.i === camActiveSelectIndex;
                });
                if (filteredIdx >= 0) {
                    camCurrentPage = Math.ceil((filteredIdx + 1) / camProductsPerPage) || 1;
                    camRenderSelectList();
                    camSelectProduct(camActiveSelectIndex);
                }
            }
        }
    }

    function camSyncHiddenDom() {
        var container = document.getElementById('cam-select-list');
        if (!container) return;

        container.innerHTML = '';

        camSelectData.forEach(function (combo, i) {
            var card = document.createElement('div');
            card.className = 'cam-select-card-item';
            card.style.display = 'none';

            var showChecked = combo.show ? 'checked' : '';

            var html = '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:8px;">'
                + '<span style="font-weight:700; color:var(--warning); font-size:14px;" class="cam-select-card-title">' + combo.name + '</span>'
                + '<div style="display:flex; gap:12px; align-items:center;">'
                + '<label style="display:flex; align-items:center; gap:6px; font-size:12px; cursor:pointer; margin:0;"><input type="checkbox" class="cam-select-show-checkbox" ' + showChecked + ' style="accent-color:var(--success);"> Hiển thị</label>'
                + '</div>'
                + '</div>'
                + '<div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">'
                + '<input type="text" class="cam-select-name-input" value="' + combo.name + '">'
                + '<input type="text" class="cam-select-badge-input" value="' + combo.badge + '">'
                + '<input type="text" class="cam-select-image-input" value="' + combo.image + '">'
                + '<input type="text" class="cam-select-price-input" value="' + combo.price + '">'
                + '<input type="text" class="cam-select-originalprice-input" value="' + combo.originalPrice + '">'
                + '<input type="text" class="cam-select-discount-input" value="' + combo.discount + '">'
                + '<input type="text" class="cam-select-promo-input" value="' + combo.promo + '">'
                + '<input type="text" class="cam-select-cta-text-input" value="' + combo.ctaText + '">'
                + '<input type="text" class="cam-select-cta-url-input" value="' + combo.ctaUrl + '">'
                + '<textarea class="cam-select-desc-input">' + combo.desc + '</textarea>'
                + '</div>';

            card.innerHTML = html;
            container.appendChild(card);
        });
    }

    // Đóng dropdown khi click ngoài cho Camera PDH
    document.addEventListener('click', function (event) {
        var dropdown = document.getElementById('cam-pdh-dropdown');
        var btn = document.querySelector('button[onclick="camTogglePdhDropdown()"]');
        if (dropdown && dropdown.style.display === 'block' && btn && !btn.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });

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
        } else if (sectionId === 'inet-countdown') {
            var chk = document.querySelector('#ldpsec-inet-countdown .countdown-enable-chk');
            var isEnabled = chk ? chk.checked : false;
            var titleInput = document.querySelector('#ldpsec-inet-countdown .countdown-title');
            var title = titleInput ? titleInput.value : '';
            summaryText = (isEnabled ? '[Bật] ' : '[Tắt] ') + 'Section độc lập · Ưu đãi: "' + title + '"';
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
            var count = document.querySelectorAll('#inet-review-list .inet-product-card').length;
            summaryText = 'Tiêu đề: "' + text + '" · ' + count + ' video review';
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
        } else if (sectionId === 'sa-popup-form') {
            var titleVal = document.getElementById('sa-popup-form-title') ? document.getElementById('sa-popup-form-title').value : '';
            summaryText = 'Tiêu đề Popup: "' + titleVal + '"';
        } else if (sectionId === 'sa-hero') {
            var chk = document.querySelector('#ldpsec-sa-hero .countdown-enable-chk');
            var isEnabled = chk ? chk.checked : false;
            var titleInput = document.querySelector('#ldpsec-sa-hero .countdown-title');
            var title = titleInput ? titleInput.value : '';
            summaryText = (isEnabled ? '[Bật Countdown] ' : '[Tắt Countdown] ') + 'Nhãn: "' + title + '"';
        } else if (sectionId === 'cam-usp') {
            var group = Array.from(document.querySelectorAll('#ldpsec-cam-usp .form-group')).find(function (g) {
                return g.querySelector('label') && g.querySelector('label').textContent.includes('Tiêu đề');
            });
            var text = group ? group.querySelector('input').value : '';
            summaryText = 'Công nghệ: "' + text + '"';
        } else if (sectionId === 'cam-detail') {
            var labels = Array.from(document.querySelectorAll('#ldpsec-cam-detail label'));
            var nameInputs = labels.filter(function (l) { return l.textContent.trim() === 'Tên sản phẩm'; }).map(function (l) { return l.nextElementSibling; });
            var name1 = nameInputs[0] ? nameInputs[0].value : 'Camera Trong nhà';
            var name2 = nameInputs[1] ? nameInputs[1].value : 'Camera Ngoài Trời';
            summaryText = name1 + ' & ' + name2;
        } else if (sectionId === 'cam-select') {
            var group = Array.from(document.querySelectorAll('#ldpsec-cam-select .form-group')).find(function (g) {
                return g.querySelector('label') && g.querySelector('label').textContent.includes('Tiêu đề');
            });
            var text = group ? group.querySelector('input').value : '';
            var count = document.querySelectorAll('#cam-select-list .cam-select-card-item').length;
            summaryText = 'Tiêu đề: "' + text + '" · ' + count + ' combo';
        } else if (sectionId === 'camp-products') {
            var group = Array.from(document.querySelectorAll('#ldpsec-camp-products .form-group')).find(function (g) {
                return g.querySelector('label') && g.querySelector('label').textContent.includes('Tiêu đề');
            });
            var text = group ? group.querySelector('input').value : '';
            var count = document.querySelectorAll('#camp-products-list .inet-product-card').length;
            summaryText = 'Tiêu đề: "' + text + '" · ' + count + ' gói';
        } else if (sectionId === 'camp-compare') {
            var group = Array.from(document.querySelectorAll('#ldpsec-camp-compare .form-group')).find(function (g) {
                return g.querySelector('label') && g.querySelector('label').textContent.includes('Tiêu đề');
            });
            var text = group ? group.querySelector('input').value : '';
            var count = document.querySelectorAll('#camp-compare-list .camp-compare-row').length;
            summaryText = 'Tiêu đề: "' + text + '" · ' + count + ' tiêu chí so sánh';
        } else if (sectionId === 'camp-targets') {
            var group = Array.from(document.querySelectorAll('#ldpsec-camp-targets .form-group')).find(function (g) {
                return g.querySelector('label') && g.querySelector('label').textContent.includes('Tiêu đề');
            });
            var text = group ? group.querySelector('input').value : '';
            var count = document.querySelectorAll('#camp-targets-list .inet-product-card').length;
            summaryText = 'Tiêu đề: "' + text + '" · ' + count + ' nhóm đối tượng';
        } else if (sectionId === 'camp-videos') {
            var group = Array.from(document.querySelectorAll('#ldpsec-camp-videos .form-group')).find(function (g) {
                return g.querySelector('label') && g.querySelector('label').textContent.includes('Tiêu đề');
            });
            var text = group ? group.querySelector('input').value : '';
            var count = document.querySelectorAll('#camp-videos-list .inet-product-card').length;
            summaryText = 'Tiêu đề: "' + text + '" · ' + count + ' video review';
        } else if (sectionId === 'camp-form') {
            var group = Array.from(document.querySelectorAll('#ldpsec-camp-form .form-group')).find(function (g) {
                return g.querySelector('label') && g.querySelector('label').textContent.includes('Tiêu đề trên Form');
            });
            var text = group ? group.querySelector('input').value : '';
            summaryText = 'Tiêu đề: "' + text + '"';
        } else if (sectionId === 'camp-sticky') {
            var group = Array.from(document.querySelectorAll('#ldpsec-camp-sticky .form-group')).find(function (g) {
                return g.querySelector('label') && g.querySelector('label').textContent.includes('Tiêu đề sticky');
            });
            var text = group ? group.querySelector('input').value : '';
            summaryText = 'Sticky: "' + text + '"';
        } else if (sectionId === 'sa-categories') {
            var group = Array.from(document.querySelectorAll('#ldpsec-sa-categories .form-group')).find(function (g) {
                return g.querySelector('label') && g.querySelector('label').textContent.includes('Tiêu đề');
            });
            var text = group ? group.querySelector('input').value : '';
            summaryText = 'Tiêu đề: "' + text + '"';
        } else if (sectionId === 'sa-experience') {
            var group = Array.from(document.querySelectorAll('#ldpsec-sa-experience .form-group')).find(function (g) {
                return g.querySelector('label') && g.querySelector('label').textContent.includes('Tiêu đề section');
            });
            var text = group ? group.querySelector('input').value : '';
            summaryText = 'Tiêu đề: "' + text + '" · 4 đặc điểm giải trí';
        } else if (sectionId === 'sa-pricing') {
            var group = Array.from(document.querySelectorAll('#ldpsec-sa-pricing .form-group')).find(function (g) {
                return g.querySelector('label') && g.querySelector('label').textContent.includes('Tiêu đề');
            });
            var text = group ? group.querySelector('input').value : '';
            summaryText = 'Tiêu đề: "' + text + '" · ' + document.querySelectorAll('#sa-pricing-list .pricing-card-item').length + ' gói cước';
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
            var qCount = document.querySelectorAll('#sa-faq-list > div').length;
            summaryText = 'FAQ: "' + (title ? title.value : '') + '" · ' + qCount + ' câu hỏi';
        } else if (sectionId === 'sa-sticky') {
            var group = Array.from(document.querySelectorAll('#ldpsec-sa-sticky .form-group')).find(function (g) {
                return g.querySelector('label') && g.querySelector('label').textContent.includes('Tiêu đề');
            });
            var text = group ? group.querySelector('input').value : '';
            summaryText = 'Sticky: "' + text + '"';
        } else if (sectionId === 'cam-hero') {
            var group = Array.from(document.querySelectorAll('#ldpsec-cam-hero .form-group')).find(function (g) {
                return g.querySelector('label') && g.querySelector('label').textContent.includes('Headline chính');
            });
            var text = group ? group.querySelector('input').value : '';
            summaryText = 'Headline: "' + text + '"';
        } else if (sectionId === 'camp-hero') {
            var group = Array.from(document.querySelectorAll('#ldpsec-camp-hero .form-group')).find(function (g) {
                return g.querySelector('label') && g.querySelector('label').textContent.includes('Headline chính');
            });
            var text = group ? group.querySelector('input').value : '';
            summaryText = 'Headline: "' + text + '"';
        } else if (sectionId === 'camp-countdown') {
            var chk = document.querySelector('#ldpsec-camp-countdown .countdown-enable-chk');
            var isEnabled = chk ? chk.checked : false;
            var titleInput = document.querySelector('#ldpsec-camp-countdown .countdown-title');
            var title = titleInput ? titleInput.value : '';
            summaryText = (isEnabled ? '[Bật] ' : '[Tắt] ') + 'Section độc lập · Ưu đãi: "' + title + '"';
        } else if (sectionId === 'lead-hero') {
            var group = Array.from(document.querySelectorAll('#ldpsec-lead-hero .form-group')).find(function (g) {
                return g.querySelector('label') && g.querySelector('label').textContent.includes('Headline chính');
            });
            var text = group ? group.querySelector('input').value : '';
            summaryText = 'Headline: "' + text + '"';
        } else if (sectionId === 'lead-steps') {
            var group = Array.from(document.querySelectorAll('#ldpsec-lead-steps .form-group')).find(function (g) {
                return g.querySelector('label') && g.querySelector('label').textContent.includes('Tiêu đề Section Lợi ích');
            });
            var text = group ? group.querySelector('input').value : '';
            summaryText = 'Lợi ích: "' + text + '" · 4 lợi ích';
        } else if (sectionId === 'lead-reviews') {
            var group = Array.from(document.querySelectorAll('#ldpsec-lead-reviews .form-group')).find(function (g) {
                return g.querySelector('label') && g.querySelector('label').textContent.includes('Tiêu đề Section video');
            });
            var text = group ? group.querySelector('input').value : '';
            var count = document.querySelectorAll('#lead-videos-list .inet-product-card').length;
            summaryText = 'Tiêu đề: "' + text + '" · ' + count + ' video review';


            var row = document.querySelector('.ldp-section-row[data-section-id="' + sectionId + '"]');
            if (row) {
                var descEl = row.querySelector('.section-desc') || row.querySelector('span[style*="var(--text-muted)"]') || row.querySelector('div[style*="color:var(--text-muted)"]') || row.querySelector('div > span:last-child');
                if (descEl) {
                    descEl.textContent = summaryText;
                }
            } else {
                var summaryEl = document.getElementById(sectionId + '-summary');
                if (summaryEl) {
                    summaryEl.textContent = summaryText;
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

        function ldpRefactorFaqItems() {
            document.querySelectorAll('.faq-item, div[style*="border-glass"][style*="padding:14px"]').forEach(function (item, idx) {
                var selectEl = item.querySelector('.faq-sync-select');
                var qInput = item.querySelector('.faq-question-input');
                var aTextarea = item.querySelector('.faq-answer-textarea');
                var deleteBtn = item.querySelector('button[title="Xóa câu hỏi"], button[onclick*="remove"]');

                if (selectEl && qInput && aTextarea && qInput.type !== 'hidden') {
                    // Chuyển sang dạng input ẩn
                    qInput.type = 'hidden';
                    var qGroup = qInput.closest('.form-group');
                    if (qGroup) qGroup.style.display = 'none';

                    // Chuyển textarea thành input ẩn hoặc ẩn hẳn form-group
                    aTextarea.style.display = 'none';
                    var aGroup = aTextarea.closest('.form-group');
                    if (aGroup) aGroup.style.display = 'none';

                    var selectGroup = selectEl.closest('.form-group');
                    if (selectGroup) {
                        selectGroup.style.display = 'none';
                    }

                    // Thiết lập style flex row cực gọn cho item
                    item.style.cssText = 'display:flex; align-items:center; gap:10px; margin-top:8px; background:rgba(255,255,255,0.02); padding:8px 10px; border:1px solid var(--border-glass); border-radius:6px; position:relative;';

                    if (deleteBtn) deleteBtn.remove();

                    var label = document.createElement('span');
                    label.style.cssText = 'font-size:11px; font-weight:700; color:var(--primary); min-width:70px;';
                    label.textContent = 'Câu hỏi ' + (idx + 1);

                    var newDelBtn = document.createElement('button');
                    newDelBtn.className = 'btn btn-secondary btn-sm';
                    newDelBtn.style.cssText = 'color:var(--danger); border-color:transparent; background:transparent; padding:4px 8px; font-size:12px; margin:0;';
                    newDelBtn.textContent = '🗑 Xóa';
                    newDelBtn.onclick = function () {
                        item.remove();
                    };

                    // Sắp xếp lại DOM các phần tử hiển thị
                    item.prepend(label);
                    item.appendChild(selectEl);
                    selectEl.style.cssText = 'flex:1; padding:6px 8px; font-size:12px; margin:0; display:block;';
                    item.appendChild(newDelBtn);
                }
            });
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
            div.style.cssText = 'display:flex; align-items:center; gap:10px; margin-top:8px; background:rgba(255,255,255,0.02); padding:8px 10px; border:1px solid var(--border-glass); border-radius:6px; position:relative;';

            var optionsHtml = '<option value="">-- Chọn câu hỏi từ FAQ chung để đồng bộ --</option>';
            for (var key in faqArticlesData) {
                var selected = (actualQ && faqArticlesData[key].question === actualQ) ? 'selected' : '';
                optionsHtml += '<option value="' + key + '" ' + selected + '>' + faqArticlesData[key].question + '</option>';
            }

            div.innerHTML = '<span style="font-size:11px; font-weight:700; color:var(--primary); min-width:70px;">Câu hỏi ' + idx + '</span>'
                + '<select class="form-input faq-sync-select" onchange="ldpSyncFaqToFields(this)" style="flex:1; padding:6px 8px; font-size:12px; margin:0;">' + optionsHtml + '</select>'
                + '<input type="hidden" class="faq-question-input" value="' + (actualQ || '') + '">'
                + '<input type="hidden" class="faq-answer-textarea" value="' + (actualA || '') + '">'
                + '<button class="btn btn-secondary btn-sm" style="color:var(--danger); border-color:transparent; background:transparent; padding:4px 8px; font-size:12px; margin:0;" onclick="this.parentElement.remove()" title="Xóa câu hỏi">🗑 Xóa</button>';
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
            'internet': { skus: ['INT-GIGA', 'INT-SKY', 'MODEM-AX3000GZ'], fallback: false },
            'camera': { skus: ['CAM-IQ3', 'CAM-SE'], fallback: false },
            'wifi6': { skus: ['MODEM-AX3000GZ', 'INT-SKY'], fallback: false },
            'truyenhinh': { skus: ['PLAY-MAX'], fallback: false }
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

                tr.innerHTML = `
                    <td style="font-weight:600; color:var(--primary); font-size:13px;">#${displayTagName}${draftBadge}</td>
                    <td><div style="display:flex; flex-wrap:wrap; gap:2px;">${skuBadges}</div></td>
                    <td style="text-align:center;"><span class="badge active" style="font-size:11px; padding:2px 6px;">${matchedCount} bài</span></td>
                    <td style="text-align:right;" onclick="event.stopPropagation();">
                        <button class="btn btn-sm" style="background:rgba(249,115,22,0.15); color:#FB923C; padding:4px 8px; border:none; margin-right:4px;" onclick="selectTagForConfig('${tag}')">✏️ Cấu hình</button>
                        <button class="btn btn-sm" style="background:rgba(239,68,68,0.15); color:#ef4444; padding:4px 8px; border:none;" onclick="deleteTagMapping('${tag}')">🗑</button>
                    </td>
                `;
                tbody.appendChild(tr);
            }

            if (tbody.children.length === 0) {
                tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; color:var(--text-muted); font-style:italic; padding:20px;">Không tìm thấy tag nào khớp.</td></tr>';
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



            // Update preview status
            document.getElementById('tag-preview-status').className = 'badge active';
            document.getElementById('tag-preview-status').innerText = 'Đang Preview Tag: #' + tag;

            updateTagMappingPreview();

            // Chuyển hướng giao diện (hiển thị trang cấu hình inline, ẩn danh sách mapping)
            document.getElementById('news-tag-mapping').style.display = 'none';
            document.getElementById('tag-config-modal').style.display = 'block';
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
                previewList.innerHTML = '<div style="color:var(--text-muted); font-size:11.5px; text-align:center; padding:20px; border:1px dashed rgba(255,255,255,0.06); border-radius:6px; background:rgba(255,255,255,0.01);">Không tìm thấy bài viết trùng khớp với tag #' + tag + '.</div>';
            }
        }

        if (!tagMappingData[tag]) {
            tagMappingData[tag] = {};
        }
        tagMappingData[tag].skus = [...tempSelectedSkus];
        tagMappingData[tag].fallback = false;

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


        document.getElementById('tag-preview-status').className = 'badge';
        document.getElementById('tag-preview-status').innerText = 'Vui lòng chọn Tag';

        updateTagMappingPreview();

        // Quay lại trang danh sách (hiển thị danh sách mapping, ẩn trang cấu hình inline)
        document.getElementById('news-tag-mapping').style.display = 'block';
        document.getElementById('tag-config-modal').style.display = 'none';
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
