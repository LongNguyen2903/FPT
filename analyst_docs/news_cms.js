/**
 * News & Tag Mapping CMS Logic overrides
 * FPT CMS Wireframe Optimizations
 */

(function () {
    // Override the mockArticles, newsTagsData, tagMappingData variables on the window scope
    window.mockArticles = [
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

    window.newsTagsData = {
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

    window.tagMappingData = {
        'internet': { skus: ['INT-GIGA', 'INT-SKY', 'MODEM-AX3000GZ'], fallback: true },
        'camera': { skus: ['CAM-IQ3', 'CAM-SE'], fallback: true },
        'wifi6': { skus: ['MODEM-AX3000GZ', 'INT-SKY'], fallback: false },
        'truyenhinh': { skus: ['PLAY-MAX'], fallback: true }
    };

    window.newsCategoriesData = {
        'cat-1': {
            id: 'cat-1',
            name: 'Tin khuyến mãi',
            slug: 'tin-khuyen-mai',
            desc: 'Các chương trình ưu đãi, khuyến mãi lắp đặt mạng FPT, FPT Play, FPT Camera',
            content: 'Nội dung chi tiết về các chương trình ưu đãi và khuyến mãi mới nhất của FPT Telecom.',
            parent: '',
            layout: 'default',
            lang: 'vi',
            showHome: '1',
            showTop: '1',
            order: 1,
            color: '#ff6b00',
            status: 'Active',
            imgAlt: 'Khuyến mãi FPT',
            seoTitle: 'Tổng Hợp Khuyến Mãi FPT Mới Nhất Hè 2026',
            seoKeywords: 'khuyen mai fpt, lap mang fpt gia re',
            seoDesc: 'Cập nhật nhanh chóng các chương trình khuyến mãi lắp đặt cáp quang, truyền hình, camera FPT.',
            keywords: 'khuyen mai, lap mang'
        },
        'cat-2': {
            id: 'cat-2',
            name: 'Tin công nghệ',
            slug: 'tin-cong-nghe',
            desc: 'Tin tức công nghệ mới nhất từ FPT Telecom và thế giới',
            content: 'Chuyên mục tổng hợp các tin tức công nghệ mới nhất, xu hướng công nghệ Wi-Fi 6, Wi-Fi 7, thiết bị thông minh.',
            parent: '',
            layout: 'grid',
            lang: 'vi',
            showHome: '1',
            showTop: '0',
            order: 2,
            color: '#fbbf24',
            status: 'Active',
            imgAlt: 'Công nghệ FPT',
            seoTitle: 'Tin Tức Công Nghệ Mới Nhất - FPT Telecom',
            seoKeywords: 'tin cong nghe, wifi 6 fpt, camera ai',
            seoDesc: 'Theo dõi các thông tin công nghệ mới nhất, thiết bị và giải pháp AI tiên tiến.',
            keywords: 'cong nghe, tin tuc'
        },
        'cat-3': {
            id: 'cat-3',
            name: 'Thông báo',
            slug: 'thong-bao',
            desc: 'Thông báo chính thức từ ban quản trị hệ thống',
            content: 'Thông tin bảo trì mạng định kỳ, nâng cấp hệ thống, thông báo chung tới quý khách hàng.',
            parent: '',
            layout: 'list',
            lang: 'vi',
            showHome: '0',
            showTop: '1',
            order: 3,
            color: '#38bdf8',
            status: 'Active',
            imgAlt: 'Thông báo FPT',
            seoTitle: 'Thông Báo Khách Hàng - FPT Telecom',
            seoKeywords: 'thong bao bao tri, thong bao fpt',
            seoDesc: 'Tổng hợp thông báo chính thức gửi tới quý khách hàng sử dụng dịch vụ FPT.',
            keywords: 'thong bao, bao tri'
        },
        'cat-4': {
            id: 'cat-4',
            name: 'Sự kiện',
            slug: 'su-kien',
            desc: 'Các sự kiện nổi bật của FPT Telecom và đối tác',
            content: 'Các giải đấu thể thao trên FPT Play, sự kiện ra mắt sản phẩm mới, chương trình cộng đồng.',
            parent: '',
            layout: 'default',
            lang: 'vi',
            showHome: '1',
            showTop: '0',
            order: 4,
            color: '#a78bfa',
            status: 'Active',
            imgAlt: 'Sự kiện FPT',
            seoTitle: 'Sự Kiện Nổi Bật FPT Play, FPT Telecom',
            seoKeywords: 'su kien fpt, giai dau fpt play',
            seoDesc: 'Thông tin các chương trình sự kiện hoành tráng nhất của FPT Telecom.',
            keywords: 'su kien, fpt play'
        }
    };

    window.skuTagsData = {};

    window.openNewsArticleDrawer = function () {
        const overlay = document.getElementById('news-edit-overlay');
        const drawerContent = document.getElementById('news-item-form');
        if (overlay && drawerContent) {
            // Đưa ra ngoài body để tránh bị stacking context và flexbox co giãn
            document.body.appendChild(overlay);
            document.body.appendChild(drawerContent);

            overlay.style.display = 'block';
            drawerContent.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            setTimeout(function () {
                overlay.classList.add('open');
                drawerContent.classList.add('open');
            }, 10);
        }
    };

    window.closeNewsArticleDrawer = function () {
        const overlay = document.getElementById('news-edit-overlay');
        const drawerContent = document.getElementById('news-item-form');
        if (drawerContent) {
            drawerContent.classList.remove('open');
        }
        if (overlay) {
            overlay.classList.remove('open');
        }
        document.body.style.overflow = '';
        setTimeout(function () {
            if (drawerContent && !drawerContent.classList.contains('open')) {
                drawerContent.style.display = 'none';
            }
            if (overlay && !overlay.classList.contains('open')) {
                overlay.style.display = 'none';
            }
        }, 300);
    };

    window.newsArticlesData = {
        'news-1': {
            id: 'news-1',
            title: 'Lắp đặt mạng FPT khuyến mãi hè 2026 cực sốc',
            slug: 'lap-mang-fpt-khuyen-mai-he-2026',
            category: 'Tin khuyến mãi',
            author: 'Admin',
            date: '22/05/2026',
            status: 'Published',
            channel: 'fpt-telecom',
            sapo: 'Chào hè rực rỡ với chương trình khuyến mãi lắp đặt mạng cáp quang FPT Telecom cực lớn trong năm 2026. Tặng đến 2 tháng cước sử dụng, miễn phí modem Wi-Fi 6 thế hệ mới.',
            content: '## Khuyến mãi lắp mạng FPT hè 2026\nFPT Telecom trân trọng gửi tới quý khách hàng chương trình khuyến mãi lắp mạng FPT hè 2026 vô cùng hấp dẫn.\n\n## Ưu đãi đặc quyền của khách hàng\nTheo đó, khách hàng đăng ký mới dịch vụ Internet cáp quang hoặc combo Internet & Truyền hình FPT sẽ được hưởng các ưu đãi đặc quyền:\n1. Trang bị miễn phí Modem Wi-Fi 6 2 băng tần công nghệ mới.\n2. Tặng từ 1 đến 2 tháng cước khi tham gia trả trước từ 6-12 tháng.\n3. Miễn phí hòa mạng và lắp đặt siêu tốc trong 12 giờ.\n\n## Đăng ký online nhanh chóng\nVui lòng liên hệ hotline hoặc đăng ký trực tuyến để nhận ưu đãi ngay hôm nay!',
            tags: 'khuyenmai, lap-mang-fpt, wifi6',
            featured: false,
            thumbUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=150&q=80',
            thumbAlt: 'Băng rôn lắp mạng FPT khuyến mãi hè 2026 cực lớn',
            thumbCaption: 'Chương trình ưu đãi hè áp dụng trên toàn quốc',
            cropRatio: '3:2',
            seoTitle: 'Lắp Mạng FPT Khuyến Mãi Hè 2026 Mới Nhất: Tặng 2 Tháng Cước',
            seoDesc: 'Lắp mạng cáp quang FPT hè 2026 nhận ưu đãi hấp dẫn. Miễn phí lắp đặt, trang bị miễn phí modem Wi-Fi 6 thế hệ mới, tặng thêm cước sử dụng.'
        },
        'news-2': {
            id: 'news-2',
            title: 'FPT Camera ra mắt tính năng nhận diện AI thông minh mới',
            slug: 'fpt-camera-ra-mat-tinh-nang-nhan-dien-ai',
            category: 'Tin công nghệ',
            author: 'Phương Nam',
            date: '20/05/2026',
            status: 'Published',
            channel: 'fpt-camera',
            sapo: 'Công nghệ AI mới tích hợp trên FPT Camera giúp nâng cao khả năng cảnh báo thông minh, phát hiện chuyển động của người và vật nuôi, giảm thiểu báo động giả tới 95%.',
            content: '## FPT Camera ra mắt Cloud AI\nFPT Camera chính thức cập nhật phiên bản AI thông minh thế hệ mới tích hợp công nghệ phân tích dữ liệu đám mây (Cloud AI).\n\n## Tính năng nổi bật của FPT Camera IQ\nTính năng mới cho phép:\n- Phân biệt chính xác giữa người và vật nuôi hay chuyển động của cây cối.\n- Thiết lập vùng cảnh báo an ninh thông minh (Zone Alert).\n- Gửi thông báo đẩy kèm hình ảnh thực tế tức thì về điện thoại người dùng.\n\n## Thiết bị áp dụng\nHệ thống tự động cập nhật từ ngày 20/05/2026 cho tất cả các dòng FPT Camera IQ3 và IQ3S hiện tại của khách hàng.',
            tags: 'camera, fpt-camera, cong-nghe-ai',
            featured: true,
            thumbUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=150&q=80',
            thumbAlt: 'Thiết bị camera an ninh thông minh FPT Camera IQ3',
            thumbCaption: 'FPT Camera IQ3 tích hợp AI nhận diện thông minh',
            cropRatio: '3:2',
            seoTitle: 'FPT Camera Ra Mắt Tính Năng Nhận Diện AI Thông Minh Mới',
            seoDesc: 'FPT Camera cập nhật tính năng AI nhận diện khuôn mặt và phân biệt chuyển động người/vật giúp giảm báo động giả và tăng cường an ninh.'
        },
        'news-3': {
            id: 'news-3',
            title: 'ASTON VILLA CHÍNH THỨC ĐĂNG QUANG CHAMPION UEFA EUROPA LEAGUE',
            slug: 'aston-villa-dang-quang-champion-europa-league',
            category: 'Tin công nghệ',
            author: 'Đức Nguyễn',
            date: '21/05/2026',
            status: 'Draft',
            channel: 'fpt-play',
            sapo: 'Thầy trò HLV Unai Emery đã tạo nên lịch sử sau chiến thắng kịch tính ở trận chung kết Europa League vừa qua. Chiếc cúp vô địch châu Âu danh giá này mang lại vinh quang lớn.',
            content: '## Aston Villa vô địch Europa League\nAston Villa chính thức bước lên đỉnh vinh quang tại UEFA Europa League sau trận đấu nghẹt thở. HLV Unai Emery một lần nữa khẳng định vị thế ông vua đấu cúp khi dẫn dắt đội bóng vượt qua hàng loạt đối thủ mạnh để giành cúp vàng danh giá.\n\n## Bản quyền phát sóng trực tiếp\nTrận chung kết kịch tính này được tường thuật trực tiếp và độc quyền trên hệ thống Truyền hình FPT Play.',
            tags: 'aston-villa, europa-league, fpt-play',
            featured: false,
            thumbUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=150&q=80',
            thumbAlt: 'Cầu thủ Aston Villa ăn mừng cúp vô địch Europa League',
            thumbCaption: 'Aston Villa ăn mừng chiếc cúp vô địch danh giá',
            cropRatio: '3:2',
            seoTitle: 'Aston Villa Vô Địch UEFA Europa League 2026 Trực Tiếp FPT Play',
            seoDesc: 'Thầy trò HLV Unai Emery đăng quang ngôi vô địch Europa League 2026 đầy kịch tính. Đón xem lại trọn vẹn trận đấu độc quyền trên FPT Play.'
        }
    };

    window.selectedNewsIds = [];

    // Sync mock articles for SKU mapping
    window.syncNewsToMockArticles = function () {
        if (typeof window.mockArticles === 'undefined') return;
        window.mockArticles.length = 0;
        for (let id in window.newsArticlesData) {
            const art = window.newsArticlesData[id];
            if (art.status === 'Published') {
                const tagsArr = art.tags.split(',').map(t => t.trim().toLowerCase());
                tagsArr.forEach(t => {
                    if (t) {
                        window.mockArticles.push({
                            title: art.title,
                            tag: t,
                            type: art.category === 'Tin khuyến mãi' ? 'khuyen-mai' : 'tin-tuc'
                        });
                    }
                });
            }
        }
    };

    // Switch tab news
    window.switchNewsTab = function (tab, element) {
        let tabs = element.parentElement.children;
        for (let i = 0; i < tabs.length; i++) tabs[i].classList.remove('active');
        element.classList.add('active');

        document.getElementById('news-list').style.display = 'none';
        document.getElementById('news-cat-list').style.display = 'none';
        document.getElementById('news-tag-list').style.display = 'none';
        document.getElementById('news-tag-mapping').style.display = 'none';
        document.getElementById('news-author-list').style.display = 'none';
        document.getElementById('news-author-form').style.display = 'none';
        window.closeNewsArticleDrawer();
        document.getElementById('news-cat-form').style.display = 'none';

        if (tab === 'list') {
            document.getElementById('news-list').style.display = 'block';
            window.renderNewsTableHTML();
        } else if (tab === 'category') {
            document.getElementById('news-cat-list').style.display = 'block';
            window.renderNewsCategoriesTable();
        } else if (tab === 'tag-list') {
            document.getElementById('news-tag-list').style.display = 'block';
            window.renderNewsTagsTable();
            window.closeNewsTagForm();
        } else if (tab === 'tag-mapping') {
            document.getElementById('news-tag-mapping').style.display = 'block';
            window.syncTagMappingToSku();
            window.renderTagMappingTable();
            window.resetTagConfig();
        } else if (tab === 'author-list') {
            document.getElementById('news-author-list').style.display = 'block';
            window.renderNewsAuthorsTable();
        }
    };

    // Render tags
    window.renderNewsTagsTable = function (data = window.newsTagsData) {
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

            let articleCount = 0;
            window.mockArticles.forEach(art => {
                if (art.tag === tag.slug) articleCount++;
            });

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
    };

    window.filterNewsTagsTable = function () {
        const kw = document.getElementById('newstags-search-keyword').value.toLowerCase().trim();
        const filtered = {};
        for (let id in window.newsTagsData) {
            const tag = window.newsTagsData[id];
            if (!kw || tag.name.toLowerCase().includes(kw) || tag.slug.toLowerCase().includes(kw)) {
                filtered[id] = tag;
            }
        }
        window.renderNewsTagsTable(filtered);
        showLdpToast('Đã lọc danh sách tags!');
    };

    window.openNewsTagForm = function () {
        document.getElementById('newstags-form-title').innerText = 'Tạo mới Tag tin tức';
        document.getElementById('newstags-edit-id').value = '';
        document.getElementById('newstags-input-name').value = '';
        document.getElementById('newstags-input-slug').value = '';
        document.getElementById('newstags-input-status').value = 'Active';

        document.getElementById('newstags-list-view').style.display = 'none';
        document.getElementById('news-tag-form').style.display = 'block';
    };

    window.closeNewsTagForm = function () {
        document.getElementById('newstags-list-view').style.display = 'block';
        document.getElementById('news-tag-form').style.display = 'none';
    };

    window.editNewsTag = function (id) {
        const tag = window.newsTagsData[id];
        if (!tag) return;
        document.getElementById('newstags-form-title').innerText = 'Chỉnh sửa Tag tin tức';
        document.getElementById('newstags-edit-id').value = tag.id;
        document.getElementById('newstags-input-name').value = tag.name;
        document.getElementById('newstags-input-slug').value = tag.slug;
        document.getElementById('newstags-input-status').value = tag.status;

        document.getElementById('newstags-list-view').style.display = 'none';
        document.getElementById('news-tag-form').style.display = 'block';
    };

    window.saveNewsTagAction = function () {
        const name = document.getElementById('newstags-input-name').value.trim();
        const slug = document.getElementById('newstags-input-slug').value.trim();
        const status = document.getElementById('newstags-input-status').value;

        if (!name || !slug) {
            alert('Vui lòng điền đầy đủ các trường bắt buộc!');
            return;
        }

        const id = document.getElementById('newstags-edit-id').value || 'tag-' + (Object.keys(window.newsTagsData).length + 1);

        window.newsTagsData[id] = {
            id: id,
            name: name,
            slug: slug,
            status: status
        };

        window.renderNewsTagsTable();
        window.closeNewsTagForm();
        showLdpToast('Đã lưu Tag thành công!');
    };

    window.deleteNewsTag = function (id) {
        if (confirm('Bạn có chắc chắn muốn xóa Tag này không?')) {
            delete window.newsTagsData[id];
            window.renderNewsTagsTable();
            showLdpToast('Đã xóa Tag thành công!');
        }
    };

    window.newsAuthorsData = {
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

    // --- HELPER DYNAMIC SOCIAL LINKS ---
    window.addSocialLinkRow = function (platform = 'facebook', url = '') {
        const container = document.getElementById('newsauthor-socials-container');
        if (!container) return;

        const row = document.createElement('div');
        row.className = 'social-link-row';
        row.style.cssText = 'display:grid; grid-template-columns: 120px 1fr 40px; gap:8px; align-items:center; margin-bottom:8px;';

        const select = document.createElement('select');
        select.className = 'form-input';
        select.style.padding = '6px';
        select.innerHTML = `
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="tiktok">TikTok</option>
            <option value="youtube">YouTube</option>
            <option value="linkedin">LinkedIn</option>
            <option value="twitter">Twitter/X</option>
            <option value="other">Mạng khác</option>
        `;
        select.value = platform;

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-input';
        input.placeholder = 'Nhập URL liên kết...';
        input.value = url;
        input.style.padding = '6px';

        const btnDelete = document.createElement('button');
        btnDelete.type = 'button';
        btnDelete.className = 'btn btn-secondary';
        btnDelete.style.cssText = 'padding:6px; color:var(--danger); border-color:rgba(239,68,68,0.2); font-size:12px; height: 34px; line-height:1; display:flex; align-items:center; justify-content:center;';
        btnDelete.innerHTML = '🗑';
        btnDelete.onclick = function() {
            row.remove();
        };

        row.appendChild(select);
        row.appendChild(input);
        row.appendChild(btnDelete);
        container.appendChild(row);
    };

    window.getSocialLinksFromForm = function () {
        const container = document.getElementById('newsauthor-socials-container');
        const socials = [];
        if (!container) return socials;
        const rows = container.querySelectorAll('.social-link-row');
        rows.forEach(row => {
            const select = row.querySelector('select');
            const input = row.querySelector('input');
            if (select && input && input.value.trim()) {
                socials.push({
                    platform: select.value,
                    url: input.value.trim()
                });
            }
        });
        return socials;
    };

    // --- NEWS AUTHORS LOGIC ---
    window.renderNewsAuthorsTable = function () {
        const tbody = document.getElementById('newsauthor-table-body');
        if (!tbody) return;
        tbody.innerHTML = '';

        const searchKw = (document.getElementById('news-author-search-keyword')?.value || '').toLowerCase().trim();

        // Đếm động số bài viết của mỗi tác giả
        const authorArticleCounts = {};
        for (let artId in window.newsArticlesData) {
            const art = window.newsArticlesData[artId];
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

        for (let id in window.newsAuthorsData) {
            const author = window.newsAuthorsData[id];

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
    };

    window.openAddNewsAuthorForm = function () {
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
    };

    window.editNewsAuthor = function (id) {
        const author = window.newsAuthorsData[id];
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
    };

    window.saveNewsAuthorAction = function () {
        const editId = document.getElementById('newsauthor-edit-id').value;
        const name = document.getElementById('newsauthor-name').value.trim();
        const slug = document.getElementById('newsauthor-slug').value.trim();

        if (!name || !slug) {
            showLdpToast('Vui lòng nhập đầy đủ Tên tác giả và Biệt danh (slug)!');
            return;
        }

        const id = editId || 'auth-' + (Object.keys(window.newsAuthorsData).length + 1);

        window.newsAuthorsData[id] = {
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

        window.updateArticleAuthorOptions();
        window.renderNewsAuthorsTable();

        document.getElementById('news-author-form').style.display = 'none';
        document.getElementById('news-author-list').style.display = 'block';
        showLdpToast('Đã lưu thông tin tác giả thành công!');
    };



    window.deleteNewsAuthor = function (id) {
        const author = window.newsAuthorsData[id];
        if (!author) return;

        if (confirm(`Bạn có chắc chắn muốn xóa tác giả "${author.name}" không?`)) {
            delete window.newsAuthorsData[id];
            window.updateArticleAuthorOptions();
            window.renderNewsAuthorsTable();
            showLdpToast('Đã xóa tác giả thành công!');
        }
    };

    window.updateArticleAuthorOptions = function () {
        const selectEl = document.getElementById('art-author');
        if (!selectEl) return;
        const currentVal = selectEl.value;
        selectEl.innerHTML = '';
        for (let id in window.newsAuthorsData) {
            const author = window.newsAuthorsData[id];
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
    };

    // --- NEWS CATEGORIES LOGIC ---
    window.renderNewsCategoriesTable = function () {
        const tbody = document.getElementById('newscat-table-body');
        if (!tbody) return;
        tbody.innerHTML = '';

        const searchKw = (document.querySelector('#news-cat-list input[placeholder="Tìm chuyên mục..."]')?.value || '').toLowerCase().trim();

        for (let id in window.newsCategoriesData) {
            const cat = window.newsCategoriesData[id];

            if (searchKw && !cat.name.toLowerCase().includes(searchKw) && !cat.slug.toLowerCase().includes(searchKw)) {
                continue;
            }

            const tr = document.createElement('tr');
            tr.setAttribute('data-cat-id', cat.id);

            const statusBadge = cat.status === 'Active'
                ? '<span class="badge active">Active</span>'
                : '<span class="badge warning">Draft</span>';

            tr.innerHTML = `
                <td><strong>${cat.name}</strong></td>
                <td>${cat.slug}</td>
                <td>${cat.order}</td>
                <td>${statusBadge}</td>
                <td>
                    <button class="btn btn-secondary btn-sm"
                        style="color:var(--primary); border-color:var(--primary);"
                        onclick="window.editNewsCategory('${cat.id}')">Sửa</button>
                    <button class="btn btn-secondary btn-sm"
                        style="color:var(--danger); border-color:var(--danger); margin-left: 5px;"
                        onclick="window.deleteNewsCategory('${cat.id}')">Xóa</button>
                </td>
            `;
            tbody.appendChild(tr);
        }
    };

    window.openAddNewsCategoryForm = function () {
        document.getElementById('newscat-form-title').innerText = 'Tạo mới Chuyên mục';
        document.getElementById('newscat-edit-id').value = '';
        document.getElementById('newscat-title').value = '';
        document.getElementById('newscat-slug').value = '';
        document.getElementById('newscat-desc').value = '';
        document.getElementById('newscat-content').value = '';
        document.getElementById('newscat-parent').value = '';
        document.getElementById('newscat-layout').value = 'default';
        document.getElementById('newscat-lang').value = 'vi';
        document.getElementById('newscat-show-home').value = '';
        document.getElementById('newscat-show-top').value = '';
        document.getElementById('newscat-order').value = Object.keys(window.newsCategoriesData).length + 1;
        document.getElementById('newscat-color').value = '';
        document.getElementById('newscat-status').checked = true;
        document.getElementById('newscat-img-alt').value = '';
        document.getElementById('newscat-seo-title').value = '';
        document.getElementById('newscat-seo-keywords').value = '';
        document.getElementById('newscat-seo-desc').value = '';
        document.getElementById('newscat-keywords').value = '';

        window.updateParentCategoryOptions();

        document.getElementById('news-list').style.display = 'none';
        document.getElementById('news-cat-list').style.display = 'none';
        document.getElementById('news-tag-list').style.display = 'none';
        document.getElementById('news-tag-mapping').style.display = 'none';
        document.getElementById('news-cat-form').style.display = 'block';
    };

    window.editNewsCategory = function (id) {
        const cat = window.newsCategoriesData[id];
        if (!cat) return;

        document.getElementById('newscat-form-title').innerText = 'Chỉnh sửa Chuyên mục #' + id;
        document.getElementById('newscat-edit-id').value = cat.id;
        document.getElementById('newscat-title').value = cat.name;
        document.getElementById('newscat-slug').value = cat.slug;
        document.getElementById('newscat-desc').value = cat.desc || '';
        document.getElementById('newscat-content').value = cat.content || '';
        document.getElementById('newscat-parent').value = cat.parent || '';
        document.getElementById('newscat-layout').value = cat.layout || 'default';
        document.getElementById('newscat-lang').value = cat.lang || 'vi';
        document.getElementById('newscat-show-home').value = cat.showHome || '';
        document.getElementById('newscat-show-top').value = cat.showTop || '';
        document.getElementById('newscat-order').value = cat.order || 0;
        document.getElementById('newscat-color').value = cat.color || '';
        document.getElementById('newscat-status').checked = (cat.status === 'Active');
        document.getElementById('newscat-img-alt').value = cat.imgAlt || '';
        document.getElementById('newscat-seo-title').value = cat.seoTitle || '';
        document.getElementById('newscat-seo-keywords').value = cat.seoKeywords || '';
        document.getElementById('newscat-seo-desc').value = cat.seoDesc || '';
        document.getElementById('newscat-keywords').value = cat.keywords || '';

        window.updateParentCategoryOptions();

        document.getElementById('news-list').style.display = 'none';
        document.getElementById('news-cat-list').style.display = 'none';
        document.getElementById('news-tag-list').style.display = 'none';
        document.getElementById('news-tag-mapping').style.display = 'none';
        document.getElementById('news-cat-form').style.display = 'block';
    };

    window.saveNewsCategoryAction = function () {
        const id = document.getElementById('newscat-edit-id').value || 'cat-' + (Object.keys(window.newsCategoriesData).length + 1);
        const name = document.getElementById('newscat-title').value.trim();
        const slug = document.getElementById('newscat-slug').value.trim();

        if (!name || !slug) {
            showLdpToast('Vui lòng nhập đầy đủ Tên chuyên mục và Biệt danh (slug)!');
            return;
        }

        window.newsCategoriesData[id] = {
            id: id,
            name: name,
            slug: slug,
            desc: document.getElementById('newscat-desc').value.trim(),
            content: document.getElementById('newscat-content').value.trim(),
            parent: document.getElementById('newscat-parent').value,
            layout: document.getElementById('newscat-layout').value,
            lang: document.getElementById('newscat-lang').value,
            showHome: document.getElementById('newscat-show-home').value.trim(),
            showTop: document.getElementById('newscat-show-top').value.trim(),
            order: parseInt(document.getElementById('newscat-order').value) || 0,
            color: document.getElementById('newscat-color').value.trim(),
            status: document.getElementById('newscat-status').checked ? 'Active' : 'Draft',
            imgAlt: document.getElementById('newscat-img-alt').value.trim(),
            seoTitle: document.getElementById('newscat-seo-title').value.trim(),
            seoKeywords: document.getElementById('newscat-seo-keywords').value.trim(),
            seoDesc: document.getElementById('newscat-seo-desc').value.trim(),
            keywords: document.getElementById('newscat-keywords').value.trim()
        };

        window.updateArticleCategoryOptions();

        window.renderNewsCategoriesTable();
        document.getElementById('news-cat-form').style.display = 'none';
        document.getElementById('news-cat-list').style.display = 'block';
        showLdpToast('Đã lưu chuyên mục tin tức thành công!');
    };

    window.deleteNewsCategory = function (id) {
        const cat = window.newsCategoriesData[id];
        if (!cat) return;

        if (confirm(`Bạn có chắc chắn muốn xóa chuyên mục "${cat.name}" không?`)) {
            delete window.newsCategoriesData[id];
            window.renderNewsCategoriesTable();
            window.updateArticleCategoryOptions();
            showLdpToast('Đã xóa chuyên mục thành công!');
        }
    };

    window.updateArticleCategoryOptions = function () {
        const selectEl = document.getElementById('art-category');
        if (!selectEl) return;
        const currentVal = selectEl.value;
        selectEl.innerHTML = '';
        for (let id in window.newsCategoriesData) {
            const cat = window.newsCategoriesData[id];
            const opt = document.createElement('option');
            opt.value = cat.name;
            opt.innerText = cat.name;
            selectEl.appendChild(opt);
        }
        if (currentVal && Array.from(selectEl.options).some(opt => opt.value === currentVal)) {
            selectEl.value = currentVal;
        }
    };

    window.updateParentCategoryOptions = function () {
        const selectEl = document.getElementById('newscat-parent');
        if (!selectEl) return;
        const currentVal = selectEl.value;
        selectEl.innerHTML = '<option value="">— Chọn chuyên mục cha —</option>';
        for (let id in window.newsCategoriesData) {
            const cat = window.newsCategoriesData[id];
            const currentEditId = document.getElementById('newscat-edit-id').value;
            if (cat.id === currentEditId) continue;

            const opt = document.createElement('option');
            opt.value = cat.id;
            opt.innerText = cat.name;
            selectEl.appendChild(opt);
        }
        if (currentVal && Array.from(selectEl.options).some(opt => opt.value === currentVal)) {
            selectEl.value = currentVal;
        }
    };

    window.toggleNewsSeoAccordion = function () {
        const content = document.getElementById('news-seo-content');
        const icon = document.getElementById('news-seo-icon');
        if (content.style.display === 'none') {
            content.style.display = 'flex';
            icon.innerText = '▼';
        } else {
            content.style.display = 'none';
            icon.innerText = '▲';
        }
    };

    // Update stats
    window.updateNewsStats = function () {
        let total = 0, pub = 0, draft = 0, sched = 0, feat = 0;
        for (let id in window.newsArticlesData) {
            const art = window.newsArticlesData[id];
            total++;
            if (art.status === 'Published') pub++;
            else if (art.status === 'Draft') draft++;
            else if (art.status === 'Scheduled') sched++;
            if (art.featured) feat++;
        }
        const elTotal = document.querySelector('.news-stat-total');
        const elPub = document.querySelector('.news-stat-pub');
        const elDraft = document.querySelector('.news-stat-draft');
        const elSched = document.querySelector('.news-stat-sched');

        if (elTotal) elTotal.innerText = total;
        if (elPub) elPub.innerText = pub;
        if (elDraft) elDraft.innerText = draft;
        if (elSched) elSched.innerText = sched;
    };

    // Render article table
    window.renderNewsTableHTML = function () {
        const tbody = document.querySelector('#news-list table tbody');
        if (!tbody) return;
        tbody.innerHTML = '';

        const searchKw = (document.querySelector('#news-list input[placeholder="Tìm kiếm bài viết..."]')?.value || '').toLowerCase().trim();
        const channelVal = document.querySelector('#news-list select')?.value || 'all';

        for (let id in window.newsArticlesData) {
            const art = window.newsArticlesData[id];

            if (searchKw && !art.title.toLowerCase().includes(searchKw) && !art.slug.toLowerCase().includes(searchKw)) {
                continue;
            }
            if (channelVal !== 'all' && art.channel !== channelVal) {
                continue;
            }

            const tr = document.createElement('tr');
            tr.setAttribute('data-id', art.id);
            tr.setAttribute('data-channel', art.channel);

            const isChecked = window.selectedNewsIds.includes(art.id) ? 'checked' : '';
            const starIcon = art.featured ? '⭐' : '☆';
            const starColor = art.featured ? '#f59e0b' : '#94a3b8';

            let statusBadge = '';
            if (art.status === 'Published') {
                statusBadge = '<span class="badge active news-art-status-badge">Published</span>';
            } else if (art.status === 'Draft') {
                statusBadge = '<span class="badge warning news-art-status-badge">Draft</span>';
            } else if (art.status === 'Scheduled') {
                statusBadge = '<span class="badge info news-art-status-badge" style="background:rgba(56,189,248,0.15); color:#38bdf8;">Scheduled</span>';
            } else if (art.status === 'Hidden') {
                statusBadge = '<span class="badge" style="background:rgba(239,68,68,0.15); color:#ef4444;">Hidden</span>';
            }

            let chanBadge = '';
            if (art.channel === 'fpt-telecom') {
                chanBadge = '<span class="badge" style="background:rgba(255,107,0,0.15); color:#ff8c42;">FPT Telecom</span>';
            } else if (art.channel === 'fpt-camera') {
                chanBadge = '<span class="badge" style="background:rgba(245,158,11,0.15); color:#fbbf24;">FPT Camera</span>';
            } else if (art.channel === 'fpt-play') {
                chanBadge = '<span class="badge" style="background:rgba(167,139,250,0.15); color:#a78bfa;">FPT Play</span>';
            }

            const catBadge = `<span class="badge news-art-cat" style="background:rgba(249,115,22,0.15); color:#FB923C;">${art.category}</span>`;

            tr.innerHTML = `
                <td style="text-align:center;">
                    <input type="checkbox" class="news-row-check news-select-item" data-id="${art.id}" ${isChecked} onclick="window.onNewsSelectChange(); if(window.onNewsRowCheck) window.onNewsRowCheck();" style="width:16px; height:16px; accent-color:var(--primary); cursor:pointer;">
                </td>
                <td>
                    <img src="${art.thumbUrl}" alt="News Thumbnail" style="width:60px; height:40px; border-radius:4px; object-fit:cover; border:1px solid var(--border-glass);">
                </td>
                <td>
                    <div style="font-weight:700; color:#fff;" class="news-art-title">${art.title}</div>
                    <div style="font-size:11px; color:var(--text-muted);" class="news-art-slug">/tin-tuc/${art.slug}</div>
                </td>
                <td style="text-align:center;">
                    <span class="news-art-featured-star" style="cursor:pointer; font-size:15px; color:${starColor};" onclick="window.toggleNewsFeaturedDirect('${art.id}')" title="Bật/Tắt nổi bật">${starIcon}</span>
                </td>
                <td>${chanBadge}</td>
                <td>${catBadge}</td>
                <td class="news-art-author">${art.author}</td>
                <td class="news-art-date">${art.date}</td>
                <td>${statusBadge}</td>
                <td style="text-align:right; white-space:nowrap;">
                    <div style="display:inline-flex; gap:6px; justify-content:flex-end; align-items:center;">
                        <button class="btn btn-secondary btn-sm" style="color:var(--primary); border-color:var(--primary); margin:0;" onclick="window.editNewsArticle('${art.id}')">Sửa</button>
                        ${art.status !== 'Hidden'
                    ? `<button class="btn btn-secondary btn-sm" style="color:var(--text-muted); border-color:var(--text-muted); margin:0;" onclick="window.hideNewsArticleDirect('${art.id}')" title="Ẩn nhanh bài viết">👁️‍🗨️ Ẩn</button>`
                    : `<button class="btn btn-secondary btn-sm" style="color:var(--success); border-color:var(--success); margin:0;" onclick="window.publishNewsArticleDirect('${art.id}')" title="Xuất bản lại">✔️ Đăng</button>`
                }
                        <button class="btn btn-secondary btn-sm" style="color:var(--danger); border-color:var(--danger); margin:0;" onclick="window.deleteNewsArticle('${art.id}')">Xóa</button>
                    </div>
                </td>
            `;
            tbody.appendChild(tr);
        }

        window.onNewsSelectChange();
        window.updateNewsStats();
        window.syncNewsToMockArticles();
        if (typeof window.filterNewsTable === 'function') {
            window.filterNewsTable();
        }
    };

    window.toggleSelectAllNews = function (cb) {
        const items = document.querySelectorAll('.news-select-item');
        window.selectedNewsIds = [];
        items.forEach(item => {
            item.checked = cb.checked;
            if (cb.checked) {
                window.selectedNewsIds.push(item.getAttribute('data-id'));
            }
        });
        window.updateBulkNewsButtonState();
    };

    window.onNewsSelectChange = function () {
        const items = document.querySelectorAll('.news-select-item');
        window.selectedNewsIds = [];
        let allChecked = items.length > 0;
        items.forEach(item => {
            if (item.checked) {
                window.selectedNewsIds.push(item.getAttribute('data-id'));
            } else {
                allChecked = false;
            }
        });
        const masterCb = document.getElementById('news-check-all');
        if (masterCb) masterCb.checked = allChecked;
        window.updateBulkNewsButtonState();
    };

    window.updateBulkNewsButtonState = function () {
        const bulkBtn = document.getElementById('news-bulk-hide-btn');
        if (bulkBtn) {
            if (window.selectedNewsIds.length > 0) {
                bulkBtn.disabled = false;
                bulkBtn.style.opacity = '1';
                bulkBtn.innerText = `👁️‍🗨️ Ẩn hàng loạt (${window.selectedNewsIds.length})`;
            } else {
                bulkBtn.disabled = true;
                bulkBtn.style.opacity = '0.5';
                bulkBtn.innerText = `👁️‍🗨️ Ẩn hàng loạt`;
            }
        }
    };

    window.clearNewsSelection = function () {
        window.selectedNewsIds = [];
        const masterCb = document.getElementById('news-check-all');
        if (masterCb) masterCb.checked = false;
        document.querySelectorAll('.news-select-item').forEach(item => item.checked = false);
        window.updateBulkNewsButtonState();
    };

    window.bulkNewsAction = function (action) {
        if (window.selectedNewsIds.length === 0) return;
        if (action === 'hide') {
            if (confirm(`Bạn có chắc chắn muốn ẩn ${window.selectedNewsIds.length} bài viết đã chọn?`)) {
                window.selectedNewsIds.forEach(id => {
                    if (window.newsArticlesData[id]) {
                        window.newsArticlesData[id].status = 'Hidden';
                    }
                });
                showLdpToast(`Đã ẩn thành công ${window.selectedNewsIds.length} bài viết!`);
                window.clearNewsSelection();
                window.renderNewsTableHTML();
            }
        }
    };

    window.toggleNewsFeaturedDirect = function (id) {
        const art = window.newsArticlesData[id];
        if (art) {
            art.featured = !art.featured;
            window.renderNewsTableHTML();
            showLdpToast(`Đã ${art.featured ? 'bật' : 'tắt'} nổi bật bài viết thành công!`);
        }
    };

    window.hideNewsArticleDirect = function (id) {
        const art = window.newsArticlesData[id];
        if (art) {
            if (confirm(`Bạn có chắc chắn muốn ẨN bài viết "${art.title}" khỏi giao diện người dùng?\nTrạng thái sẽ chuyển thành Hidden.`)) {
                art.status = 'Hidden';
                window.renderNewsTableHTML();
                showLdpToast('Đã ẩn bài viết thành công!');
            }
        }
    };

    window.publishNewsArticleDirect = function (id) {
        const art = window.newsArticlesData[id];
        if (art) {
            art.status = 'Published';
            window.renderNewsTableHTML();
            showLdpToast('Đã xuất bản bài viết thành công!');
        }
    };

    window.resetNewsForm = function (shouldFillDemo = false) {
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
        document.getElementById('art-status').value = 'Published';

        document.getElementById('art-thumbnail-url').value = 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=150&q=80';
        document.getElementById('art-thumb-preview').src = 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=150&q=80';
        document.getElementById('art-thumb-filename').innerText = 'img_thumbnail_default.png';
        document.getElementById('art-thumbnail-alt').value = '';
        document.getElementById('art-thumbnail-caption').value = '';
        document.getElementById('art-crop-ratio').value = '3:2';
        const displayEl1 = document.getElementById('art-crop-ratio-display');
        if (displayEl1) displayEl1.innerText = '3:2';

        document.getElementById('art-seo-title').value = '';
        document.getElementById('art-seo-desc').value = '';
        const titleCountEl = document.getElementById('seo-title-count');
        if (titleCountEl) titleCountEl.innerText = '0 / 60';
        const descCountEl = document.getElementById('seo-desc-count');
        if (descCountEl) descCountEl.innerText = '0 / 160';
        document.getElementById('art-seo-title').style.borderColor = '';
        document.getElementById('art-seo-desc').style.borderColor = '';

        const autosaveEl = document.getElementById('art-autosave-status');
        if (autosaveEl) autosaveEl.innerText = '';
        const featuredEl = document.getElementById('art-featured');
        if (featuredEl) featuredEl.checked = false;

        window.onArticleStatusChange();

        if (shouldFillDemo) {
            window.loadMockArticleToForm(false);
        }
    };

    window.editNewsArticle = function (id) {
        const art = window.newsArticlesData[id];
        if (!art) return;

        document.getElementById('article-form-title').innerText = 'Chỉnh sửa Bài viết #' + id;
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
        document.getElementById('art-thumbnail-alt').value = art.thumbAlt || '';
        document.getElementById('art-thumbnail-caption').value = art.thumbCaption || '';
        document.getElementById('art-crop-ratio').value = art.cropRatio || '3:2';
        const displayEl2 = document.getElementById('art-crop-ratio-display');
        if (displayEl2) displayEl2.innerText = art.cropRatio || '3:2';

        document.getElementById('art-seo-title').value = art.seoTitle || '';
        document.getElementById('art-seo-desc').value = art.seoDesc || '';
        const featuredEl = document.getElementById('art-featured');
        if (featuredEl) featuredEl.checked = art.featured || false;

        if (art.status === 'Scheduled' && art.scheduledTime) {
            const schedTimeEl = document.getElementById('art-schedule-datetime');
            if (schedTimeEl) schedTimeEl.value = art.scheduledTime;
        }

        window.onSeoInput('title');
        window.onSeoInput('desc');
        window.onArticleStatusChange();

        window.openNewsArticleDrawer();
        const autosaveEl = document.getElementById('art-autosave-status');
        if (autosaveEl) autosaveEl.innerText = '';

        window.startAutoSaveTimer();
    };

    window.saveNewsArticleAction = function () {
        const id = document.getElementById('article-id').value || 'news-' + (Object.keys(window.newsArticlesData).length + 1);
        const title = document.getElementById('art-title').value.trim();
        const slug = document.getElementById('art-slug').value.trim();
        const sapo = document.getElementById('art-sapo').value.trim();
        const content = document.getElementById('art-content').value.trim();
        const tags = document.getElementById('art-tags').value.trim();
        const category = document.getElementById('art-category').value;
        const channel = document.getElementById('art-channel').value;
        const author = document.getElementById('art-author').value.trim() || 'Admin';
        const status = document.getElementById('art-status').value;
        const thumbUrl = document.getElementById('art-thumbnail-url').value;
        const thumbAlt = document.getElementById('art-thumbnail-alt').value.trim();
        const thumbCaption = document.getElementById('art-thumbnail-caption').value.trim();
        const cropRatio = document.getElementById('art-crop-ratio').value;
        const seoTitle = document.getElementById('art-seo-title').value.trim();
        const seoDesc = document.getElementById('art-seo-desc').value.trim();
        const featuredEl = document.getElementById('art-featured');
        const featured = featuredEl ? featuredEl.checked : false;

        if (!title || !slug || !content || !sapo) {
            showLdpToast('Vui lòng nhập đầy đủ các thông tin bắt buộc (*)!');
            return;
        }

        let scheduledTime = '';
        if (status === 'Scheduled') {
            const schedTimeEl = document.getElementById('art-schedule-datetime');
            scheduledTime = schedTimeEl ? schedTimeEl.value : '';
            if (!scheduledTime) {
                showLdpToast('Vui lòng chọn ngày giờ đặt lịch xuất bản!');
                return;
            }
        }

        const today = new Date();
        const dateStr = today.getDate().toString().padStart(2, '0') + '/' + (today.getMonth() + 1).toString().padStart(2, '0') + '/' + today.getFullYear();

        window.newsArticlesData[id] = {
            id: id,
            title: title,
            slug: slug,
            sapo: sapo,
            content: content,
            tags: tags,
            category: category,
            channel: channel,
            author: author,
            status: status,
            thumbUrl: thumbUrl,
            thumbAlt: thumbAlt,
            thumbCaption: thumbCaption,
            cropRatio: cropRatio,
            seoTitle: seoTitle,
            seoDesc: seoDesc,
            featured: featured,
            date: dateStr,
            scheduledTime: scheduledTime
        };

        window.stopAutoSaveTimer();
        window.closeNewsArticleDrawer();

        window.renderNewsTableHTML();
        showLdpToast('Đã lưu bài viết thành công!');
    };

    window.saveNewsDraftAction = function () {
        document.getElementById('art-status').value = 'Draft';
        window.onArticleStatusChange();
        window.saveNewsArticleAction();
        showLdpToast('Đã lưu bài viết ở trạng thái Bản nháp!');
    };

    window.deleteNewsArticle = function (id) {
        if (confirm('Bạn có chắc chắn muốn xóa bài viết này không?')) {
            delete window.newsArticlesData[id];
            window.renderNewsTableHTML();
            showLdpToast('Đã xóa bài viết thành công!');
        }
    };

    // Crop Modal
    window.openNewsCropModal = function () {
        document.getElementById('news-crop-modal').style.display = 'flex';
        const currentUrl = document.getElementById('art-thumbnail-url').value;
        const cropImg = document.getElementById('news-crop-target-img');
        if (cropImg && currentUrl) cropImg.src = currentUrl;

        const currentRatio = document.getElementById('art-crop-ratio').value;
        window.selectCropRatio(currentRatio);
    };

    window.closeNewsCropModal = function () {
        document.getElementById('news-crop-modal').style.display = 'none';
    };

    window.selectCropRatio = function (ratio) {
        document.querySelectorAll('.crop-ratio-btn').forEach(btn => {
            if (btn.getAttribute('data-ratio') === ratio) {
                btn.classList.add('active');
                btn.style.borderColor = 'var(--primary)';
                btn.style.color = '#fff';
            } else {
                btn.classList.remove('active');
                btn.style.borderColor = 'var(--border-glass)';
                btn.style.color = 'var(--text-muted)';
            }
        });
        const overlay = document.getElementById('news-crop-box-overlay');
        if (overlay) {
            if (ratio === '3:2') {
                overlay.style.width = '300px';
                overlay.style.height = '200px';
            } else if (ratio === '16:9') {
                overlay.style.width = '320px';
                overlay.style.height = '180px';
            } else if (ratio === '4:3') {
                overlay.style.width = '280px';
                overlay.style.height = '210px';
            } else if (ratio === '1:1') {
                overlay.style.width = '220px';
                overlay.style.height = '220px';
            }
        }
    };

    window.applyCropImage = function () {
        let activeBtn = document.querySelector('.crop-ratio-btn.active');
        let ratio = activeBtn ? activeBtn.getAttribute('data-ratio') : '3:2';
        document.getElementById('art-crop-ratio').value = ratio;
        const displayEl3 = document.getElementById('art-crop-ratio-display');
        if (displayEl3) displayEl3.innerText = ratio;
        window.closeNewsCropModal();
        showLdpToast(`Đã cắt ảnh theo tỷ lệ ${ratio} thành công!`);
        window.triggerAutoSave();
    };

    // Load mock Vietnamese article
    window.loadMockArticleToForm = function (isAuto = false) {
        const rand = Math.floor(Math.random() * 3) + 1;
        let mock = null;
        if (rand === 1) {
            mock = {
                title: 'Đăng ký gói Lux Wi-Fi 6 FPT nhận ngàn ưu đãi',
                slug: 'dang-ky-goi-lux-wifi-6-fpt',
                sapo: 'Gói cước Lux cao cấp tích hợp công nghệ Wi-Fi 6 thế hệ mới giúp tăng tốc độ truyền tải gấp 10 lần, giảm độ trễ tối đa cho game thủ và doanh nghiệp.',
                content: '## Giới thiệu gói cước Lux FPT\nGói cước LUX là giải pháp Internet cao cấp đầu tiên tại Việt Nam được trang bị công nghệ Wi-Fi 6 hiện đại nhất.\n\n## Đặc tính kỹ thuật vượt trội\nVới băng thông rộng và khả năng giảm nhiễu sóng, gói cước này cam kết mang đến trải nghiệm lướt web mượt mà không lo gián đoạn.\n\n## Ưu đãi khi đăng ký mới\nKhách hàng đăng ký gói LUX sẽ nhận ngay thiết bị cao cấp Access Point Wi-Fi 6, miễn phí lắp đặt 100%.',
                tags: 'wifi6, internet, lux',
                category: 'Tin công nghệ',
                thumbUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=150&q=80',
                thumbAlt: 'Trải nghiệm internet mượt mà với wifi 6 fpt',
                thumbCaption: 'Thiết bị modem wifi 6 chất lượng cao của FPT',
                seoTitle: 'Đăng Ký Gói Cước Lux Wi-Fi 6 FPT Tốc Độ Cao Cho Doanh Nghiệp',
                seoDesc: 'Lắp đặt gói Lux FPT Wi-Fi 6 tốc độ cực cao, băng thông rộng, trang bị miễn phí modem và thiết bị phát mesh sóng khỏe, tặng thêm tháng cước.'
            };
        } else if (rand === 2) {
            mock = {
                title: 'FPT Play độc quyền phát sóng Vòng loại World Cup 2026',
                slug: 'fpt-play-doc-quyen-phat-song-world-cup-2026',
                sapo: 'FPT Play chính thức sở hữu bản quyền truyền thông và phát sóng trực tiếp trọn vẹn toàn bộ các trận đấu kịch tính trong khuôn khổ vòng loại World Cup 2026.',
                content: '## Bản quyền vòng loại World Cup\nTruyền hình FPT Play hân hạnh mang tới cho khán giả Việt Nam các trận đấu nảy lửa thuộc vòng loại World Cup 2026 khu vực châu Á.\n\n## Xem trực tiếp đa nền tảng\nBạn có thể thưởng thức các trận đấu đỉnh cao trên Smart TV, Smartphone, Web FPT Play chỉ với 1 tài khoản duy nhất.\n\n## Các gói cước áp dụng\nKhách hàng sở hữu gói SMAX hoặc VIP sẽ được xem trực tiếp mà không tốn thêm bất kỳ chi phí phát sinh nào.',
                tags: 'fpt-play, the-thao, world-cup',
                category: 'Tin khuyến mãi',
                thumbUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=150&q=80',
                thumbAlt: 'Cổ động viên náo nhiệt trên khán đài world cup',
                thumbCaption: 'Hình ảnh sống động trực tiếp vòng loại World Cup 2026',
                seoTitle: 'FPT Play Trực Tiếp Độc Quyền Vòng Loại World Cup 2026 Mới Nhất',
                seoDesc: 'Đăng ký gói FPT Play để xem trực tiếp và trọn vẹn bản quyền các trận đấu vòng loại World Cup 2026 sắc nét, tốc độ cực nhanh không giật lag.'
            };
        } else {
            mock = {
                title: 'Hướng dẫn tự cấu hình đổi mật khẩu Wifi FPT tại nhà',
                slug: 'huong-dan-doi-mat-khau-wifi-fpt',
                sapo: 'Chỉ với 3 bước đơn giản thông qua ứng dụng Hi FPT hoặc trình duyệt web, bạn có thể tự đổi mật khẩu Wifi FPT cực kỳ nhanh chóng và an toàn bảo mật.',
                content: '## Tại sao cần đổi mật khẩu wifi định kỳ\nĐổi mật khẩu giúp bảo vệ đường truyền internet của bạn tránh bị câu trộm làm chậm mạng và tăng tính an toàn bảo mật.\n\n## Hướng dẫn 3 bước thực hiện trên Hi FPT\nBước 1: Tải ứng dụng Hi FPT và đăng nhập bằng số điện thoại đăng ký mạng.\nBước 2: Vào mục quản lý thiết bị modem và chọn Đổi mật khẩu.\nBước 3: Nhập mật khẩu mới và bấm xác nhận để hoàn tất.',
                tags: 'internet, hotro-kythuat, wifi',
                category: 'Hướng dẫn sử dụng',
                thumbUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=150&q=80',
                thumbAlt: 'Màn hình cấu hình thiết bị modem wifi fpt',
                thumbCaption: 'Giao diện đổi mật khẩu wifi trên ứng dụng Hi FPT',
                seoTitle: 'Cách Đổi Mật Khẩu Wifi FPT Tại Nhà Nhanh Nhất Qua Hi FPT',
                seoDesc: 'Hướng dẫn chi tiết từng bước đổi mật khẩu wifi fpt trên điện thoại thông qua app Hi FPT hoặc trình duyệt. Cực kỳ nhanh gọn, dễ làm.'
            };
        }

        document.getElementById('art-title').value = mock.title;
        document.getElementById('art-slug').value = mock.slug;
        document.getElementById('art-sapo').value = mock.sapo;
        document.getElementById('art-content').value = mock.content;
        document.getElementById('art-tags').value = mock.tags;
        document.getElementById('art-category').value = mock.category;
        document.getElementById('art-thumbnail-url').value = mock.thumbUrl;
        document.getElementById('art-thumb-preview').src = mock.thumbUrl;
        document.getElementById('art-thumb-filename').innerText = mock.thumbUrl.substring(mock.thumbUrl.lastIndexOf('/') + 1);
        document.getElementById('art-thumbnail-alt').value = mock.thumbAlt;
        document.getElementById('art-thumbnail-caption').value = mock.thumbCaption;
        document.getElementById('art-seo-title').value = mock.seoTitle;
        document.getElementById('art-seo-desc').value = mock.seoDesc;

        window.onSeoInput('title');
        window.onSeoInput('desc');

        if (!isAuto) {
            showLdpToast('Đã điền dữ liệu mẫu bài viết thành công!');
        }
    };

    window.clearNewsForm = function () {
        if (confirm('Bạn có chắc muốn xóa sạch toàn bộ nội dung đang viết trên Form?')) {
            window.resetNewsForm(false);
            showLdpToast('Đã xóa sạch nội dung Form!');
        }
    };

    // SEO Counter
    window.onSeoInput = function (type) {
        if (type === 'title') {
            const el = document.getElementById('art-seo-title');
            const cnt = document.getElementById('seo-title-count');
            if (!el || !cnt) return;
            const len = el.value.length;
            cnt.innerText = `${len} / 60`;
            if (len > 60) {
                cnt.style.color = 'var(--danger)';
                el.style.borderColor = 'var(--danger)';
            } else if (len >= 50) {
                cnt.style.color = 'var(--success)';
                el.style.borderColor = 'var(--success)';
            } else {
                cnt.style.color = 'var(--text-muted)';
                el.style.borderColor = '';
            }
        } else if (type === 'desc') {
            const el = document.getElementById('art-seo-desc');
            const cnt = document.getElementById('seo-desc-count');
            if (!el || !cnt) return;
            const len = el.value.length;
            cnt.innerText = `${len} / 160`;
            if (len > 160) {
                cnt.style.color = 'var(--danger)';
                el.style.borderColor = 'var(--danger)';
            } else if (len >= 120) {
                cnt.style.color = 'var(--success)';
                el.style.borderColor = 'var(--success)';
            } else {
                cnt.style.color = 'var(--text-muted)';
                el.style.borderColor = '';
            }
        }
        // CMS-06: Live snippet preview update
        window.updateSeoSnippetPreview();
    };

    // CMS-06: Snippet preview giả lập Google
    window.updateSeoSnippetPreview = function () {
        const seoTitle = document.getElementById('art-seo-title')?.value.trim();
        const artTitle = document.getElementById('art-title')?.value.trim();
        const seoDesc = document.getElementById('art-seo-desc')?.value.trim();
        const artSapo = document.getElementById('art-sapo')?.value.trim();
        const slug = document.getElementById('art-slug')?.value.trim();

        const snippetTitle = document.getElementById('seo-preview-title');
        const snippetUrl = document.getElementById('seo-preview-slug');
        const snippetDesc = document.getElementById('seo-preview-desc');

        if (snippetTitle) snippetTitle.innerText = seoTitle || artTitle || 'Tiêu đề SEO sẽ hiển thị ở đây';
        if (snippetUrl) snippetUrl.innerText = slug || 'url-slug-bai-viet';
        if (snippetDesc) snippetDesc.innerText = seoDesc || artSapo || 'Meta description sẽ hiển thị ở đây khi xuất hiện trên kết quả tìm kiếm Google...';
    };

    // CMS-08: Kiểm tra slug trùng
    window.validateSlugUnique = function (currentSlug) {
        const currentId = document.getElementById('article-id')?.value;
        for (let id in window.newsArticlesData) {
            if (id !== currentId && window.newsArticlesData[id].slug === currentSlug) {
                return false;
            }
        }
        return true;
    };

    window.onSlugBlur = function () {
        const slugEl = document.getElementById('art-slug');
        if (!slugEl) return;
        const slug = slugEl.value.trim();
        if (!slug) return;
        if (!window.validateSlugUnique(slug)) {
            slugEl.style.borderColor = 'var(--danger)';
            showLdpToast('⚠️ Slug này đã tồn tại! Vui lòng chọn slug khác.');
            // Gợi ý slug thay thế
            slugEl.value = slug + '-' + Math.floor(Math.random() * 100);
        } else {
            slugEl.style.borderColor = '';
        }
        window.updateSeoSnippetPreview();
    };

    // Auto-save logic
    window.autoSaveTimer = null;
    window.isFormChanged = false;

    window.triggerAutoSave = function () {
        window.isFormChanged = true;
    };

    window.startAutoSaveTimer = function () {
        window.stopAutoSaveTimer();
        window.isFormChanged = false;
        window.autoSaveTimer = setInterval(() => {
            if (window.isFormChanged) {
                const title = document.getElementById('art-title').value.trim();
                if (title) {
                    const now = new Date();
                    const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0') + ':' + now.getSeconds().toString().padStart(2, '0');
                    const autosaveEl = document.getElementById('art-autosave-status');
                    if (autosaveEl) {
                        autosaveEl.innerText = `🔄 Tự động lưu nháp thành công lúc ${timeStr}`;
                    }
                    window.isFormChanged = false;

                    const id = document.getElementById('article-id').value || 'news-temp-autosave';
                    const slug = document.getElementById('art-slug').value.trim() || 'temp-slug';
                    const sapo = document.getElementById('art-sapo').value.trim();
                    const content = document.getElementById('art-content').value.trim();
                    const tags = document.getElementById('art-tags').value.trim();
                    const category = document.getElementById('art-category').value;
                    const channel = document.getElementById('art-channel').value;
                    const author = document.getElementById('art-author').value.trim() || 'Admin';
                    const status = 'Draft';
                    const thumbUrl = document.getElementById('art-thumbnail-url').value;
                    const seoTitle = document.getElementById('art-seo-title').value.trim();
                    const seoDesc = document.getElementById('art-seo-desc').value.trim();
                    const featuredEl = document.getElementById('art-featured');
                    const featured = featuredEl ? featuredEl.checked : false;

                    window.newsArticlesData[id] = {
                        id: id,
                        title: title,
                        slug: slug,
                        sapo: sapo,
                        content: content,
                        tags: tags,
                        category: category,
                        channel: channel,
                        author: author,
                        status: status,
                        thumbUrl: thumbUrl,
                        thumbAlt: document.getElementById('art-thumbnail-alt').value.trim(),
                        thumbCaption: document.getElementById('art-thumbnail-caption').value.trim(),
                        cropRatio: document.getElementById('art-crop-ratio').value,
                        seoTitle: seoTitle,
                        seoDesc: seoDesc,
                        featured: featured,
                        date: now.getDate().toString().padStart(2, '0') + '/' + (now.getMonth() + 1).toString().padStart(2, '0') + '/' + now.getFullYear()
                    };
                }
            }
        }, 30000);
    };

    window.stopAutoSaveTimer = function () {
        if (window.autoSaveTimer) {
            clearInterval(window.autoSaveTimer);
            window.autoSaveTimer = null;
        }
    };

    window.onArticleStatusChange = function () {
        const status = document.getElementById('art-status').value;
        const scheduledGroup = document.getElementById('art-schedule-section');
        if (scheduledGroup) {
            if (status === 'Scheduled') {
                scheduledGroup.style.display = 'block';
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                tomorrow.setMinutes(0);
                tomorrow.setSeconds(0);
                const tzoffset = tomorrow.getTimezoneOffset() * 60000;
                const localISOTime = (new Date(tomorrow.getTime() - tzoffset)).toISOString().slice(0, 16);
                const schedTimeEl = document.getElementById('art-schedule-datetime');
                if (schedTimeEl) schedTimeEl.value = localISOTime;
            } else {
                scheduledGroup.style.display = 'none';
            }
        }
    };

    // Preview
    window.previewNewsArticle = function () {
        const title = document.getElementById('art-title').value.trim() || 'Tiêu đề bài viết chưa nhập';
        const sapo = document.getElementById('art-sapo').value.trim() || 'Sa-po bài viết đang bỏ trống...';
        const content = document.getElementById('art-content').value.trim() || 'Nội dung chi tiết bài viết chưa nhập...';
        const channel = document.getElementById('art-channel').value;
        const category = document.getElementById('art-category').value;
        const author = document.getElementById('art-author').value.trim() || 'Admin';
        const thumbUrl = document.getElementById('art-thumbnail-url').value;
        const thumbAlt = document.getElementById('art-thumbnail-alt').value.trim();
        const thumbCaption = document.getElementById('art-thumbnail-caption').value.trim();

        document.getElementById('news-preview-modal').style.display = 'flex';

        document.getElementById('prev-art-title').innerText = title;
        document.getElementById('prev-art-meta').innerText = `Tác giả: ${author} · Chuyên mục: ${category} · Kênh: ${channel}`;
        document.getElementById('prev-art-sapo').innerText = sapo;

        const prevImg = document.getElementById('prev-art-thumb');
        const prevCaption = document.getElementById('prev-art-caption');
        if (prevImg) {
            prevImg.src = thumbUrl;
            prevImg.alt = thumbAlt || title;
        }
        if (prevCaption) {
            prevCaption.innerText = thumbCaption || 'Hình ảnh bài viết';
        }

        const tocContainer = document.getElementById('prev-art-toc-list');
        tocContainer.innerHTML = '';

        const mainContentEl = document.getElementById('prev-art-content-area');
        mainContentEl.innerHTML = '';

        const lines = content.split('\n');
        let tocIndex = 1;
        let finalHtml = '';

        lines.forEach(line => {
            if (line.startsWith('## ')) {
                const headingText = line.substring(3).trim();
                const headingId = 'heading-section-' + tocIndex;

                const li = document.createElement('li');
                li.style.marginBottom = '6px';
                li.innerHTML = `<a href="#${headingId}" style="color:var(--primary); font-size:12.5px; text-decoration:none;" onclick="document.getElementById('${headingId}').scrollIntoView({behavior:'smooth'}); return false;">${tocIndex}. ${headingText}</a>`;
                tocContainer.appendChild(li);

                finalHtml += `<h3 id="${headingId}" style="color:#fff; font-size:16px; margin-top:20px; margin-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:5px;">${headingText}</h3>`;
                tocIndex++;
            } else if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
                finalHtml += `<ul><li style="margin-left:20px; list-style-type:disc; margin-bottom:4px; font-size:13px; color:#ccc;">${line.trim().substring(2)}</li></ul>`;
            } else if (line.trim().match(/^\d+\.\s/)) {
                finalHtml += `<ol><li style="margin-left:20px; list-style-type:decimal; margin-bottom:4px; font-size:13px; color:#ccc;">${line.trim().replace(/^\d+\.\s/, '')}</li></ol>`;
            } else if (line.trim().length > 0) {
                finalHtml += `<p style="font-size:13px; color:#ccc; line-height:1.6; margin-bottom:12px;">${line}</p>`;
            }
        });

        mainContentEl.innerHTML = finalHtml;

        if (tocContainer.children.length === 0) {
            const li = document.createElement('li');
            li.style.color = 'var(--text-muted)';
            li.style.fontSize = '12px';
            li.style.fontStyle = 'italic';
            li.innerText = 'Không phát hiện tiêu đề ## để tạo mục lục.';
            tocContainer.appendChild(li);
        }
    };

    window.closeNewsPreviewModal = function () {
        document.getElementById('news-preview-modal').style.display = 'none';
    };

    // Google Snippet Preview live update
    window.updateSeoSnippetPreview = function () {
        const titleEl = document.getElementById('art-seo-title');
        const descEl = document.getElementById('art-seo-desc');
        const slugEl = document.getElementById('art-slug');
        const artTitle = document.getElementById('art-title');

        const snippetTitle = document.getElementById('seo-preview-title');
        const snippetUrl = document.getElementById('seo-preview-slug');
        const snippetDesc = document.getElementById('seo-preview-desc');

        if (snippetTitle) snippetTitle.innerText = (titleEl && titleEl.value) || (artTitle && artTitle.value) || 'Tiêu đề SEO sẽ hiển thị ở đây';
        if (snippetUrl) snippetUrl.innerText = (slugEl && slugEl.value) || 'url-slug-bai-viet';
        if (snippetDesc) snippetDesc.innerText = (descEl && descEl.value) || 'Meta description sẽ hiển thị ở đây khi xuất hiện trên kết quả tìm kiếm Google...';
    };

    // Slug duplicate check (CMS-08)
    window.onSlugBlur = function () {
        const slugInput = document.getElementById('art-slug');
        const warningEl = document.getElementById('art-slug-warning');
        const okEl = document.getElementById('art-slug-ok');
        const suggestionEl = document.getElementById('art-slug-suggestion');
        const currentId = document.getElementById('article-id').value;

        if (!slugInput || !slugInput.value.trim()) return;

        const slug = slugInput.value.trim();
        let isDuplicate = false;

        for (let id in window.newsArticlesData) {
            if (id !== currentId && window.newsArticlesData[id].slug === slug) {
                isDuplicate = true;
                break;
            }
        }

        if (isDuplicate) {
            const today = new Date();
            const suffix = '-' + today.getDate().toString().padStart(2, '0') + today.getMonth().toString().padStart(2, '0');
            if (warningEl) warningEl.style.display = 'block';
            if (okEl) okEl.style.display = 'none';
            if (suggestionEl) suggestionEl.innerText = slug + suffix;
        } else {
            if (warningEl) warningEl.style.display = 'none';
            if (okEl) okEl.style.display = slug ? 'block' : 'none';
        }
    };

    // Run first rendering setup once document is loaded
    document.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
            window.renderNewsTableHTML();
            window.updateNewsStats();
            window.renderNewsTagsTable();
            window.syncTagMappingToSku();
            window.renderTagMappingTable();
            window.renderNewsCategoriesTable();
            window.updateArticleCategoryOptions();
            window.renderNewsAuthorsTable();
            window.updateArticleAuthorOptions();

            // Đồng bộ master checkbox
            const masterCb = document.getElementById('news-check-all');
            if (masterCb) {
                masterCb.addEventListener('change', function () {
                    window.toggleSelectAllNews(this);
                });
            }
        }, 100);
    });

    // Select filter by card click
    window.selectNewsStatusFilter = function (statusValue, cardElement) {
        const selectEl = document.getElementById('news-search-status');
        if (selectEl) {
            selectEl.value = statusValue;
        }

        // Cập nhật classes active
        document.querySelectorAll('.news-stat-card').forEach((card) => {
            card.classList.remove('active-total', 'active-pub', 'active-draft');
        });

        const cards = document.querySelectorAll('.news-stat-card');
        if (cardElement) {
            if (statusValue === '') {
                cardElement.classList.add('active-total');
            } else if (statusValue === 'Published') {
                cardElement.classList.add('active-pub');
            } else if (statusValue === 'Draft') {
                cardElement.classList.add('active-draft');
            }
        } else {
            // Trường hợp đồng bộ từ dropdown select
            if (statusValue === '') {
                cards[0]?.classList.add('active-total');
            } else if (statusValue === 'Published') {
                cards[1]?.classList.add('active-pub');
            } else if (statusValue === 'Draft') {
                cards[2]?.classList.add('active-draft');
            }
        }

        if (typeof window.filterNewsTable === 'function') {
            window.filterNewsTable();
        }
    };

    window.syncNewsCardFilterFromSelect = function (statusValue) {
        window.selectNewsStatusFilter(statusValue, null);
    };
})();
