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
        if (drawerContent) {
            // Ẩn các danh sách khác
            const listEl = document.getElementById('news-list'); if (listEl) listEl.style.display = 'none';
            const catListEl = document.getElementById('news-cat-list'); if (catListEl) catListEl.style.display = 'none';
            const tagListEl = document.getElementById('news-tag-list'); if (tagListEl) tagListEl.style.display = 'none';
            const tagMapEl = document.getElementById('news-tag-mapping'); if (tagMapEl) tagMapEl.style.display = 'none';
            const authListEl = document.getElementById('news-author-list'); if (authListEl) authListEl.style.display = 'none';
            const authFormEl = document.getElementById('news-author-form'); if (authFormEl) authFormEl.style.display = 'none';
            const catFormEl = document.getElementById('news-cat-form'); if (catFormEl) catFormEl.style.display = 'none';
            const ctListEl = document.getElementById('news-contenttype-list'); if (ctListEl) ctListEl.style.display = 'none';
            const ctFormEl = document.getElementById('news-contenttype-form'); if (ctFormEl) ctFormEl.style.display = 'none';
            
            // Ẩn page-header và tabs
            const pageHeader = document.querySelector('#mod-news .page-header'); if (pageHeader) pageHeader.style.display = 'none';
            const tabs = document.querySelector('#mod-news .tabs'); if (tabs) tabs.style.display = 'none';

            // Ẩn overlay
            if (overlay) overlay.style.display = 'none';

            // Hiển thị form trực tiếp trên trang, reset các thuộc tính position fixed
            drawerContent.style.cssText = 'display:block!important;position:relative!important;width:100%!important;height:auto!important;transform:none!important;box-shadow:none!important;border:none!important;z-index:auto!important;margin:0!important;padding:0!important;pointer-events:auto!important;';
            
            // Scroll lên đầu trang
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    };

    window.closeNewsArticleDrawer = function () {
        const overlay = document.getElementById('news-edit-overlay');
        const drawerContent = document.getElementById('news-item-form');
        if (drawerContent) {
            drawerContent.style.display = 'none';
            drawerContent.style.cssText = 'display:none!important;';
        }
        if (overlay) {
            overlay.style.display = 'none';
        }
        
        // Hiện lại page-header và tabs
        const pageHeader = document.querySelector('#mod-news .page-header'); if (pageHeader) pageHeader.style.display = 'flex';
        const tabs = document.querySelector('#mod-news .tabs'); if (tabs) tabs.style.display = 'flex';
        
        // Dựa vào tab active hiện tại để hiển thị lại danh sách phù hợp
        const activeTab = document.querySelector('#mod-news .tabs .tab.active');
        if (activeTab) {
            const tabText = activeTab.innerText || activeTab.textContent;
            if (tabText.includes('Danh sách')) {
                const el = document.getElementById('news-list'); if (el) el.style.display = 'block';
            } else if (tabText.includes('Chuyên mục')) {
                const el = document.getElementById('news-cat-list'); if (el) el.style.display = 'block';
            } else if (tabText.includes('Tác giả')) {
                const el = document.getElementById('news-author-list'); if (el) el.style.display = 'block';
            } else if (tabText.includes('Loại nội dung')) {
                const el = document.getElementById('news-contenttype-list'); if (el) el.style.display = 'block';
            } else if (tabText.includes('Form thu Leads') || tabText.includes('lead-forms')) {
                const el = document.getElementById('news-lead-forms'); if (el) el.style.display = 'block';
                if (typeof window.renderLeadFormsMainTable === 'function') window.renderLeadFormsMainTable();
            } else if (tabText.includes('Tags Mapping') || tabText.includes('Cấu hình Thông tin hay')) {
                const el = document.getElementById('news-tag-mapping'); if (el) el.style.display = 'block';
            } else {
                const el = document.getElementById('news-tag-list'); if (el) el.style.display = 'block';
            }
        } else {
            const el = document.getElementById('news-list'); if (el) el.style.display = 'block';
        }
        
        document.body.style.overflow = '';
    };

    window.newsArticlesData = {
        'news-1': {
            id: 'news-1',
            title: 'Lắp đặt mạng FPT khuyến mãi hè 2026 cực sốc',
            slug: 'lap-mang-fpt-khuyen-mai-he-2026',
            category: 'Tin khuyến mãi',
            categoryPrimary: 'Tin khuyến mãi',
            categories: ['Tin khuyến mãi'],
            author: 'Admin',
            date: '22/05/2026',
            updatedAt: '22/05/2026',
            updatedBy: 'Admin',
            status: 'Published',
            channel: 'fpt-telecom',
            sapo: 'Chào hè rực rỡ với chương trình khuyến mãi lắp đặt mạng cáp quang FPT Telecom cực lớn trong năm 2026. Tặng đến 2 tháng cước sử dụng, miễn phí modem Wi-Fi 6 thế hệ mới.',
            content: '## Khuyến mãi lắp mạng FPT hè 2026\nFPT Telecom trân trọng gửi tới quý khách hàng chương trình khuyến mãi lắp mạng FPT hè 2026 vô cùng hấp dẫn.\n\n## Ưu đãi đặc quyền của khách hàng\nTheo đó, khách hàng đăng ký mới dịch vụ Internet cáp quang hoặc combo Internet & Truyền hình FPT sẽ được hưởng các ưu đãi đặc quyền:\n1. Trang bị miễn phí Modem Wi-Fi 6 2 băng tần công nghệ mới.\n2. Tặng từ 1 đến 2 tháng cước khi tham gia trả trước từ 6-12 tháng.\n3. Miễn phí hòa mạng và lắp đặt siêu tốc trong 12 giờ.\n\n## Đăng ký online nhanh chóng\nVui lòng liên hệ hotline hoặc đăng ký trực tuyến để nhận ưu đãi ngay hôm nay!',
            tags: 'khuyenmai, lap-mang-fpt, wifi6',
            featured: false,
            appliedPackages: ['int-giga-fptvn', 'int-meta-fptvn'],
            thumbUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=150&q=80',
            thumbAlt: 'Băng rôn lắp mạng FPT khuyến mãi hè 2026 cực lớn',
            thumbCaption: 'Chương trình ưu đãi hè áp dụng trên toàn quốc',
            cropRatio: '3:2',
            seoTitle: 'Lắp Mạng FPT Khuyến Mãi Hè 2026 Mới Nhất: Tặng 2 Tháng Cước',
            seoDesc: 'Lắp mạng cáp quang FPT hè 2026 nhận ưu đãi hấp dẫn. Miễn phí lắp đặt, trang bị miễn phí modem Wi-Fi 6 thế hệ mới, tặng thêm cước sử dụng.',
            views: 342
        },
        'news-2': {
            id: 'news-2',
            title: 'FPT Camera ra mắt tính năng nhận diện AI thông minh mới',
            slug: 'fpt-camera-ra-mat-tinh-nang-nhan-dien-ai',
            category: 'Tin công nghệ',
            categoryPrimary: 'Tin công nghệ',
            categories: ['Tin công nghệ', 'Trí tuệ nhân tạo AI'],
            author: 'Phương Nam',
            date: '20/05/2026',
            updatedAt: '21/05/2026',
            updatedBy: 'Admin',
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
            seoDesc: 'FPT Camera cập nhật tính năng AI nhận diện khuôn mặt và phân biệt chuyển động người/vật giúp giảm báo động giả và tăng cường an ninh.',
            views: 1205
        },
        'news-3': {
            id: 'news-3',
            title: 'ASTON VILLA CHÍNH THỨC ĐĂNG QUANG CHAMPION UEFA EUROPA LEAGUE',
            slug: 'aston-villa-dang-quang-champion-europa-league',
            category: 'Sự kiện',
            categoryPrimary: 'Sự kiện',
            categories: ['Sự kiện'],
            author: 'Đức Nguyễn',
            date: '21/05/2026',
            updatedAt: '21/05/2026',
            updatedBy: 'Đức Nguyễn',
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
            seoDesc: 'Thầy trò HLV Unai Emery đăng quang ngôi vô địch Europa League 2026 đầy kịch tính. Đón xem lại trọn vẹn trận đấu độc quyền trên FPT Play.',
            views: 0
        },
        'news-4': {
            id: 'news-4',
            title: 'Trải nghiệm thực tế công nghệ Wi-Fi 7 đầu tiên tại Việt Nam',
            slug: 'trai-nghiem-thuc-te-cong-nghe-wifi-7',
            category: 'Tin công nghệ',
            categoryPrimary: 'Tin công nghệ',
            categories: ['Tin công nghệ', 'Wi-Fi 7 & Thiết bị'],
            author: 'Admin',
            date: '28/05/2026',
            updatedAt: '23/05/2026',
            updatedBy: 'Phương Nam',
            status: 'Scheduled',
            channel: 'fpt-telecom',
            sapo: 'FPT Telecom là đơn vị viễn thông tiên phong thử nghiệm thành công công nghệ Wi-Fi 7 với tốc độ đột phá lên tới 10 Gbps, độ trễ cực thấp dưới 5ms.',
            content: '## Đột phá công nghệ Wi-Fi 7\nFPT Telecom chính thức công bố thử nghiệm thành công tiêu chuẩn Wi-Fi 7 (IEEE 802.11be) đầu tiên tại Việt Nam với tốc độ kỷ lục.\n\n## Kế hoạch thương mại hóa\nDự kiến các gói cước và thiết bị modem Wi-Fi 7 sẽ chính thức mở bán tới khách hàng toàn quốc trong tháng 6/2026.',
            tags: 'wifi7, congnghe, fpt-telecom',
            featured: false,
            thumbUrl: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=150&q=80',
            thumbAlt: 'Thiết bị công nghệ Wi-Fi 7 FPT Telecom',
            thumbCaption: 'Thiết bị Wi-Fi 7 thế hệ mới thử nghiệm tại FPT Telecom',
            cropRatio: '3:2',
            seoTitle: 'Trải Nghiệm Thực Tế Công Nghệ Wi-Fi 7 Đầu Tiên Tại Việt Nam - FPT',
            seoDesc: 'FPT Telecom tiên phong thử nghiệm thành công Wi-Fi 7 với tốc độ đột phá 10 Gbps, mở ra kỷ nguyên Internet siêu tốc.',
            views: 0,
            scheduledTime: '2026-05-28T09:00',
            publishDate: '2026-05-28T09:00'
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

        const listEl = document.getElementById('news-list'); if (listEl) listEl.style.display = 'none';
        const catListEl = document.getElementById('news-cat-list'); if (catListEl) catListEl.style.display = 'none';
        const tagListEl = document.getElementById('news-tag-list'); if (tagListEl) tagListEl.style.display = 'none';
        const tagMapEl = document.getElementById('news-tag-mapping'); if (tagMapEl) tagMapEl.style.display = 'none';
        const leadFormEl = document.getElementById('news-lead-forms'); if (leadFormEl) leadFormEl.style.display = 'none';
        const authListEl = document.getElementById('news-author-list'); if (authListEl) authListEl.style.display = 'none';
        const authFormEl = document.getElementById('news-author-form'); if (authFormEl) authFormEl.style.display = 'none';
        const ctListEl = document.getElementById('news-contenttype-list'); if (ctListEl) ctListEl.style.display = 'none';
        const ctFormEl = document.getElementById('news-contenttype-form'); if (ctFormEl) ctFormEl.style.display = 'none';
        window.closeNewsArticleDrawer();
        const catFormEl = document.getElementById('news-cat-form'); if (catFormEl) catFormEl.style.display = 'none';

        if (tab === 'list') {
            if (listEl) listEl.style.display = 'block';
            window.renderNewsTableHTML();
        } else if (tab === 'category') {
            if (catListEl) catListEl.style.display = 'block';
            window.renderNewsCategoriesTable();
        } else if (tab === 'contenttype') {
            if (ctListEl) ctListEl.style.display = 'block';
            window.renderNewsContentTypesTable();
        } else if (tab === 'tag-list') {
            if (tagListEl) tagListEl.style.display = 'block';
            window.renderNewsTagsTable();
            window.closeNewsTagForm();
        } else if (tab === 'lead-forms') {
            if (leadFormEl) leadFormEl.style.display = 'block';
            window.renderLeadFormsMainTable();
        } else if (tab === 'tag-mapping') {
            if (tagMapEl) tagMapEl.style.display = 'block';
            window.syncTagMappingToSku();
            window.renderTagMappingTable();
            window.resetTagConfig();
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
        if (typeof window.renderArticleTagsDropdown === 'function') window.renderArticleTagsDropdown();
        window.closeNewsTagForm();
        showLdpToast('Đã lưu Tag thành công!');
    };

    window.deleteNewsTag = function (id) {
        if (confirm('Bạn có chắc chắn muốn xóa Tag này không?')) {
            delete window.newsTagsData[id];
            window.renderNewsTagsTable();
            if (typeof window.renderArticleTagsDropdown === 'function') window.renderArticleTagsDropdown();
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

    // =========================================================================
    //                    MANAGEMENT: LOẠI NỘI DUNG (CONTENT TYPES)
    // =========================================================================
    window.newsContentTypesData = {
        'ct-1': { id: 'ct-1', name: 'Bài viết', code: 'article', order: 1, status: 'Active', creator: '--', date: '25/05/2026 14:44' },
        'ct-2': { id: 'ct-2', name: 'Video', code: 'video', order: 2, status: 'Active', creator: '--', date: '25/05/2026 14:44' },
        'ct-3': { id: 'ct-3', name: 'Báo chí', code: 'press', order: 3, status: 'Active', creator: '--', date: '25/05/2026 14:44' }
    };

    window.initNewsContentTypeDOM = function () {
        // Người dùng yêu cầu BỎ TAB Loại nội dung (ContentTypes)
        const tabEl = document.getElementById('news-tab-contenttype');
        if (tabEl) tabEl.remove();
        const listDiv = document.getElementById('news-contenttype-list');
        if (listDiv) listDiv.remove();
        const formDiv = document.getElementById('news-contenttype-form');
        if (formDiv) formDiv.remove();
    };

    // Vô hiệu hóa việc tự tạo Container Loại nội dung
    if (false) {
        if (!document.getElementById('news-contenttype-list')) {
            const listDiv = document.createElement('div');
            listDiv.id = 'news-contenttype-list';
            listDiv.style.display = 'none';
            listDiv.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:16px;">
                    <div>
                        <h3 style="margin:0 0 4px 0; font-size:18px; font-weight:700; color:#fff;">Loại nội dung tin tức</h3>
                        <div style="font-size:12.5px; color:var(--text-muted);">Tổng quan / Loại nội dung</div>
                    </div>
                    <button type="button" class="btn btn-primary" onclick="window.openNewsContentTypeForm('')" style="padding:8px 18px; font-weight:600; font-size:13px; background:var(--pdh-gradient); border-radius:8px;">
                        + Thêm mới
                    </button>
                </div>

                <div class="glass" style="border-radius:12px; overflow:hidden; border:1px solid var(--border-glass);">
                    <table style="width:100%; border-collapse:collapse; font-size:13.5px;">
                        <thead>
                            <tr style="border-bottom:1px solid var(--border-glass); background:rgba(255,255,255,0.02);">
                                <th style="padding:12px 16px; text-align:center; color:var(--text-muted); font-size:11.5px; font-weight:700; width:50px;">#</th>
                                <th style="padding:12px 16px; text-align:left; color:var(--text-muted); font-size:11.5px; font-weight:700; text-transform:uppercase;">LOẠI NỘI DUNG</th>
                                <th style="padding:12px 16px; text-align:center; color:var(--text-muted); font-size:11.5px; font-weight:700; text-transform:uppercase; width:100px;">THỨ TỰ</th>
                                <th style="padding:12px 16px; text-align:center; color:var(--text-muted); font-size:11.5px; font-weight:700; text-transform:uppercase; width:130px;">TRẠNG THÁI</th>
                                <th style="padding:12px 16px; text-align:left; color:var(--text-muted); font-size:11.5px; font-weight:700; text-transform:uppercase; width:160px;">NGƯỜI TẠO</th>
                                <th style="padding:12px 16px; text-align:left; color:var(--text-muted); font-size:11.5px; font-weight:700; text-transform:uppercase; width:180px;">NGÀY TẠO</th>
                                <th style="padding:12px 16px; text-align:center; color:var(--text-muted); font-size:11.5px; font-weight:700; text-transform:uppercase; width:120px;">THAO TÁC</th>
                            </tr>
                        </thead>
                        <tbody id="news-contenttype-tbody"></tbody>
                    </table>
                </div>

                <!-- Pagination Bottom -->
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:16px; font-size:12.5px; color:var(--text-muted);">
                    <span id="news-contenttype-pagination-info">1 - 3 trên tổng 3</span>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span>Hiển thị:</span>
                        <select class="form-input" style="width:100px; padding:4px 8px; font-size:12px; background:rgba(0,0,0,0.3); border-color:var(--border-glass);">
                            <option>20/Trang</option>
                            <option>50/Trang</option>
                        </select>
                        <div style="display:flex; gap:4px;">
                            <button class="btn btn-secondary btn-sm" disabled style="opacity:0.4; padding:3px 10px;">«</button>
                            <button class="btn btn-primary btn-sm" style="padding:3px 10px;">1</button>
                            <button class="btn btn-secondary btn-sm" disabled style="opacity:0.4; padding:3px 10px;">»</button>
                        </div>
                    </div>
                </div>
            `;
            cardContainer.appendChild(listDiv);
        }

        // 3. Inject Container HTML: Form Thêm / Sửa Loại nội dung (Chuẩn Ảnh 3)
        if (!document.getElementById('news-contenttype-form')) {
            const formDiv = document.createElement('div');
            formDiv.id = 'news-contenttype-form';
            formDiv.style.display = 'none';
            formDiv.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:16px; border-bottom:1px solid var(--border-glass); padding-bottom:14px;">
                    <div>
                        <h3 id="news-contenttype-form-title" style="margin:0 0 4px 0; font-size:18px; font-weight:700; color:#fff;">Thêm loại nội dung</h3>
                        <div style="font-size:12.5px; color:var(--text-muted);">Tổng quan / Loại nội dung / <span id="news-contenttype-form-sub" style="color:var(--primary);">Tạo mới</span></div>
                    </div>
                    <button type="button" class="btn btn-secondary btn-sm" onclick="window.closeNewsContentTypeForm()" style="padding:6px 14px; font-size:12.5px; font-weight:600;">
                        ← Quay lại
                    </button>
                </div>

                <div class="glass" style="padding:24px; border-radius:12px; border:1px solid var(--border-glass); background:rgba(255,255,255,0.015); margin-bottom:20px;">
                    <input type="hidden" id="news-contenttype-edit-id">
                    
                    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:20px; margin-bottom:20px;">
                        <div class="form-group" style="margin:0;">
                            <label style="display:block; font-size:12px; font-weight:700; color:var(--text-muted); margin-bottom:6px;">Mã <span style="color:var(--primary);">*</span></label>
                            <input type="text" id="news-contenttype-input-code" class="form-input" placeholder="VD: blog" style="font-size:13px; padding:9px 12px; background:rgba(0,0,0,0.3);">
                        </div>
                        <div class="form-group" style="margin:0;">
                            <label style="display:block; font-size:12px; font-weight:700; color:var(--text-muted); margin-bottom:6px;">Tên <span style="color:var(--primary);">*</span></label>
                            <input type="text" id="news-contenttype-input-name" class="form-input" placeholder="Tên loại nội dung" style="font-size:13px; padding:9px 12px; background:rgba(0,0,0,0.3);">
                        </div>
                        <div class="form-group" style="margin:0;">
                            <label style="display:block; font-size:12px; font-weight:700; color:var(--text-muted); margin-bottom:6px;">Thứ tự</label>
                            <input type="number" id="news-contenttype-input-order" class="form-input" value="0" style="font-size:13px; padding:9px 12px; background:rgba(0,0,0,0.3);">
                        </div>
                    </div>

                    <!-- TOGGLE HOẠT ĐỘNG (CHUẨN ẢNH 3) -->
                    <div style="display:flex; align-items:center; gap:12px; margin-top:10px;">
                        <label style="position:relative; display:inline-block; width:46px; height:24px; cursor:pointer;">
                            <input type="checkbox" id="news-contenttype-input-status" checked style="opacity:0; width:0; height:0;" onchange="document.getElementById('news-contenttype-status-text').innerText=this.checked?'Hoạt động':'Tắt'">
                            <span style="position:absolute; inset:0; background:rgba(255,255,255,0.1); border-radius:24px; transition:0.3s;" id="news-contenttype-switch-bg"></span>
                            <span style="position:absolute; height:18px; width:18px; left:3px; bottom:3px; background:white; border-radius:50%; transition:0.3s;" id="news-contenttype-switch-dot"></span>
                        </label>
                        <span id="news-contenttype-status-text" style="font-size:13px; font-weight:600; color:#34d399;">Hoạt động</span>
                    </div>
                </div>

                <!-- BOTTOM BUTTONS -->
                <div style="display:flex; justify-content:flex-end; gap:12px;">
                    <button type="button" class="btn btn-secondary" onclick="window.closeNewsContentTypeForm()" style="padding:8px 20px; font-size:13px;">Hủy</button>
                    <button type="button" class="btn btn-primary" onclick="window.saveNewsContentTypeAction()" style="padding:8px 24px; font-size:13px; background:var(--pdh-gradient); font-weight:700; border-radius:20px;">✓ Đồng ý</button>
                </div>
            `;
            cardContainer.appendChild(formDiv);
        }
    };

    window.renderNewsContentTypesTable = function () {
        window.initNewsContentTypeDOM();
        const tbody = document.getElementById('news-contenttype-tbody');
        if (!tbody) return;
        tbody.innerHTML = '';

        let index = 1;
        const keys = Object.keys(window.newsContentTypesData);

        keys.forEach(function (id) {
            const item = window.newsContentTypesData[id];
            const tr = document.createElement('tr');
            tr.style.cssText = 'border-bottom: 1px solid var(--border-glass); transition: 0.2s;';
            tr.onmouseover = function () { this.style.background = 'rgba(255,255,255,0.03)'; };
            tr.onmouseout = function () { this.style.background = ''; };

            const statusBadge = item.status === 'Active'
                ? '<span class="badge" style="background:rgba(16,185,129,0.12); color:#34d399; border:1px solid rgba(16,185,129,0.25); padding:3px 10px; border-radius:12px; font-size:11.5px; font-weight:600;">Hoạt động</span>'
                : '<span class="badge" style="background:rgba(239,68,68,0.12); color:#f87171; border:1px solid rgba(239,68,68,0.25); padding:3px 10px; border-radius:12px; font-size:11.5px; font-weight:600;">Tạm tắt</span>';

            tr.innerHTML = `
                <td style="padding:14px 16px; text-align:center; color:var(--text-muted); font-size:12.5px;">${index++}</td>
                <td style="padding:14px 16px;">
                    <div style="font-weight:700; color:#fff; font-size:13.5px;">${item.name}</div>
                    <div style="font-size:11.5px; color:#ef4444; font-family:monospace; margin-top:2px;">${item.code}</div>
                </td>
                <td style="padding:14px 16px; text-align:center; font-weight:600; color:#fff;">${item.order}</td>
                <td style="padding:14px 16px; text-align:center;">${statusBadge}</td>
                <td style="padding:14px 16px; color:var(--text-muted); font-size:12.5px;">${item.creator || '--'}</td>
                <td style="padding:14px 16px; color:var(--text-muted); font-size:12.5px;">${item.date || '25/05/2026 14:44'}</td>
                <td style="padding:14px 16px; text-align:center;">
                    <div style="display:flex; gap:6px; justify-content:center;">
                        <button type="button" class="btn btn-secondary btn-sm" style="color:var(--primary); border-color:var(--primary); padding:3px 10px; font-size:11px;" onclick="window.openNewsContentTypeForm('${item.id}')">✏️ Sửa</button>
                        <button type="button" class="btn btn-secondary btn-sm" style="color:var(--danger); border-color:rgba(239,68,68,0.3); background:rgba(239,68,68,0.08); padding:3px 10px; font-size:11px;" onclick="window.deleteNewsContentType('${item.id}')">🗑️ Xóa</button>
                    </div>
                </td>
            `;
            tbody.appendChild(tr);
        });

        const pagInfo = document.getElementById('news-contenttype-pagination-info');
        if (pagInfo) pagInfo.innerText = `1 - ${keys.length} trên tổng ${keys.length}`;
    };

    window.openNewsContentTypeForm = function (id) {
        window.initNewsContentTypeDOM();
        const listDiv = document.getElementById('news-contenttype-list');
        const formDiv = document.getElementById('news-contenttype-form');
        if (!formDiv) return;

        if (listDiv) listDiv.style.display = 'none';
        formDiv.style.display = 'block';

        const titleEl = document.getElementById('news-contenttype-form-title');
        const subEl = document.getElementById('news-contenttype-form-sub');
        const editIdEl = document.getElementById('news-contenttype-edit-id');
        const codeEl = document.getElementById('news-contenttype-input-code');
        const nameEl = document.getElementById('news-contenttype-input-name');
        const orderEl = document.getElementById('news-contenttype-input-order');
        const statusEl = document.getElementById('news-contenttype-input-status');

        if (id && window.newsContentTypesData[id]) {
            const item = window.newsContentTypesData[id];
            if (titleEl) titleEl.innerText = 'Chỉnh sửa loại nội dung';
            if (subEl) subEl.innerText = 'Chỉnh sửa';
            if (editIdEl) editIdEl.value = item.id;
            if (codeEl) codeEl.value = item.code;
            if (nameEl) nameEl.value = item.name;
            if (orderEl) orderEl.value = item.order;
            if (statusEl) {
                statusEl.checked = item.status === 'Active';
                document.getElementById('news-contenttype-status-text').innerText = item.status === 'Active' ? 'Hoạt động' : 'Tắt';
            }
        } else {
            if (titleEl) titleEl.innerText = 'Thêm loại nội dung';
            if (subEl) subEl.innerText = 'Tạo mới';
            if (editIdEl) editIdEl.value = '';
            if (codeEl) codeEl.value = '';
            if (nameEl) nameEl.value = '';
            if (orderEl) orderEl.value = Object.keys(window.newsContentTypesData).length + 1;
            if (statusEl) {
                statusEl.checked = true;
                document.getElementById('news-contenttype-status-text').innerText = 'Hoạt động';
            }
        }
    };

    window.closeNewsContentTypeForm = function () {
        const listDiv = document.getElementById('news-contenttype-list');
        const formDiv = document.getElementById('news-contenttype-form');
        if (formDiv) formDiv.style.display = 'none';
        if (listDiv) listDiv.style.display = 'block';
    };

    window.saveNewsContentTypeAction = function () {
        const editId = document.getElementById('news-contenttype-edit-id').value;
        const code = document.getElementById('news-contenttype-input-code').value.trim();
        const name = document.getElementById('news-contenttype-input-name').value.trim();
        const order = parseInt(document.getElementById('news-contenttype-input-order').value) || 0;
        const isChecked = document.getElementById('news-contenttype-input-status').checked;

        if (!code || !name) {
            alert('Vui lòng điền đầy đủ Mã và Tên loại nội dung!');
            return;
        }

        const now = new Date();
        const dateStr = now.toLocaleDateString('vi-VN') + ' ' + now.toLocaleTimeString('vi-VN').substring(0, 5);

        const id = editId || 'ct-' + (Object.keys(window.newsContentTypesData).length + 1);

        window.newsContentTypesData[id] = {
            id: id,
            name: name,
            code: code,
            order: order,
            status: isChecked ? 'Active' : 'Inactive',
            creator: 'Admin User',
            date: dateStr
        };

        window.closeNewsContentTypeForm();
        window.renderNewsContentTypesTable();
        showLdpToast(editId ? '✅ Cập nhật loại nội dung thành công!' : '✅ Thêm loại nội dung mới thành công!');
    };

    window.deleteNewsContentType = function (id) {
        const item = window.newsContentTypesData[id];
        if (!item) return;

        if (confirm(`Bạn có chắc chắn muốn xóa loại nội dung "${item.name}" (${item.code}) không?`)) {
            delete window.newsContentTypesData[id];
            window.renderNewsContentTypesTable();
            showLdpToast('🗑️ Đã xóa loại nội dung thành công!');
        }
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
        let total = 0, pub = 0, draft = 0, sched = 0, feat = 0, totalViews = 0;
        for (let id in window.newsArticlesData) {
            const art = window.newsArticlesData[id];
            total++;
            if (art.status === 'Published') pub++;
            else if (art.status === 'Draft') draft++;
            else if (art.status === 'Scheduled') sched++;
            if (art.featured) feat++;
            totalViews += (art.views || 0);
        }

        const elTotal = document.getElementById('stats-total-news') || document.querySelector('.news-stat-total');
        const elPub = document.getElementById('stats-active-news') || document.querySelector('.news-stat-pub');
        const elDraft = document.getElementById('stats-draft-news') || document.querySelector('.news-stat-draft');
        const elSched = document.getElementById('stats-sched-news') || document.querySelector('.news-stat-sched');
        const elViews = document.getElementById('stats-views-news') || document.querySelector('.news-stat-views');

        if (elTotal) elTotal.innerText = total;
        if (elPub) elPub.innerText = pub;
        if (elDraft) elDraft.innerText = draft;
        if (elSched) elSched.innerText = sched;
        if (elViews) elViews.innerText = totalViews.toLocaleString();
    };

    // Render article table (Chuẩn UI mới: Bỏ cột Tác giả, có Nổi bật ⭐, Sửa nhanh, Xem thử)
    window.renderNewsTableHTML = function () {
        const tbody = document.querySelector('#news-table tbody') || document.querySelector('#news-list table tbody');
        if (!tbody) return;
        tbody.innerHTML = '';

        const searchKw = (document.getElementById('news-search-keyword')?.value || document.querySelector('#news-list input[placeholder="Tìm kiếm bài viết..."]')?.value || '').toLowerCase().trim();
        const catFilter = document.getElementById('news-search-cat')?.value || '';
        const statusFilter = document.getElementById('news-search-status')?.value || '';
        const featuredFilter = document.getElementById('news-search-featured')?.value || '';

        let index = 1;

        for (let id in window.newsArticlesData) {
            const art = window.newsArticlesData[id];

            if (searchKw && !art.title.toLowerCase().includes(searchKw) && !art.slug.toLowerCase().includes(searchKw)) {
                continue;
            }
            if (catFilter && art.category !== catFilter) {
                continue;
            }
            if (statusFilter && art.status !== statusFilter) {
                continue;
            }
            if (featuredFilter === 'featured' && !art.featured) {
                continue;
            }

            const tr = document.createElement('tr');
            tr.setAttribute('data-id', art.id);
            tr.setAttribute('data-channel', art.channel || 'fpt-telecom');

            const switchChecked = art.featured ? 'checked' : '';
            const switchHtml = `
                <label class="cms-switch" title="Bật/Tắt nổi bật">
                    <input type="checkbox" ${switchChecked} onchange="window.toggleNewsFeaturedDirect('${art.id}')">
                    <span class="cms-switch-slider"></span>
                </label>
            `;

            let statusBadge = '';
            let visibilitySwitchHtml = '';

            if (art.status === 'Published') {
                statusBadge = '<span class="status-pill published"><span class="status-dot"></span>Đã xuất bản</span>';
                visibilitySwitchHtml = `
                    <label class="cms-switch" title="Đang hiển thị trên website — Gạt để Tạm ẩn">
                        <input type="checkbox" checked onchange="window.toggleNewsPublishStatusDirect('${art.id}', this)">
                        <span class="cms-switch-slider publish-slider"></span>
                    </label>
                `;
            } else if (art.status === 'Hidden') {
                statusBadge = '<span class="status-pill hidden"><span class="status-dot"></span>Tạm ẩn</span>';
                visibilitySwitchHtml = `
                    <label class="cms-switch" title="Đang ẩn khỏi website — Gạt để Hiển thị lại">
                        <input type="checkbox" onchange="window.toggleNewsPublishStatusDirect('${art.id}', this)">
                        <span class="cms-switch-slider publish-slider"></span>
                    </label>
                `;
            } else if (art.status === 'Draft') {
                statusBadge = '<span class="status-pill draft"><span class="status-dot"></span>Bản nháp</span>';
                visibilitySwitchHtml = '<span style="color:var(--text-muted); font-size:14px; font-weight:700;" title="Bài nháp chưa xuất bản — Không thể bật hiển thị ngoài bảng">—</span>';
            } else if (art.status === 'Scheduled') {
                statusBadge = '<span class="status-pill scheduled"><span class="status-dot"></span>Lên lịch</span>';
                visibilitySwitchHtml = '<span style="color:var(--text-muted); font-size:14px; font-weight:700;" title="Bài viết đã lên lịch — Sẽ tự động xuất bản khi đến giờ">—</span>';
            } else {
                statusBadge = '<span class="status-pill scheduled"><span class="status-dot"></span>Lên lịch</span>';
                visibilitySwitchHtml = '<span style="color:var(--text-muted); font-size:14px; font-weight:700;">—</span>';
            }

            let catColor = 'rgba(249,115,22,0.15); color:#FB923C;';
            if (art.category === 'Tin công nghệ') catColor = 'rgba(168,85,247,0.15); color:#c084fc;';
            else if (art.category === 'Sự kiện') catColor = 'rgba(245,158,11,0.15); color:#fbbf24;';
            else if (art.category === 'Thông báo') catColor = 'rgba(16,185,129,0.15); color:#34d399;';

            let channelName = 'FPT Telecom';
            let channelBg = 'rgba(255,107,0,0.15); color:#ff8c42;';
            if (art.channel === 'fpt-play') {
                channelName = 'FPT Play';
                channelBg = 'rgba(167,139,250,0.15); color:#a78bfa;';
            } else if (art.channel === 'fpt-camera') {
                channelName = 'FPT Camera';
                channelBg = 'rgba(245,158,11,0.15); color:#fbbf24;';
            }

            const catBadge = `<span class="badge news-art-cat" style="background:${catColor}">${art.category}</span>`;

            const finalThumbUrl = art.thumbUrl || 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=150&q=80';

            let bannerBadge = '';
            if (art.bannerId) {
                bannerBadge = `<div style="font-size:10px; margin-top:2px; display:inline-block;"><span class="badge" style="background:rgba(245,158,11,0.15); color:#f59e0b; padding:1px 6px;">🏷️ Banner: ${art.bannerId}</span></div>`;
            }

            tr.innerHTML = `
                <td style="text-align:center;">
                    <input type="checkbox" class="news-select-item news-row-check" data-id="${art.id}" onchange="window.onNewsSelectChange();" style="width:16px; height:16px; accent-color:var(--primary); cursor:pointer;">
                </td>
                <td>
                    <img src="${finalThumbUrl}" alt="Thumbnail" style="width:64px; height:42px; border-radius:4px; object-fit:cover; border:1px solid var(--border-glass);">
                </td>
                <td>
                    <div style="font-weight:700; color:#fff; font-size:13.5px;" class="news-art-title">${art.title}</div>
                    <div style="font-size:11.5px; color:var(--text-muted); margin-top:2px;" class="news-art-slug">/tin-tuc/${art.slug}</div>
                    ${bannerBadge}
                </td>
                <td style="text-align:center;">
                    ${switchHtml}
                </td>
                <td>${catBadge}</td>
                <td class="news-art-author" style="font-size:13px; color:var(--text-muted);"><span style="color:#e2e8f0; font-weight:500;">${art.author || 'Admin'}</span></td>
                <td>
                    <div class="news-art-date" style="font-size:12.5px; color:#e2e8f0; font-weight:500;">${art.date || '22/05/2026'}</div>
                </td>
                <td>
                    <div class="news-art-updated" style="font-size:12px; color:#94a3b8;">${art.updatedAt || art.date || '22/05/2026'}</div>
                </td>
                <td class="news-art-updater" style="font-size:13px; color:var(--text-muted);"><span style="color:#e2e8f0; font-weight:500;">${art.updatedBy || art.author || 'Admin'}</span></td>
                <td style="text-align:center;" class="news-art-views"><strong>${(art.views || 0).toLocaleString()}</strong></td>
                <td>${statusBadge}</td>
                <td style="text-align:center;">${visibilitySwitchHtml}</td>
                <td style="text-align:right; white-space:nowrap;">
                    <div class="news-action-group">
                        <button class="news-icon-btn preview-btn" onclick="window.previewNewsArticleById('${art.id}')" title="Xem trước bài viết" style="color:#c084fc;">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </button>
                        <button class="news-icon-btn edit-btn" onclick="window.editNewsArticle('${art.id}')" title="Chỉnh sửa bài viết">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        </button>
                        <button class="news-icon-btn delete-btn" onclick="window.deleteNewsArticle('${art.id}')" title="Xóa bài viết">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        </button>
                    </div>
                </td>
            `;
            tbody.appendChild(tr);
        }

        window.onNewsSelectChange();
        window.updateNewsStats();
        window.syncNewsToMockArticles();
    };

    // Toggle Dropdown Menu Thao tác
    window.toggleNewsActionDropdown = function (e, id) {
        e.stopPropagation();
        const currentDd = document.getElementById(`dropdown-${id}`);
        const isOpen = currentDd && currentDd.classList.contains('open');

        // Đóng tất cả dropdown đang mở khác
        document.querySelectorAll('.news-action-dropdown').forEach(dd => dd.classList.remove('open'));

        if (!isOpen && currentDd) {
            currentDd.classList.add('open');
        }
    };

    // Lắng nghe click ngoài document để tự đóng menu dropdown
    if (!window._newsDropdownDocListenerAdded) {
        document.addEventListener('click', function () {
            document.querySelectorAll('.news-action-dropdown').forEach(dd => dd.classList.remove('open'));
        });
        window._newsDropdownDocListenerAdded = true;
    }

    // Mở bài viết trên web fpt.vn trong tab mới (STT 16)
    window.openNewsOnWeb = function (id) {
        const art = window.newsArticlesData[id];
        if (!art) return;
        const slug = art.slug || 'bai-viet';
        if (art.status === 'Draft') {
            showLdpToast('ℹ️ Bài viết đang là Bản Nháp (Draft). Mở chế độ xem trước bảo mật!');
            window.open(`https://fpt.vn/tin-tuc/${slug}?preview=draft_${art.id}&token=fpt_secret_2026`, '_blank');
        } else {
            window.open(`https://fpt.vn/tin-tuc/${slug}`, '_blank');
        }
    };

    // Toggle trực tiếp Bật/Tắt Ẩn - Hiện bài viết từ Switch cột Trạng thái
    window.toggleNewsPublishStatusDirect = function (id, checkboxEl) {
        const art = window.newsArticlesData[id];
        if (!art) return;

        if (art.status === 'Published') {
            // Đang xuất bản -> gạt tắt để Tạm Ẩn
            art.status = 'Hidden';
            showLdpToast(`Đã tạm ẩn bài viết #${id} khỏi website!`);
            window.renderNewsTableHTML();
        } else if (art.status === 'Hidden') {
            // Đang ẩn -> gạt bật để Xuất bản lại
            art.status = 'Published';
            showLdpToast(`Đã kích hoạt hiển thị bài viết #${id} lên website thành công!`);
            window.renderNewsTableHTML();
        } else if (art.status === 'Draft') {
            // Đang nháp -> Tuyệt đối không cho toggle gạt xuất bản ngoài bảng
            showLdpToast('⚠️ Bài viết đang là Bản Nháp! Vui lòng vào Chỉnh sửa bài viết để hoàn thiện nội dung và Xuất bản.');
            if (checkboxEl) checkboxEl.checked = false;
            return;
        } else {
            art.status = checkboxEl && checkboxEl.checked ? 'Published' : 'Hidden';
            showLdpToast(`Đã cập nhật trạng thái bài viết #${id}!`);
            window.renderNewsTableHTML();
        }
    };

    // Tính năng Sửa Nhanh Inline (Quick Edit Inline - STT 2)
    window.toggleQuickEditNewsRow = function (id) {
        const existingRow = document.getElementById(`quick-edit-row-${id}`);
        if (existingRow) {
            existingRow.remove();
            return;
        }

        // Đóng các hàng quick edit khác đang mở nếu có
        document.querySelectorAll('.quick-edit-row').forEach(row => row.remove());

        const targetRow = document.querySelector(`#news-table tbody tr[data-id="${id}"]`);
        if (!targetRow) return;

        const art = window.newsArticlesData[id];
        if (!art) return;

        const quickEditTr = document.createElement('tr');
        quickEditTr.id = `quick-edit-row-${id}`;
        quickEditTr.className = 'quick-edit-row';
        quickEditTr.innerHTML = `
            <td colspan="13" style="padding:16px 20px; background:rgba(255,107,0,0.06); border-top:1px dashed var(--primary); border-bottom:1px solid rgba(255,107,0,0.3);">
                <div style="font-weight:700; color:#fbbf24; font-size:13px; margin-bottom:12px; display:flex; align-items:center; gap:6px;">
                    <span>⚡ SỬA NHANH BÀI VIẾT #${art.id}</span>
                </div>
                <div style="display:grid; grid-template-columns: 2fr 2fr 1.5fr 1.2fr auto; gap:12px; align-items:flex-end;">
                    <div class="form-group" style="margin:0;">
                        <label style="font-size:11.5px; color:var(--text-muted); display:block; margin-bottom:4px;">Tiêu đề bài viết <span style="color:var(--danger)">*</span></label>
                        <input type="text" class="form-input" id="qe-title-${id}" value="${art.title.replace(/"/g, '&quot;')}" style="font-size:13px; padding:6px 10px;">
                    </div>
                    <div class="form-group" style="margin:0;">
                        <label style="font-size:11.5px; color:var(--text-muted); display:block; margin-bottom:4px;">URL Slug <span style="color:var(--danger)">*</span></label>
                        <input type="text" class="form-input" id="qe-slug-${id}" value="${art.slug}" style="font-size:13px; padding:6px 10px;">
                    </div>
                    <div class="form-group" style="margin:0;">
                        <label style="font-size:11.5px; color:var(--text-muted); display:block; margin-bottom:4px;">Chuyên mục</label>
                        <select class="form-select" id="qe-cat-${id}" style="font-size:13px; padding:6px 10px;">
                            <option value="Tin khuyến mãi" ${art.category === 'Tin khuyến mãi' ? 'selected' : ''}>Tin khuyến mãi</option>
                            <option value="Tin công nghệ" ${art.category === 'Tin công nghệ' ? 'selected' : ''}>Tin công nghệ</option>
                            <option value="Thông báo" ${art.category === 'Thông báo' ? 'selected' : ''}>Thông báo</option>
                            <option value="Sự kiện" ${art.category === 'Sự kiện' ? 'selected' : ''}>Sự kiện</option>
                        </select>
                    </div>
                    <div class="form-group" style="margin:0;">
                        <label style="font-size:11.5px; color:var(--text-muted); display:block; margin-bottom:4px;">Trạng thái</label>
                        <select class="form-select" id="qe-status-${id}" style="font-size:13px; padding:6px 10px;">
                            <option value="Published" ${art.status === 'Published' ? 'selected' : ''}>Đã xuất bản</option>
                            <option value="Draft" ${art.status === 'Draft' ? 'selected' : ''}>Bản nháp</option>
                            <option value="Hidden" ${art.status === 'Hidden' ? 'selected' : ''}>Tạm ẩn</option>
                        </select>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <label style="font-size:12px; display:inline-flex; align-items:center; gap:4px; cursor:pointer; color:#fff; user-select:none; margin-right:8px;">
                            <input type="checkbox" id="qe-featured-${id}" ${art.featured ? 'checked' : ''} style="width:16px; height:16px; accent-color:var(--primary);"> ⭐ Nổi bật
                        </label>
                        <button type="button" class="btn btn-secondary btn-sm" onclick="document.getElementById('quick-edit-row-${id}').remove()" style="font-size:12px; padding:6px 12px;">Hủy</button>
                        <button type="button" class="btn btn-primary btn-sm" onclick="window.saveQuickEditNews('${id}')" style="font-size:12px; padding:6px 14px; font-weight:700;">💾 Lưu</button>
                    </div>
                </div>
            </td>
        `;

        targetRow.after(quickEditTr);
    };

    window.saveQuickEditNews = function (id) {
        const art = window.newsArticlesData[id];
        if (!art) return;

        const newTitle = document.getElementById(`qe-title-${id}`)?.value.trim();
        const newSlug = document.getElementById(`qe-slug-${id}`)?.value.trim();
        const newCat = document.getElementById(`qe-cat-${id}`)?.value;
        const newStatus = document.getElementById(`qe-status-${id}`)?.value;
        const newFeatured = document.getElementById(`qe-featured-${id}`)?.checked || false;

        if (!newTitle || !newSlug) {
            showLdpToast('Vui lòng nhập đầy đủ Tiêu đề và Slug!');
            return;
        }

        art.title = newTitle;
        art.slug = newSlug;
        art.category = newCat;
        art.status = newStatus;
        art.featured = newFeatured;
        const now = new Date();
        art.updatedAt = now.getDate().toString().padStart(2, '0') + '/' + (now.getMonth() + 1).toString().padStart(2, '0') + '/' + now.getFullYear() + ' ' + now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
        art.updatedBy = 'Admin User';

        showLdpToast(`Đã lưu nhanh bài viết #${id} thành công!`);
        window.renderNewsTableHTML();
    };

    // Xem trước bài viết trực tiếp từ hàng bảng
    window.previewNewsArticleById = function (id) {
        const art = window.newsArticlesData[id];
        if (!art) return;

        const modal = document.getElementById('news-preview-modal');
        if (!modal) {
            window.editNewsArticle(id);
            return;
        }

        const titleEl = document.getElementById('prev-art-title'); if (titleEl) titleEl.innerText = art.title;
        const metaEl = document.getElementById('prev-art-meta'); if (metaEl) metaEl.innerText = `Chuyên mục: ${art.category} · Kênh: ${art.channel || 'fpt-telecom'} · Ngày: ${art.date}`;
        const sapoEl = document.getElementById('prev-art-sapo'); if (sapoEl) sapoEl.innerText = art.sapo || '';
        const thumbEl = document.getElementById('prev-art-thumb'); if (thumbEl) thumbEl.src = art.thumbUrl;
        const capEl = document.getElementById('prev-art-caption'); if (capEl) capEl.innerText = art.thumbCaption || art.thumbAlt || '';

        const mainContentEl = document.getElementById('prev-art-content-area');
        if (mainContentEl) {
            mainContentEl.innerHTML = `<div style="font-size:13.5px; line-height:1.7; color:#ddd; white-space:pre-line;">${art.content || 'Nội dung chi tiết chưa có.'}</div>`;
        }

        modal.style.display = 'flex';
    };

    // Quản lý chọn hàng loạt (Bulk Actions Bar - STT 1)
    window.toggleSelectAllNews = function (cb) {
        const items = document.querySelectorAll('#news-table tbody .news-select-item');
        window.selectedNewsIds = [];
        items.forEach(item => {
            const tr = item.closest('tr');
            if (tr && tr.style.display !== 'none' && !tr.classList.contains('quick-edit-row')) {
                item.checked = cb.checked;
                if (cb.checked) {
                    window.selectedNewsIds.push(item.getAttribute('data-id'));
                }
            }
        });
        window.updateBulkNewsButtonState();
    };

    window.onNewsSelectChange = function () {
        const items = document.querySelectorAll('#news-table tbody .news-select-item');
        window.selectedNewsIds = [];
        let allChecked = items.length > 0;
        let checkedCount = 0;

        items.forEach(item => {
            const tr = item.closest('tr');
            if (tr && tr.style.display !== 'none' && !tr.classList.contains('quick-edit-row')) {
                if (item.checked) {
                    window.selectedNewsIds.push(item.getAttribute('data-id'));
                    checkedCount++;
                } else {
                    allChecked = false;
                }
            }
        });

        const masterCb = document.getElementById('news-check-all');
        if (masterCb) {
            masterCb.checked = allChecked && items.length > 0;
            masterCb.indeterminate = checkedCount > 0 && !allChecked;
        }

        window.updateBulkNewsButtonState();
    };

    window.updateBulkNewsButtonState = function () {
        const bar = document.getElementById('news-bulk-bar');
        const countEl = document.getElementById('news-bulk-count');
        const count = window.selectedNewsIds.length;

        if (bar) {
            bar.style.display = count > 0 ? 'flex' : 'none';
        }
        if (countEl) {
            countEl.innerText = `${count} bài được chọn`;
        }
    };

    window.clearNewsSelection = function () {
        window.selectedNewsIds = [];
        const masterCb = document.getElementById('news-check-all');
        if (masterCb) {
            masterCb.checked = false;
            masterCb.indeterminate = false;
        }
        document.querySelectorAll('#news-table tbody .news-select-item').forEach(item => item.checked = false);
        window.updateBulkNewsButtonState();
    };

    window.bulkNewsAction = function (action) {
        if (!window.selectedNewsIds || window.selectedNewsIds.length === 0) {
            showLdpToast('Vui lòng chọn ít nhất một bài viết!');
            return;
        }

        const count = window.selectedNewsIds.length;

        if (action === 'publish') {
            window.selectedNewsIds.forEach(id => {
                if (window.newsArticlesData[id]) {
                    window.newsArticlesData[id].status = 'Published';
                }
            });
            showLdpToast(`Đã xuất bản thành công ${count} bài viết!`);
            window.clearNewsSelection();
            window.renderNewsTableHTML();
        } else if (action === 'hide') {
            window.selectedNewsIds.forEach(id => {
                if (window.newsArticlesData[id]) {
                    window.newsArticlesData[id].status = 'Hidden';
                }
            });
            showLdpToast(`Đã ẩn thành công ${count} bài viết!`);
            window.clearNewsSelection();
            window.renderNewsTableHTML();
        } else if (action === 'delete') {
            if (confirm(`Bạn có chắc chắn muốn XÓA VĨNH VIỄN ${count} bài viết đã chọn không? Hành động này không thể hoàn tác.`)) {
                window.selectedNewsIds.forEach(id => {
                    delete window.newsArticlesData[id];
                });
                showLdpToast(`Đã xóa thành công ${count} bài viết!`);
                window.clearNewsSelection();
                window.renderNewsTableHTML();
            }
        }
    };

    window.bulkNewsChangeCategory = function () {
        if (!window.selectedNewsIds || window.selectedNewsIds.length === 0) {
            showLdpToast('Vui lòng chọn ít nhất một bài viết!');
            return;
        }
        const sel = document.getElementById('news-bulk-category-select');
        const cat = sel ? sel.value : '';
        if (!cat) {
            showLdpToast('Vui lòng chọn chuyên mục muốn đổi sang!');
            return;
        }

        window.selectedNewsIds.forEach(id => {
            if (window.newsArticlesData[id]) {
                window.newsArticlesData[id].category = cat;
            }
        });

        showLdpToast(`Đã đổi chuyên mục thành "${cat}" cho ${window.selectedNewsIds.length} bài viết!`);
        window.clearNewsSelection();
        window.renderNewsTableHTML();
    };

    window.toggleNewsFeaturedDirect = function (id) {
        const art = window.newsArticlesData[id];
        if (art) {
            art.featured = !art.featured;
            window.renderNewsTableHTML();
            showLdpToast(`Đã ${art.featured ? 'bật ⭐' : 'tắt'} nổi bật bài viết thành công!`);
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

    // Quản lý trạng thái khóa Slug tự động
    window.isSlugLocked = false;

    // Helper tạo Slug tiếng Việt chuẩn SEO
    window.generateVietnameseSlug = function (str) {
        if (!str) return '';
        let slug = str.toLowerCase();
        // Xóa dấu tiếng Việt
        slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        slug = slug.replace(/[đĐ]/g, 'd');
        // Xóa ký tự đặc biệt
        slug = slug.replace(/[^a-z0-9\s-]/g, '');
        // Thay khoảng trắng thành gạch ngang
        slug = slug.trim().replace(/\s+/g, '-');
        slug = slug.replace(/-+/g, '-');
        return slug;
    };

    // Bộ đếm ký tự Tiêu đề (0/250) và tự động sinh slug (STT 3 & 4)
    window.onNewsTitleInput = function (el) {
        const val = el ? el.value : (document.getElementById('art-title')?.value || '');
        const countEl = document.getElementById('news-title-count');
        if (countEl) {
            countEl.innerText = `${val.length} / 250 ký tự`;
            if (val.length > 250) {
                countEl.style.color = 'var(--danger)';
            } else if (val.length >= 200) {
                countEl.style.color = '#fbbf24';
            } else {
                countEl.style.color = 'var(--text-muted)';
            }
        }

        // Tự động sinh Slug nếu chưa tự chỉnh sửa thủ công
        if (!window.isSlugManual) {
            const slugEl = document.getElementById('art-slug');
            if (slugEl) {
                slugEl.value = window.generateVietnameseSlug(val);
            }
        }

        window.updateSerpPreview();
        window.triggerAutoSave();
    };

    // Xử lý khi người dùng nhập/chỉnh sửa Slug thủ công
    window.onNewsSlugInput = function (el) {
        window.isSlugManual = true;
        window.updateSerpPreview();
        window.triggerAutoSave();
    };

    // Tự động sinh lại Slug theo Tiêu đề khi người dùng nhấn nút "🔄 Tạo từ tiêu đề"
    window.generateSlugFromTitle = function () {
        const titleEl = document.getElementById('art-title');
        const slugEl = document.getElementById('art-slug');
        if (!titleEl || !slugEl) return;

        const titleVal = titleEl.value.trim();
        if (!titleVal) {
            showLdpToast('Vui lòng nhập tiêu đề bài viết trước khi tạo slug!');
            return;
        }

        slugEl.value = window.generateVietnameseSlug(titleVal);
        window.isSlugManual = false;
        window.updateSerpPreview();
        window.triggerAutoSave();
        showLdpToast('🔄 Đã tự động tạo slug chuẩn SEO từ tiêu đề bài viết!');
    };

    // Tương thích ngược
    window.toggleSlugLock = window.generateSlugFromTitle;

    // Bộ đếm ký tự Sa-po (0/500) (STT 8)
    window.onNewsSapoInput = function (el) {
        const val = el ? el.value : (document.getElementById('art-sapo')?.value || '');
        const countEl = document.getElementById('news-sapo-count');
        if (countEl) {
            countEl.innerText = `${val.length} / 500 ký tự`;
            if (val.length > 500) {
                countEl.style.color = 'var(--danger)';
            } else if (val.length >= 450) {
                countEl.style.color = '#fbbf24';
            } else {
                countEl.style.color = 'var(--text-muted)';
            }
        }
        window.updateSerpPreview();
        window.triggerAutoSave();
    };

    // Cập nhật thống kê Số từ & Thời gian đọc (STT 10)
    window.updateWordAndReadingStats = function () {
        const content = document.getElementById('art-content')?.value || '';
        const trimmed = content.trim();
        const wordCount = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;
        const charCount = content.length;
        const readingMins = Math.max(1, Math.ceil(wordCount / 200));

        const wordEl = document.getElementById('art-word-count') || document.getElementById('content-word-count');
        const charEl = document.getElementById('art-char-count');
        const timeEl = document.getElementById('art-reading-time') || document.getElementById('content-reading-time');

        if (wordEl) wordEl.innerText = wordCount.toLocaleString();
        if (charEl) charEl.innerText = charCount.toLocaleString();
        if (timeEl) timeEl.innerText = `${readingMins} phút đọc`;
    };

    // Modal Chọn Banner Quảng Cáo để chèn vào nội dung (STT 9)
    window.openBannerPickerModal = function () {
        const modal = document.getElementById('banner-picker-modal');
        if (modal) modal.style.display = 'flex';
    };

    window.closeBannerPickerModal = function () {
        const modal = document.getElementById('banner-picker-modal');
        if (modal) modal.style.display = 'none';
    };

    window.insertBannerShortcode = function (id, name) {
        const contentEl = document.getElementById('art-content');
        if (!contentEl) return;

        const shortcode = `\n\n[banner id="${id}" name="${name}"]\n\n`;
        const startPos = contentEl.selectionStart || contentEl.value.length;
        const endPos = contentEl.selectionEnd || contentEl.value.length;

        contentEl.value = contentEl.value.substring(0, startPos) + shortcode + contentEl.value.substring(endPos);
        contentEl.focus();
        contentEl.setSelectionRange(startPos + shortcode.length, startPos + shortcode.length);

        window.closeBannerPickerModal();
        window.updateWordAndReadingStats();
        window.triggerAutoSave();
        showLdpToast(`Đã chèn mã Shortcode Banner [${id}] vào nội dung bài viết!`);
    };

    // Chuyển đổi giữa Soạn thảo trực quan và Mã nguồn HTML (STT 10)
    window.isEditorSourceMode = false;
    window.toggleEditorSourceMode = function () {
        const contentEl = document.getElementById('art-content');
        const btnSource = document.getElementById('btn-editor-source');
        if (!contentEl) return;

        window.isEditorSourceMode = !window.isEditorSourceMode;
        if (window.isEditorSourceMode) {
            contentEl.style.fontFamily = 'monospace';
            contentEl.style.color = '#38bdf8';
            contentEl.style.background = 'rgba(0,0,0,0.4)';
            if (btnSource) {
                btnSource.style.color = 'var(--primary)';
                btnSource.style.borderColor = 'var(--primary)';
                btnSource.innerText = '👁️ Chế độ Visual';
            }
            showLdpToast('Đang bật chế độ xem/sửa Mã Nguồn HTML!');
        } else {
            contentEl.style.fontFamily = 'inherit';
            contentEl.style.color = 'inherit';
            contentEl.style.background = 'transparent';
            if (btnSource) {
                btnSource.style.color = 'var(--text-muted)';
                btnSource.style.borderColor = 'var(--border-glass)';
                btnSource.innerText = '<> HTML Source';
            }
            showLdpToast('Đã quay lại chế độ Soạn thảo trực quan!');
        }
    };

    // Modal Nhúng Video YouTube (STT 11)
    window.openYoutubeModal = function () {
        const modal = document.getElementById('youtube-embed-modal');
        if (modal) {
            modal.style.display = 'flex';
            const input = document.getElementById('yt-embed-url');
            if (input) { input.value = ''; input.focus(); }
            const previewBox = document.getElementById('yt-preview-box');
            if (previewBox) previewBox.style.display = 'none';
        }
    };

    window.closeYoutubeModal = function () {
        const modal = document.getElementById('youtube-embed-modal');
        if (modal) modal.style.display = 'none';
    };

    window.extractYoutubeId = function (url) {
        if (!url) return '';
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : '';
    };

    window.previewYoutubeVideo = function (url) {
        const videoId = window.extractYoutubeId(url);
        const previewBox = document.getElementById('yt-preview-box');
        const iframe = document.getElementById('yt-preview-iframe');
        if (videoId && previewBox && iframe) {
            iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
            previewBox.style.display = 'block';
        } else if (previewBox) {
            previewBox.style.display = 'none';
        }
    };

    window.confirmInsertYoutube = function () {
        const urlInput = document.getElementById('yt-embed-url');
        const url = urlInput ? urlInput.value.trim() : '';
        const videoId = window.extractYoutubeId(url);

        if (!videoId) {
            showLdpToast('Vui lòng nhập đường dẫn Video YouTube hợp lệ!');
            return;
        }

        const embedHtml = `\n\n<div class="video-container" style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:18px 0;border-radius:8px;"><iframe src="https://www.youtube.com/embed/${videoId}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allowfullscreen></iframe></div>\n\n`;

        const contentEl = document.getElementById('art-content');
        if (contentEl) {
            const startPos = contentEl.selectionStart || contentEl.value.length;
            const endPos = contentEl.selectionEnd || contentEl.value.length;
            contentEl.value = contentEl.value.substring(0, startPos) + embedHtml + contentEl.value.substring(endPos);
            contentEl.focus();
        }

        window.closeYoutubeModal();
        window.updateWordAndReadingStats();
        window.triggerAutoSave();
        showLdpToast('Đã nhúng video YouTube thành công vào bài viết!');
    };

    // Modal Chọn Bảng Giá Dịch Vụ Gói Cước
    window.openServicePriceModal = function () {
        const modal = document.getElementById('service-picker-modal');
        if (modal) modal.style.display = 'flex';
    };

    window.closeServicePriceModal = function () {
        const modal = document.getElementById('service-picker-modal');
        if (modal) modal.style.display = 'none';
    };

    window.confirmInsertServicePrice = function () {
        const checkedBoxes = document.querySelectorAll('.service-pick-cb:checked');
        const selectedIds = Array.from(checkedBoxes).map(cb => cb.value);

        if (selectedIds.length === 0) {
            showLdpToast('Vui lòng chọn ít nhất một gói cước để tạo bảng so sánh!');
            return;
        }

        const shortcode = `\n\n[service ids="${selectedIds.join(',')}"]\n\n`;
        const contentEl = document.getElementById('art-content');
        if (contentEl) {
            const startPos = contentEl.selectionStart || contentEl.value.length;
            const endPos = contentEl.selectionEnd || contentEl.value.length;
            contentEl.value = contentEl.value.substring(0, startPos) + shortcode + contentEl.value.substring(endPos);
            contentEl.focus();
        }

        window.closeServicePriceModal();
        window.updateWordAndReadingStats();
        window.triggerAutoSave();
        showLdpToast(`Đã chèn Bảng so sánh giá cho [${selectedIds.join(', ')}] vào nội dung!`);
    };

    // =========================================================================
    //        HỆ THỐNG GÓI BÁN ÁP DỤNG (TÁCH RIÊNG KHỎI TEXT EDITOR)
    // =========================================================================
    window.appliedPackagesCatalog = [
        { id: 'int-giga-fptvn', name: 'Internet Giga - Siêu tốc độ cho gia đình', route: 'int-giga-fptvn', category: 'internet', catLabel: 'Internet', tab: 'ECP' },
        { id: 'int-meta-fptvn', name: 'Internet Meta - Chuẩn Wi-Fi 6E', route: 'int-meta-fptvn', category: 'internet', catLabel: 'Internet', tab: 'ECP' },
        { id: 'int-lux800-fptvn', name: 'Internet LUX 800 - Tốc độ cao cho gia đình đông người', route: 'int-lux800-fptvn', category: 'internet', catLabel: 'Internet', tab: 'ECP' },
        { id: 'int-lux1000-fptvn', name: 'Internet LUX 1000 - Siêu tốc 1Gbps', route: 'int-lux1000-fptvn', category: 'internet', catLabel: 'Internet', tab: 'ECP' },
        { id: 'int-dn-500', name: 'Internet Doanh Nghiệp 500Mbps', route: '-', category: 'internet', catLabel: 'Internet', tab: 'ECP' },
        { id: 'cam-iq3-fptvn', name: 'FPT Camera IQ3 - An ninh thông minh', route: 'cam-iq3-fptvn', category: 'camera', catLabel: 'Camera', tab: 'ECP' },
        { id: 'cam-se-fptvn', name: 'FPT Camera SE - Lưu trữ Cloud bảo mật', route: 'cam-se-fptvn', category: 'camera', catLabel: 'Camera', tab: 'ECP' },
        { id: 'play-smax-fptvn', name: 'FPT Play SMAX - Giải trí không giới hạn', route: 'play-smax-fptvn', category: 'sa', catLabel: 'Gói SA', tab: 'ECP' },
        { id: 'play-svip-fptvn', name: 'FPT Play SVIP - Độc quyền thể thao C1', route: 'play-svip-fptvn', category: 'sa', catLabel: 'Gói SA', tab: 'ECP' },
        { id: 'dev-wifi7-fptvn', name: 'Thiết bị Router Wi-Fi 7 thế hệ mới', route: 'dev-wifi7-fptvn', category: 'other', catLabel: 'Thiết bị khác', tab: 'ECP' },
        // Tab FCP
        { id: 'fcp-giga-corp', name: 'FCP Internet Giga Doanh Nghiệp', route: 'fcp-giga-corp', category: 'internet', catLabel: 'Internet', tab: 'FCP' },
        { id: 'fcp-meta-lease', name: 'FCP Internet Meta Leased Line', route: 'fcp-meta-lease', category: 'internet', catLabel: 'Internet', tab: 'FCP' },
        { id: 'fcp-cam-ai-biz', name: 'FCP Camera AI Doanh Nghiệp & Nhà Xưởng', route: 'fcp-cam-ai-biz', category: 'camera', catLabel: 'Camera', tab: 'FCP' },
        { id: 'fcp-sa-smart-office', name: 'FCP Gói SA Smart Office FPT', route: 'fcp-sa-smart-office', category: 'sa', catLabel: 'Gói SA', tab: 'FCP' }
    ];

    window.appliedPackagesState = {
        tab: 'ECP',
        category: 'all',
        keyword: '',
        selectedIds: new Set(['int-giga-fptvn', 'int-meta-fptvn'])
    };

    window.switchPkgTab = function (tabName) {
        window.appliedPackagesState.tab = tabName;
        document.querySelectorAll('.pkg-sys-tab').forEach(btn => {
            const isMatch = btn.id === ('pkg-tab-' + tabName.toLowerCase());
            btn.classList.toggle('active', isMatch);
            btn.style.background = isMatch ? 'rgba(255,255,255,0.14)' : 'transparent';
            btn.style.color = isMatch ? '#fff' : 'var(--text-muted)';
        });
        window.renderPkgList();
    };

    window.filterPkgCategory = function (catKey) {
        window.appliedPackagesState.category = catKey;
        document.querySelectorAll('.pkg-cat-pill').forEach(pill => {
            const isMatch = pill.getAttribute('data-cat') === catKey;
            pill.classList.toggle('active', isMatch);
            pill.style.background = isMatch ? '#ea580c' : 'rgba(255,255,255,0.06)';
            pill.style.color = isMatch ? '#fff' : 'var(--text-muted)';
            pill.style.border = isMatch ? 'none' : '1px solid var(--border-glass)';
        });
        window.renderPkgList();
    };

    window.searchPkgKeyword = function (val) {
        window.appliedPackagesState.keyword = (val || '').trim().toLowerCase();
        window.renderPkgList();
    };

    window.togglePkgSelect = function (pkgId) {
        if (window.appliedPackagesState.selectedIds.has(pkgId)) {
            window.appliedPackagesState.selectedIds.delete(pkgId);
        } else {
            window.appliedPackagesState.selectedIds.add(pkgId);
        }
        window.syncAppliedPackagesState();
    };

    window.clearAllSelectedPkgs = function () {
        window.appliedPackagesState.selectedIds.clear();
        window.syncAppliedPackagesState();
        showLdpToast('Đã bỏ chọn toàn bộ gói bán áp dụng!');
    };

    window.setAppliedPackages = function (idList) {
        window.appliedPackagesState.selectedIds = new Set(Array.isArray(idList) ? idList : (idList || '').split(',').map(s => s.trim()).filter(Boolean));
        window.syncAppliedPackagesState();
    };

    window.syncAppliedPackagesState = function () {
        const arr = Array.from(window.appliedPackagesState.selectedIds);
        const inputHidden = document.getElementById('art-applied-packages');
        if (inputHidden) inputHidden.value = arr.join(',');

        const badgeCount = document.getElementById('art-pkg-badge-count');
        if (badgeCount) badgeCount.innerText = `${arr.length} gói`;

        window.renderPkgList();
    };

    window.renderPkgList = function () {
        const container = document.getElementById('pkg-items-list-box');
        if (!container) return;

        const currentTab = window.appliedPackagesState.tab;
        const currentCat = window.appliedPackagesState.category;
        const keyword = window.appliedPackagesState.keyword;

        const filtered = window.appliedPackagesCatalog.filter(item => {
            if (item.tab !== currentTab) return false;
            if (currentCat !== 'all' && item.category !== currentCat) return false;
            if (keyword) {
                const matchName = item.name.toLowerCase().includes(keyword);
                const matchRoute = item.route.toLowerCase().includes(keyword);
                if (!matchName && !matchRoute) return false;
            }
            return true;
        });

        if (filtered.length === 0) {
            container.innerHTML = '<div style="text-align:center;padding:16px 8px;font-size:11.5px;color:var(--text-muted);">Không tìm thấy gói cước nào phù hợp</div>';
            return;
        }

        container.innerHTML = filtered.map(item => {
            const isChecked = window.appliedPackagesState.selectedIds.has(item.id);
            return `
                <label style="display:flex;align-items:center;gap:10px;padding:7px 10px;border-radius:8px;background:${isChecked ? 'rgba(234,88,12,0.1)' : 'rgba(255,255,255,0.02)'};border:1px solid ${isChecked ? 'rgba(234,88,12,0.4)' : 'rgba(255,255,255,0.06)'};cursor:pointer;transition:all 0.15s ease;">
                    <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="window.togglePkgSelect('${item.id}')"
                        style="width:15px;height:15px;accent-color:#ea580c;cursor:pointer;flex-shrink:0;">
                    <div style="flex:1;min-width:0;">
                        <div style="font-size:12px;font-weight:700;color:${isChecked ? '#ff8c42' : '#fff'};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                            ${item.name}
                        </div>
                        <div style="font-size:10.5px;font-family:monospace;color:var(--text-muted);margin-top:1px;">
                            ${item.route}
                        </div>
                    </div>
                    <span style="font-size:10.5px;color:var(--text-muted);background:rgba(255,255,255,0.05);padding:1px 6px;border-radius:4px;flex-shrink:0;">
                        ${item.catLabel}
                    </span>
                </label>
            `;
        }).join('');
    };

    // =========================================================================
    //        HỖ TRỢ SOẠN THẢO WYSIWYG & CHÈN ẢNH ĐƠN (PROMPT INSERT IMAGE)
    // =========================================================================
    window.promptInsertLink = function () {
        const url = prompt('Nhập đường dẫn liên kết (URL):', 'https://fpt.vn/');
        if (!url) return;
        const text = prompt('Nhập văn bản hiển thị cho liên kết:', 'Tìm hiểu thêm tại đây');
        const linkHtml = `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color:var(--primary);text-decoration:underline;">${text || url}</a>`;
        const contentEl = document.getElementById('art-content');
        if (contentEl) {
            const startPos = contentEl.selectionStart || contentEl.value.length;
            const endPos = contentEl.selectionEnd || contentEl.value.length;
            contentEl.value = contentEl.value.substring(0, startPos) + linkHtml + contentEl.value.substring(endPos);
            contentEl.focus();
            window.updateWordAndReadingStats();
            window.triggerAutoSave();
            showLdpToast('Đã chèn liên kết vào nội dung bài viết!');
        }
    };

    // 1. Áp dụng Cỡ chữ (Font size - Feedback MKT)
    window.applyEditorFontSize = function (size) {
        if (!size) return;
        const contentEl = document.getElementById('art-content');
        if (!contentEl) return;
        const startPos = contentEl.selectionStart || 0;
        const endPos = contentEl.selectionEnd || 0;
        const selected = contentEl.value.substring(startPos, endPos) || 'văn bản';
        const snippet = `<span style="font-size:${size};">${selected}</span>`;
        contentEl.value = contentEl.value.substring(0, startPos) + snippet + contentEl.value.substring(endPos);
        contentEl.focus();
        contentEl.setSelectionRange(startPos + snippet.length, startPos + snippet.length);
        window.updateWordAndReadingStats();
        window.triggerAutoSave();
        showLdpToast(`Đã áp dụng cỡ chữ ${size} cho đoạn văn bản!`);
    };

    // 2. Bảng Màu Chữ (Text Color - Feedback MKT)
    window.toggleTextColorPalette = function (e) {
        if (e) e.stopPropagation();
        const pop = document.getElementById('text-color-palette-pop');
        const popHl = document.getElementById('text-highlight-palette-pop');
        if (popHl) popHl.style.display = 'none';
        if (pop) {
            pop.style.display = pop.style.display === 'block' ? 'none' : 'block';
        }
    };

    window.applyEditorTextColor = function (color) {
        const pop = document.getElementById('text-color-palette-pop');
        if (pop) pop.style.display = 'none';
        const contentEl = document.getElementById('art-content');
        if (!contentEl) return;
        const startPos = contentEl.selectionStart || 0;
        const endPos = contentEl.selectionEnd || 0;
        const selected = contentEl.value.substring(startPos, endPos) || 'văn bản';
        const snippet = color === 'inherit' ? selected : `<span style="color:${color};font-weight:600;">${selected}</span>`;
        contentEl.value = contentEl.value.substring(0, startPos) + snippet + contentEl.value.substring(endPos);
        contentEl.focus();
        contentEl.setSelectionRange(startPos + snippet.length, startPos + snippet.length);
        window.updateWordAndReadingStats();
        window.triggerAutoSave();
        showLdpToast(`Đã đổi màu chữ thành [${color}]!`);
    };

    // 3. Highlight Text (Tô màu nền - Feedback MKT)
    window.toggleHighlightPalette = function (e) {
        if (e) e.stopPropagation();
        const popHl = document.getElementById('text-highlight-palette-pop');
        const popColor = document.getElementById('text-color-palette-pop');
        if (popColor) popColor.style.display = 'none';
        if (popHl) {
            popHl.style.display = popHl.style.display === 'block' ? 'none' : 'block';
        }
    };

    window.applyEditorHighlight = function (color) {
        const popHl = document.getElementById('text-highlight-palette-pop');
        if (popHl) popHl.style.display = 'none';
        const contentEl = document.getElementById('art-content');
        if (!contentEl) return;
        const startPos = contentEl.selectionStart || 0;
        const endPos = contentEl.selectionEnd || 0;
        const selected = contentEl.value.substring(startPos, endPos) || 'văn bản nổi bật';
        const snippet = color === 'transparent' ? selected : `<mark style="background-color:${color};padding:2px 5px;border-radius:4px;color:#0f172a;">${selected}</mark>`;
        contentEl.value = contentEl.value.substring(0, startPos) + snippet + contentEl.value.substring(endPos);
        contentEl.focus();
        contentEl.setSelectionRange(startPos + snippet.length, startPos + snippet.length);
        window.updateWordAndReadingStats();
        window.triggerAutoSave();
        showLdpToast('Đã highlight văn bản thành công!');
    };

    // Tự động đóng popover màu khi click ra ngoài
    document.addEventListener('click', function () {
        const popColor = document.getElementById('text-color-palette-pop');
        const popHl = document.getElementById('text-highlight-palette-pop');
        if (popColor) popColor.style.display = 'none';
        if (popHl) popHl.style.display = 'none';
    });

    // 4. Chèn Bảng Dữ Liệu (Table - Feedback MKT)
    window.openInsertTableModal = function () {
        let modal = document.getElementById('table-insert-modal');
        if (!modal) {
            const html = `
            <div id="table-insert-modal" style="display:flex;position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.75);backdrop-filter:blur(4px);justify-content:center;align-items:center;">
                <div style="background:#18181b;border:1px solid rgba(56,189,248,0.3);border-radius:12px;width:480px;max-width:92%;padding:22px;box-shadow:0 20px 50px rgba(0,0,0,0.85);color:#fff;font-family:'Inter',sans-serif;">
                    <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--border-glass);padding-bottom:10px;margin-bottom:14px;">
                        <h3 style="margin:0;font-size:16px;color:#38bdf8;font-weight:700;">📊 Chèn Bảng Dữ Liệu / So Sánh</h3>
                        <span style="cursor:pointer;font-size:22px;color:#a1a1aa;" onclick="window.closeInsertTableModal()">&times;</span>
                    </div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;">
                        <div>
                            <label style="font-size:12px;color:var(--text-muted);display:block;margin-bottom:4px;">Số dòng (Rows):</label>
                            <input type="number" id="tbl-input-rows" class="form-input" value="3" min="1" max="20" style="font-size:13px;padding:6px 10px;">
                        </div>
                        <div>
                            <label style="font-size:12px;color:var(--text-muted);display:block;margin-bottom:4px;">Số cột (Columns):</label>
                            <input type="number" id="tbl-input-cols" class="form-input" value="3" min="1" max="8" style="font-size:13px;padding:6px 10px;">
                        </div>
                    </div>
                    <div style="margin-bottom:16px;">
                        <label style="font-size:12px;color:var(--text-muted);display:block;margin-bottom:4px;">Kiểu giao diện Bảng:</label>
                        <select class="form-select" id="tbl-input-style" style="font-size:12.5px;padding:6px 10px;">
                            <option value="fpt-orange" selected>Cam FPT nổi bật (Header cam #ea580c, viền gọn)</option>
                            <option value="modern-slate">Xám sang trọng (Header Slate, zebra striping)</option>
                            <option value="minimal">Tối giản (Minimal border, nền trong suốt)</option>
                        </select>
                    </div>
                    <div style="display:flex;justify-content:flex-end;gap:8px;">
                        <button type="button" class="btn btn-secondary" onclick="window.closeInsertTableModal()" style="font-size:12px;padding:6px 14px;">Hủy</button>
                        <button type="button" class="btn btn-primary" onclick="window.confirmInsertTable()" style="font-size:12px;padding:6px 16px;background:var(--primary-gradient);">➕ Chèn Bảng vào bài</button>
                    </div>
                </div>
            </div>`;
            document.body.insertAdjacentHTML('beforeend', html);
        } else {
            modal.style.display = 'flex';
        }
    };

    window.closeInsertTableModal = function () {
        const modal = document.getElementById('table-insert-modal');
        if (modal) modal.style.display = 'none';
    };

    window.confirmInsertTable = function () {
        const rows = Math.max(1, parseInt(document.getElementById('tbl-input-rows')?.value || 3, 10));
        const cols = Math.max(1, parseInt(document.getElementById('tbl-input-cols')?.value || 3, 10));
        const style = document.getElementById('tbl-input-style')?.value || 'fpt-orange';

        let headerBg = '#ea580c';
        let headerColor = '#ffffff';
        if (style === 'modern-slate') {
            headerBg = '#1e293b';
        } else if (style === 'minimal') {
            headerBg = '#f1f5f9';
            headerColor = '#0f172a';
        }

        let tableHtml = `\n\n<div class="table-responsive" style="overflow-x:auto;margin:20px 0;border-radius:8px;border:1px solid #e2e8f0;box-shadow:0 2px 8px rgba(0,0,0,0.06);"><table style="width:100%;border-collapse:collapse;font-size:13.5px;text-align:left;">\n<thead>\n<tr style="background:${headerBg};color:${headerColor};">\n`;

        for (let c = 1; c <= cols; c++) {
            tableHtml += `  <th style="padding:10px 14px;border:1px solid rgba(255,255,255,0.15);font-weight:700;">Tiêu đề cột ${c}</th>\n`;
        }
        tableHtml += `</tr>\n</thead>\n<tbody>\n`;

        for (let r = 1; r <= rows; r++) {
            const rowBg = r % 2 === 0 ? '#f8fafc' : '#ffffff';
            tableHtml += `<tr style="background:${rowBg};color:#334155;">\n`;
            for (let c = 1; c <= cols; c++) {
                tableHtml += `  <td style="padding:9px 14px;border:1px solid #e2e8f0;">Dữ liệu ${r}.${c}</td>\n`;
            }
            tableHtml += `</tr>\n`;
        }
        tableHtml += `</tbody>\n</table></div>\n\n`;

        const contentEl = document.getElementById('art-content');
        if (contentEl) {
            const startPos = contentEl.selectionStart || contentEl.value.length;
            const endPos = contentEl.selectionEnd || contentEl.value.length;
            contentEl.value = contentEl.value.substring(0, startPos) + tableHtml + contentEl.value.substring(endPos);
            contentEl.focus();
            contentEl.setSelectionRange(startPos + tableHtml.length, startPos + tableHtml.length);
        }

        window.closeInsertTableModal();
        window.updateWordAndReadingStats();
        window.triggerAutoSave();
        showLdpToast(`Đã chèn Bảng dữ liệu (${rows} dòng x ${cols} cột) vào bài viết!`);
    };

    // 5. Chèn Wordcount & Reading Time Badge trực tiếp vào bài viết (Feedback MKT)
    window.insertReadingTimeBadge = function () {
        const content = document.getElementById('art-content')?.value || '';
        const trimmed = content.trim();
        const wordCount = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;
        const readingMins = Math.max(1, Math.ceil(wordCount / 200));

        const badgeHtml = `\n\n<div class="fpt-reading-badge" style="display:inline-flex;align-items:center;gap:10px;padding:6px 16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:20px;font-size:12.5px;color:#475569;margin:12px 0 16px;box-shadow:0 1px 3px rgba(0,0,0,0.05);"><span>⏱️ <strong>${readingMins} phút</strong> đọc</span><span style="color:#cbd5e1;">•</span><span>📝 <strong>${wordCount.toLocaleString()}</strong> từ</span></div>\n\n`;

        const contentEl = document.getElementById('art-content');
        if (!contentEl) return;

        const startPos = contentEl.selectionStart || 0;
        const endPos = contentEl.selectionEnd || 0;
        if (startPos > 0) {
            contentEl.value = contentEl.value.substring(0, startPos) + badgeHtml + contentEl.value.substring(endPos);
        } else {
            contentEl.value = badgeHtml + contentEl.value;
        }

        contentEl.focus();
        window.updateWordAndReadingStats();
        window.triggerAutoSave();
        showLdpToast(`⏱️ Đã chèn Thống kê đọc bài (${readingMins} phút • ${wordCount} từ) vào nội dung!`);
    };

    // ==========================================
    // QUẢN LÝ KHO FORM THU LEADS TẬP TRUNG (LEAD FORM MANAGER)
    // Hỗ trợ chèn linh hoạt theo mã tag #form-register hoặc shortcode [lead_form id="..."]
    // ==========================================
    window.leadFormsData = {
        'form-register': {
            id: 'form-register',
            tag: '#form-register',
            name: 'Form Đăng ký Lắp mạng & FPT Play',
            category: 'Internet & TV',
            title: 'Đăng Ký Tư Vấn Gói Cước Internet FPT & FPT Play',
            desc: 'Để lại thông tin để chuyên viên FPT liên hệ khảo sát hạ tầng & tư vấn gói cước trong vòng 10 phút!',
            fields: [
                { id: 'name', label: 'Họ và tên của bạn *', type: 'text', placeholder: 'Nguyễn Văn A' },
                { id: 'phone', label: 'Số điện thoại liên hệ *', type: 'tel', placeholder: '0988 123 456' },
                { id: 'address', label: 'Địa chỉ lắp đặt...', type: 'text', placeholder: 'Số 10 Phạm Văn Bạch, Cầu Giấy, Hà Nội' }
            ],
            btnText: 'Gửi yêu cầu tư vấn',
            btnColor: '#ff6b00',
            leads: 142,
            active: true
        },
        'form-camera': {
            id: 'form-camera',
            tag: '#form-camera',
            name: 'Form Trải nghiệm Camera AI & Cloud',
            category: 'FPT Camera',
            title: 'Đăng Ký Trải Nghiệm Thử Camera An Ninh AI FPT',
            desc: 'Miễn phí lắp đặt trải nghiệm 7 ngày tại nhà cùng giải pháp lưu trữ đám mây chuẩn Tier III!',
            fields: [
                { id: 'name', label: 'Họ và tên *', type: 'text', placeholder: 'Trần Thị B' },
                { id: 'phone', label: 'Số điện thoại *', type: 'tel', placeholder: '0912 345 678' },
                { id: 'address', label: 'Địa chỉ nhận lắp thử...', type: 'text', placeholder: 'Số nhà, Phường/Xã, Quận/Huyện' }
            ],
            btnText: 'Nhận trải nghiệm 7 ngày',
            btnColor: '#10b981',
            leads: 89,
            active: true
        },
        'form-voucher': {
            id: 'form-voucher',
            tag: '#form-voucher',
            name: 'Form Nhận Voucher Ưu Đãi 2026',
            category: 'Khuyến mãi',
            title: 'Nhận Ngay Voucher Giảm 200.000đ Phí Hòa Mạng',
            desc: 'Ưu đãi dành riêng cho 100 khách hàng đăng ký trực tuyến đầu tiên trong tháng!',
            fields: [
                { id: 'name', label: 'Họ và tên *', type: 'text', placeholder: 'Lê Hoàng C' },
                { id: 'phone', label: 'Số điện thoại nhận mã SMS *', type: 'tel', placeholder: '0903 888 999' }
            ],
            btnText: 'Lấy mã Voucher ngay',
            btnColor: '#f59e0b',
            leads: 315,
            active: true
        },
        'form-enterprise': {
            id: 'form-enterprise',
            tag: '#form-enterprise',
            name: 'Form Doanh Nghiệp & Kênh Thuê Riêng',
            category: 'Doanh nghiệp',
            title: 'Tư Vấn Giải Pháp Băng Thông Doanh Nghiệp & Kênh Thuê Riêng',
            desc: 'Cam kết băng thông quốc tế lên đến 100Mbps, hỗ trợ kỹ thuật tận nơi 24/7!',
            fields: [
                { id: 'company', label: 'Tên Doanh nghiệp / Tổ chức *', type: 'text', placeholder: 'Công ty Cổ phần Công nghệ ABC' },
                { id: 'name', label: 'Người liên hệ đại diện *', type: 'text', placeholder: 'Phạm Đức D' },
                { id: 'phone', label: 'Số điện thoại *', type: 'tel', placeholder: '0936 789 999' }
            ],
            btnText: 'Gửi yêu cầu khảo sát',
            btnColor: '#2563eb',
            leads: 45,
            active: true
        }
    };

    // Modal Quản Lý Kho Form Riêng (Lead Forms Center / Form Builder)
    window.openLeadFormsManagerModal = function () {
        let modal = document.getElementById('lead-forms-manager-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'lead-forms-manager-modal';
            modal.style.cssText = 'display:none;position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.82);backdrop-filter:blur(6px);align-items:center;justify-content:center;padding:16px;';
            document.body.appendChild(modal);
        }

        let tableRowsHtml = '';
        for (let key in window.leadFormsData) {
            const f = window.leadFormsData[key];
            tableRowsHtml += `
                <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
                    <td style="padding:12px 14px;">
                        <div style="font-weight:700;color:#fff;font-size:13px;">${f.name}</div>
                        <div style="font-size:11px;color:var(--text-muted);margin-top:2px;">${f.title}</div>
                    </td>
                    <td style="padding:12px 14px;">
                        <span style="background:rgba(255,255,255,0.08);padding:3px 8px;border-radius:4px;font-size:11px;color:#cbd5e1;">${f.category}</span>
                    </td>
                    <td style="padding:12px 14px;">
                        <div style="display:flex;align-items:center;gap:6px;">
                            <code style="background:rgba(52,211,153,0.12);color:#34d399;padding:3px 7px;border-radius:4px;font-weight:700;font-size:12px;">${f.tag}</code>
                            <button type="button" class="btn btn-secondary btn-sm" onclick="window.copyToClipboardText('${f.tag}', 'Đã sao chép mã ${f.tag}!')" style="font-size:10.5px;padding:2px 6px;" title="Sao chép mã tag để dán vào bài viết">📋 Copy</button>
                        </div>
                        <div style="font-size:10px;color:var(--text-muted);margin-top:3px;">hoặc shortcode: <code>[lead_form id="${f.id}"]</code></div>
                    </td>
                    <td style="padding:12px 14px;text-align:center;">
                        <span style="font-weight:800;color:var(--primary);font-size:13px;">${f.leads}</span>
                        <span style="font-size:10px;color:var(--text-muted);display:block;">leads</span>
                    </td>
                    <td style="padding:12px 14px;text-align:center;">
                        <span style="background:rgba(16,185,129,0.15);color:#10b981;font-size:10.5px;padding:2px 8px;border-radius:12px;font-weight:700;">Đang chạy</span>
                    </td>
                    <td style="padding:12px 14px;text-align:right;">
                        <div style="display:inline-flex;gap:6px;">
                            <button type="button" class="btn btn-primary btn-sm" onclick="window.insertFormTagDirectly('${f.tag}'); window.closeLeadFormsManagerModal();" style="font-size:11.5px;padding:4px 10px;background:var(--primary-gradient);">➕ Chèn vào bài</button>
                        </div>
                    </td>
                </tr>
            `;
        }

        modal.innerHTML = `
            <div style="background:#131822;border:1px solid rgba(255,255,255,0.12);border-radius:14px;width:950px;max-width:96%;max-height:88vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,0.85);font-family:'Inter',sans-serif;">
                <div style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,0.02);">
                    <div style="display:flex;align-items:center;gap:10px;">
                        <span style="font-size:18px;">📋</span>
                        <div>
                            <h3 style="margin:0;font-size:16px;color:#fff;font-weight:800;">Quản Lý Kho Form Thu Leads (Lead Forms Center)</h3>
                            <div style="font-size:11.5px;color:var(--text-muted);margin-top:2px;">Quản lý form độc lập, có thể gọi ra ở bất kỳ vị trí nào trong bài viết bằng mã tag (như <code>#form-register</code>)</div>
                        </div>
                    </div>
                    <button type="button" onclick="window.closeLeadFormsManagerModal()" style="background:none;border:none;color:var(--text-muted);font-size:22px;cursor:pointer;">&times;</button>
                </div>

                <div style="padding:14px 20px;background:rgba(56,189,248,0.06);border-bottom:1px solid rgba(56,189,248,0.15);display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;">
                    <div style="font-size:12px;color:#38bdf8;line-height:1.5;">
                        💡 <strong>Tính năng Siêu linh hoạt (Flexible Embedding):</strong> Chỉ cần gõ mã định danh <code>#form-register</code> vào bất kỳ dòng nào trong nội dung bài viết, hệ thống sẽ tự động bắt mã và nhúng đúng giao diện Form tương ứng! Khi sửa nội dung form tại đây, tất cả bài viết sẽ tự động cập nhật ngay lập tức.
                    </div>
                    <button type="button" class="btn btn-secondary btn-sm" onclick="showLdpToast('Đang phát triển trình tạo Form động (Form Builder drag & drop)!')" style="font-size:11.5px;padding:6px 12px;color:var(--primary);border-color:rgba(255,107,0,0.4);font-weight:700;white-space:nowrap;">+ Tạo Form mới</button>
                </div>

                <div style="flex:1;overflow-y:auto;padding:16px 20px;">
                    <table style="width:100%;border-collapse:collapse;font-size:12.5px;">
                        <thead>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.1);color:var(--text-muted);text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">
                                <th style="padding:8px 14px;">Tên Form / Mô tả</th>
                                <th style="padding:8px 14px;">Danh mục</th>
                                <th style="padding:8px 14px;">Mã Gọi / Shortcode</th>
                                <th style="padding:8px 14px;text-align:center;">Leads thu về</th>
                                <th style="padding:8px 14px;text-align:center;">Trạng thái</th>
                                <th style="padding:8px 14px;text-align:right;">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${tableRowsHtml}
                        </tbody>
                    </table>
                </div>

                <div style="padding:12px 20px;border-top:1px solid rgba(255,255,255,0.08);display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,0.02);">
                    <div style="font-size:11.5px;color:var(--text-muted);">
                        Tổng cộng: <strong>4 mẫu form</strong> đang hoạt động trên hệ thống CMS
                    </div>
                    <button type="button" class="btn btn-secondary" onclick="window.closeLeadFormsManagerModal()" style="font-size:12px;padding:6px 16px;">Đóng</button>
                </div>
            </div>
        `;
        modal.style.display = 'flex';
    };

    window.closeLeadFormsManagerModal = function () {
        const modal = document.getElementById('lead-forms-manager-modal');
        if (modal) modal.style.display = 'none';
    };

    // ==========================================
    // RENDER BẢNG QUẢN LÝ KHO FORM THU LEADS CHÍNH
    // ==========================================
    window.renderLeadFormsMainTable = function () {
        const tbody = document.getElementById('leadforms-table-tbody');
        if (!tbody) return;

        const keyword = (document.getElementById('leadforms-search-keyword')?.value || '').toLowerCase().trim();
        const typeFilter = (document.getElementById('leadforms-type-filter')?.value || '').toLowerCase().trim();
        const statusFilter = (document.getElementById('leadforms-status-filter')?.value || '').toLowerCase().trim();

        let html = '';
        let stt = 1;

        for (let key in window.leadFormsData) {
            const f = window.leadFormsData[key];
            const fType = (f.category || '').toLowerCase();
            const fStatus = f.active ? 'active' : 'paused';

            // Filter
            if (keyword) {
                const matchName = (f.name || '').toLowerCase().includes(keyword);
                const matchTag = (f.tag || '').toLowerCase().includes(keyword);
                const matchTitle = (f.title || '').toLowerCase().includes(keyword);
                if (!matchName && !matchTag && !matchTitle) continue;
            }
            if (typeFilter) {
                if (typeFilter === 'b2b' && !fType.includes('doanh nghiệp') && f.id !== 'form-enterprise') continue;
                if (typeFilter === 'b2c' && !fType.includes('internet') && !fType.includes('camera')) continue;
                if (typeFilter === 'survey' && !fType.includes('khảo sát') && f.id !== 'form-voucher') continue;
            }
            if (statusFilter && fStatus !== statusFilter) continue;

            const fieldsList = (f.fields || []).map(field => {
                const label = typeof field === 'object' ? field.label.replace('*', '').trim() : field;
                return `<span style="background:rgba(255,255,255,0.06); color:#cbd5e1; padding:2px 7px; border-radius:4px; font-size:11px; margin:2px 3px 2px 0; display:inline-block;">${label}</span>`;
            }).join('');

            const articleCount = f.id === 'form-register' ? 24 : f.id === 'form-camera' ? 12 : f.id === 'form-voucher' ? 38 : 9;

            html += `
                <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
                    <td style="text-align:center; padding:12px 8px; color:var(--text-muted); font-size:12px;">${stt++}</td>
                    <td style="padding:12px 10px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                            <code style="background:rgba(52,211,153,0.12); color:#34d399; padding:3px 7px; border-radius:4px; font-weight:700; font-size:12px;">${f.tag}</code>
                            <button type="button" class="btn btn-secondary btn-xs" onclick="window.copyToClipboardText('${f.tag}', 'Đã sao chép mã tag ${f.tag}!')" style="font-size:10px; padding:2px 5px;" title="Copy mã tag">📋</button>
                        </div>
                        <div style="font-size:10px; color:var(--text-muted); margin-top:3px;">Shortcode: <code>[lead_form id="${f.id}"]</code></div>
                    </td>
                    <td style="padding:12px 10px;">
                        <div style="font-weight:700; color:#fff; font-size:13px;">${f.name}</div>
                        <div style="font-size:11.5px; color:var(--text-muted); margin-top:2px;">${f.title}</div>
                    </td>
                    <td style="padding:12px 10px;">
                        <span style="background:rgba(59,130,246,0.12); color:#60a5fa; border:1px solid rgba(59,130,246,0.3); padding:3px 8px; border-radius:6px; font-size:11px; font-weight:600;">
                            ${f.category}
                        </span>
                    </td>
                    <td style="padding:12px 10px; max-width:260px;">
                        ${fieldsList}
                    </td>
                    <td style="padding:12px 10px; text-align:center;">
                        <span style="font-weight:700; color:#fff; font-size:13px;">${articleCount}</span>
                        <span style="font-size:10.5px; color:var(--text-muted); display:block;">bài viết</span>
                    </td>
                    <td style="padding:12px 10px; text-align:center;">
                        <span style="font-weight:800; color:var(--primary); font-size:14px;">${f.leads || 0}</span>
                        <span style="font-size:10.5px; color:var(--text-muted); display:block;">leads</span>
                    </td>
                    <td style="padding:12px 10px; text-align:center;">
                        <span onclick="window.toggleLeadFormStatus('${f.id}')" style="cursor:pointer; background:${f.active ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)'}; color:${f.active ? '#10b981' : 'var(--danger)'}; border:1px solid ${f.active ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}; font-size:10.5px; padding:3px 8px; border-radius:12px; font-weight:700; display:inline-block;" title="Bấm để bật/tắt">
                            ${f.active ? '● Hoạt động' : '○ Tạm dừng'}
                        </span>
                    </td>
                    <td style="padding:12px 10px; text-align:right;">
                        <div style="display:inline-flex; gap:5px;">
                            <button type="button" class="btn btn-secondary btn-xs" onclick="window.previewLeadFormModal('${f.id}')" style="padding:4px 8px; font-size:11px;" title="Xem trước giao diện">👁️</button>
                            <button type="button" class="btn btn-secondary btn-xs" onclick="window.openCreateLeadFormModal('${f.id}')" style="padding:4px 8px; font-size:11px;" title="Chỉnh sửa Form">✏️</button>
                            <button type="button" class="btn btn-secondary btn-xs" onclick="showLdpToast('Đang xuất ${f.leads || 0} Leads định dạng CSV/Excel...')" style="padding:4px 8px; font-size:11px; color:var(--success);" title="Xuất dữ liệu Leads">📥</button>
                        </div>
                    </td>
                </tr>
            `;
        }

        tbody.innerHTML = html || '<tr><td colspan="9" style="text-align:center; padding:24px; color:var(--text-muted); font-size:12.5px;">Không tìm thấy form thu leads nào phù hợp với bộ lọc.</td></tr>';
    };

    window.filterLeadFormsTable = function () {
        window.renderLeadFormsMainTable();
    };

    window.toggleLeadFormStatus = function (id) {
        if (window.leadFormsData && window.leadFormsData[id]) {
            window.leadFormsData[id].active = !window.leadFormsData[id].active;
            window.renderLeadFormsMainTable();
            showLdpToast(`Đã ${window.leadFormsData[id].active ? 'kích hoạt' : 'tạm dừng'} form: ${window.leadFormsData[id].name}`);
        }
    };

    window.previewLeadFormModal = function (id) {
        const f = window.leadFormsData ? window.leadFormsData[id] : null;
        if (!f) return;

        let modal = document.getElementById('lead-form-preview-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'lead-form-preview-modal';
            modal.style.cssText = 'display:none;position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.85);backdrop-filter:blur(6px);align-items:center;justify-content:center;padding:16px;';
            document.body.appendChild(modal);
        }

        const fieldsHtml = (f.fields || []).map(field => {
            return `
                <div style="margin-bottom:12px;">
                    <label style="display:block; font-size:12px; color:var(--text-muted); margin-bottom:4px;">${field.label}</label>
                    <input type="${field.type || 'text'}" class="form-input" placeholder="${field.placeholder || ''}" style="width:100%; font-size:13px; padding:8px 12px; background:rgba(0,0,0,0.3); border:1px solid var(--border-glass);" readonly>
                </div>
            `;
        }).join('');

        modal.innerHTML = `
            <div style="background:#131822; border:1px solid rgba(52,211,153,0.35); border-radius:14px; width:520px; max-width:94%; padding:22px; box-shadow:0 24px 70px rgba(0,0,0,0.9); color:#fff; font-family:'Inter',sans-serif;">
                <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:12px; margin-bottom:16px;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:18px;">👁️</span>
                        <h3 style="margin:0; font-size:15px; color:#fff; font-weight:700;">Xem Trước Form Thu Leads Ngoài Website</h3>
                    </div>
                    <span style="cursor:pointer; font-size:22px; color:#a1a1aa;" onclick="document.getElementById('lead-form-preview-modal').style.display='none'">&times;</span>
                </div>

                <div style="background:rgba(255,255,255,0.02); border:1px solid rgba(52,211,153,0.2); border-radius:10px; padding:18px; margin-bottom:16px;">
                    <h4 style="margin:0 0 6px 0; font-size:15px; color:#fff; font-weight:800;">${f.title}</h4>
                    <p style="font-size:12px; color:var(--text-muted); margin:0 0 16px 0; line-height:1.5;">${f.desc}</p>
                    ${fieldsHtml}
                    <button type="button" class="btn btn-primary" style="width:100%; background:${f.btnColor || 'var(--primary-gradient)'}; padding:10px; font-weight:700; border:none; margin-top:6px; cursor:default;">
                        ${f.btnText || 'Gửi thông tin'}
                    </button>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; font-size:11.5px; color:var(--text-muted);">
                    <span>Mã nhúng: <code style="color:#34d399;">${f.tag}</code></span>
                    <button type="button" class="btn btn-secondary btn-sm" onclick="document.getElementById('lead-form-preview-modal').style.display='none'">Đóng</button>
                </div>
            </div>
        `;
        modal.style.display = 'flex';
    };

    window.openCreateLeadFormModal = function (editId = null) {
        let modal = document.getElementById('lead-form-create-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'lead-form-create-modal';
            modal.style.cssText = 'display:none;position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.85);backdrop-filter:blur(6px);align-items:center;justify-content:center;padding:16px;';
            document.body.appendChild(modal);
        }

        const isEdit = editId && window.leadFormsData && window.leadFormsData[editId];
        const f = isEdit ? window.leadFormsData[editId] : {
            id: 'form-custom-' + Date.now().toString().slice(-4),
            tag: '#form-custom',
            name: '',
            category: 'Internet & TV',
            title: '',
            desc: '',
            btnText: 'Gửi yêu cầu',
            btnColor: '#ff6b00',
            fields: [
                { id: 'name', label: 'Họ và tên *', type: 'text', placeholder: 'Nhập họ và tên...' },
                { id: 'phone', label: 'Số điện thoại *', type: 'tel', placeholder: 'Nhập số điện thoại...' }
            ],
            leads: 0,
            active: true
        };

        modal.innerHTML = `
            <div style="background:#131822; border:1px solid rgba(255,255,255,0.15); border-radius:14px; width:640px; max-width:94%; max-height:90vh; display:flex; flex-direction:column; overflow:hidden; box-shadow:0 24px 70px rgba(0,0,0,0.9); color:#fff; font-family:'Inter',sans-serif;">
                <div style="padding:16px 20px; border-bottom:1px solid rgba(255,255,255,0.08); display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.02);">
                    <h3 style="margin:0; font-size:16px; color:#fff; font-weight:700;">${isEdit ? '✏️ Chỉnh Sửa Form Thu Leads' : '➕ Tạo Mới Mẫu Form Thu Leads'}</h3>
                    <span style="cursor:pointer; font-size:22px; color:#a1a1aa;" onclick="document.getElementById('lead-form-create-modal').style.display='none'">&times;</span>
                </div>

                <div style="padding:20px; overflow-y:auto; flex:1; display:flex; flex-direction:column; gap:14px;">
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                        <div>
                            <label style="font-size:12px; color:var(--text-muted); display:block; margin-bottom:4px;">Tên Form quản trị <span style="color:var(--danger)">*</span></label>
                            <input type="text" id="lf-input-name" class="form-input" value="${f.name || ''}" placeholder="VD: Form Đăng ký Lắp Wi-Fi 7..." style="width:100%;">
                        </div>
                        <div>
                            <label style="font-size:12px; color:var(--text-muted); display:block; margin-bottom:4px;">Mã Shortcode / Tag <span style="color:var(--danger)">*</span></label>
                            <input type="text" id="lf-input-tag" class="form-input" value="${f.tag || '#form-new'}" placeholder="#form-..." style="width:100%;">
                        </div>
                    </div>

                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                        <div>
                            <label style="font-size:12px; color:var(--text-muted); display:block; margin-bottom:4px;">Danh mục Form</label>
                            <select id="lf-input-cat" class="form-select" style="width:100%;">
                                <option value="Internet & TV" ${f.category === 'Internet & TV' ? 'selected' : ''}>Internet & TV</option>
                                <option value="FPT Camera" ${f.category === 'FPT Camera' ? 'selected' : ''}>FPT Camera</option>
                                <option value="Khuyến mãi" ${f.category === 'Khuyến mãi' ? 'selected' : ''}>Khuyến mãi</option>
                                <option value="Doanh nghiệp" ${f.category === 'Doanh nghiệp' ? 'selected' : ''}>Doanh nghiệp</option>
                            </select>
                        </div>
                        <div>
                            <label style="font-size:12px; color:var(--text-muted); display:block; margin-bottom:4px;">Màu sắc nút bấm</label>
                            <select id="lf-input-color" class="form-select" style="width:100%;">
                                <option value="#ff6b00" ${f.btnColor === '#ff6b00' ? 'selected' : ''}>Cam FPT (#ff6b00)</option>
                                <option value="#10b981" ${f.btnColor === '#10b981' ? 'selected' : ''}>Xanh lá (#10b981)</option>
                                <option value="#2563eb" ${f.btnColor === '#2563eb' ? 'selected' : ''}>Xanh dương (#2563eb)</option>
                                <option value="#f59e0b" ${f.btnColor === '#f59e0b' ? 'selected' : ''}>Vàng hổ phách (#f59e0b)</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label style="font-size:12px; color:var(--text-muted); display:block; margin-bottom:4px;">Tiêu đề hiển thị ngoài Web <span style="color:var(--danger)">*</span></label>
                        <input type="text" id="lf-input-title" class="form-input" value="${f.title || ''}" placeholder="VD: Đăng Ký Tư Vấn Gói Cước Internet..." style="width:100%;">
                    </div>

                    <div>
                        <label style="font-size:12px; color:var(--text-muted); display:block; margin-bottom:4px;">Lời dẫn / Mô tả ưu đãi</label>
                        <textarea id="lf-input-desc" class="form-textarea" rows="2" placeholder="Để lại thông tin để chuyên viên liên hệ..." style="width:100%; min-height:60px;">${f.desc || ''}</textarea>
                    </div>

                    <div>
                        <label style="font-size:12px; color:var(--text-muted); display:block; margin-bottom:4px;">Chữ trên nút gửi (Submit button text)</label>
                        <input type="text" id="lf-input-btntext" class="form-input" value="${f.btnText || 'Gửi yêu cầu'}" style="width:100%;">
                    </div>
                </div>

                <div style="padding:14px 20px; border-top:1px solid rgba(255,255,255,0.08); display:flex; justify-content:flex-end; gap:10px; background:rgba(255,255,255,0.02);">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('lead-form-create-modal').style.display='none'">Hủy</button>
                    <button type="button" class="btn btn-primary" onclick="window.saveNewLeadForm('${isEdit ? editId : ''}')" style="background:var(--primary-gradient); font-weight:700; padding:6px 20px;">
                        💾 Lưu Mẫu Form
                    </button>
                </div>
            </div>
        `;
        modal.style.display = 'flex';
    };

    window.saveNewLeadForm = function (editId) {
        const name = document.getElementById('lf-input-name')?.value.trim();
        const tag = document.getElementById('lf-input-tag')?.value.trim();
        const cat = document.getElementById('lf-input-cat')?.value;
        const color = document.getElementById('lf-input-color')?.value;
        const title = document.getElementById('lf-input-title')?.value.trim();
        const desc = document.getElementById('lf-input-desc')?.value.trim();
        const btnText = document.getElementById('lf-input-btntext')?.value.trim() || 'Gửi yêu cầu';

        if (!name || !tag) {
            alert('Vui lòng nhập tên form và mã tag shortcode!');
            return;
        }

        const id = editId || ('form-' + Date.now().toString().slice(-4));
        if (!window.leadFormsData) window.leadFormsData = {};

        window.leadFormsData[id] = {
            id: id,
            tag: tag.startsWith('#') ? tag : '#' + tag,
            name: name,
            category: cat,
            title: title || name,
            desc: desc,
            btnText: btnText,
            btnColor: color,
            fields: [
                { id: 'name', label: 'Họ và tên *', type: 'text', placeholder: 'Nhập họ và tên...' },
                { id: 'phone', label: 'Số điện thoại *', type: 'tel', placeholder: 'Nhập số điện thoại...' },
                { id: 'note', label: 'Ghi chú nhu cầu', type: 'text', placeholder: 'Nội dung chi tiết...' }
            ],
            leads: editId && window.leadFormsData[editId] ? window.leadFormsData[editId].leads : 0,
            active: true
        };

        const modal = document.getElementById('lead-form-create-modal');
        if (modal) modal.style.display = 'none';

        window.renderLeadFormsMainTable();
        showLdpToast(`🎉 Đã lưu thành công mẫu Form [${name}]! Mã gọi: ${tag}`);
    };

    // Hàm chèn trực tiếp mã tag form vào vị trí con trỏ chuột
    window.insertFormTagDirectly = function (tag) {
        const contentEl = document.getElementById('art-content');
        if (!contentEl) return;

        const codeToInsert = `\n\n${tag}\n\n`;
        const startPos = contentEl.selectionStart || contentEl.value.length;
        const endPos = contentEl.selectionEnd || contentEl.value.length;

        contentEl.value = contentEl.value.substring(0, startPos) + codeToInsert + contentEl.value.substring(endPos);
        contentEl.focus();
        contentEl.setSelectionRange(startPos + codeToInsert.length, startPos + codeToInsert.length);

        const posEl = document.getElementById('art-lead-form-pos');
        if (posEl) posEl.value = 'shortcode';

        window.updateWordAndReadingStats();
        window.triggerAutoSave();
        showLdpToast(`📋 Đã chèn mã Form [${tag}] vào nội dung bài viết!`);
    };

    window.copyToClipboardText = function (text, successMsg) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                showLdpToast(successMsg || `Đã sao chép: ${text}`);
            });
        } else {
            showLdpToast(`Mã chèn: ${text}`);
        }
    };

    // 6. Modal Chèn Form Thu Leads Tại Vị Trí Con Trỏ (Hỗ trợ chọn form & tag linh hoạt)
    window.openInsertFormModal = function () {
        let modal = document.getElementById('lead-form-insert-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'lead-form-insert-modal';
            modal.style.cssText = 'display:none;position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.8);backdrop-filter:blur(5px);justify-content:center;align-items:center;padding:16px;';
            document.body.appendChild(modal);
        }

        let optionsHtml = '';
        let isFirst = true;
        for (let key in window.leadFormsData) {
            const f = window.leadFormsData[key];
            optionsHtml += `
                <label style="display:flex;align-items:center;gap:12px;padding:10px 14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:8px;cursor:pointer;transition:border-color 0.2s ease;">
                    <input type="radio" name="lead-form-pick-type" value="${f.id}" ${isFirst ? 'checked' : ''} style="accent-color:var(--primary);width:16px;height:16px;">
                    <div style="flex:1;">
                        <div style="display:flex;align-items:center;justify-content:space-between;">
                            <div style="font-weight:700;font-size:13px;color:#fff;">${f.name}</div>
                            <code style="background:rgba(52,211,153,0.12);color:#34d399;padding:2px 6px;border-radius:4px;font-size:11px;font-weight:700;">${f.tag}</code>
                        </div>
                        <div style="font-size:11px;color:var(--text-muted);margin-top:2px;">${f.desc}</div>
                    </div>
                </label>
            `;
            isFirst = false;
        }

        modal.innerHTML = `
            <div style="background:#131822;border:1px solid rgba(52,211,153,0.35);border-radius:14px;width:560px;max-width:94%;padding:22px;box-shadow:0 20px 60px rgba(0,0,0,0.85);color:#fff;font-family:'Inter',sans-serif;">
                <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,255,255,0.08);padding-bottom:12px;margin-bottom:14px;">
                    <div style="display:flex;align-items:center;gap:8px;">
                        <span style="font-size:18px;">📋</span>
                        <h3 style="margin:0;font-size:16px;color:#34d399;font-weight:700;">Chèn Form Thu Leads Tại Vị Trí Con Trỏ</h3>
                    </div>
                    <span style="cursor:pointer;font-size:22px;color:#a1a1aa;" onclick="window.closeInsertFormModal()">&times;</span>
                </div>
                <div style="font-size:12px;color:var(--text-muted);margin-bottom:14px;line-height:1.5;">
                    Chọn mẫu Form muốn hiển thị tại vị trí con trỏ chuột. Form sẽ xuất hiện chính xác tại vị trí này khi độc giả đọc bài viết:
                </div>
                <div style="display:flex;flex-direction:column;gap:9px;margin-bottom:18px;">
                    ${optionsHtml}
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center;padding-top:10px;border-top:1px solid rgba(255,255,255,0.08);">
                    <a href="javascript:void(0)" onclick="window.closeInsertFormModal(); window.openLeadFormsManagerModal();" style="font-size:11.5px;color:var(--primary);text-decoration:none;font-weight:600;">⚙️ Quản lý & Tạo form mới</a>
                    <div style="display:flex;gap:8px;">
                        <button type="button" class="btn btn-secondary" onclick="window.closeInsertFormModal()" style="font-size:12px;padding:6px 14px;">Hủy</button>
                        <button type="button" class="btn btn-primary" onclick="window.confirmInsertLeadForm()" style="font-size:12px;padding:6px 18px;background:var(--primary-gradient);font-weight:700;">➕ Chèn Form vào bài viết</button>
                    </div>
                </div>
            </div>
        `;
        modal.style.display = 'flex';
    };

    window.closeInsertFormModal = function () {
        const modal = document.getElementById('lead-form-insert-modal');
        if (modal) modal.style.display = 'none';
    };

    window.confirmInsertLeadForm = function () {
        const checked = document.querySelector('input[name="lead-form-pick-type"]:checked');
        const formId = checked ? checked.value : 'form-register';
        const formData = window.leadFormsData[formId] || window.leadFormsData['form-register'];

        // Ưu tiên chèn định dạng tag ngắn gọn #form-... theo đúng feedback của Marketing
        const codeToInsert = `\n\n${formData.tag}\n\n`;

        const contentEl = document.getElementById('art-content');
        if (contentEl) {
            const startPos = contentEl.selectionStart || contentEl.value.length;
            const endPos = contentEl.selectionEnd || contentEl.value.length;
            contentEl.value = contentEl.value.substring(0, startPos) + codeToInsert + contentEl.value.substring(endPos);
            contentEl.focus();
            contentEl.setSelectionRange(startPos + codeToInsert.length, startPos + codeToInsert.length);
        }

        const posEl = document.getElementById('art-lead-form-pos');
        if (posEl) posEl.value = 'shortcode';

        window.closeInsertFormModal();
        window.updateWordAndReadingStats();
        window.triggerAutoSave();
        showLdpToast(`📋 Đã chèn mã ${formData.tag} (${formData.name}) đúng vị trí con trỏ!`);
    };

    // 7. Modal Chèn Ảnh Đơn Hiện Đại (Upload từ thiết bị + Kho Media FPT + URL - Feedback MKT)
    window.singleImageState = {
        tab: 'upload',
        url: '',
        alt: '',
        caption: '',
        align: 'center',
        width: '100%'
    };

    window.openSingleImageModal = function () {
        let modal = document.getElementById('single-image-modal');
        if (!modal) {
            const html = `
            <div id="single-image-modal" style="display:flex;position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.8);backdrop-filter:blur(5px);justify-content:center;align-items:center;">
                <div style="background:#131722;border:1px solid rgba(16,185,129,0.35);border-radius:14px;width:720px;max-width:95%;padding:22px;box-shadow:0 24px 70px rgba(0,0,0,0.85);color:#fff;font-family:'Inter',sans-serif;">
                    <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--border-glass);padding-bottom:12px;margin-bottom:14px;">
                        <h3 style="margin:0;font-size:17px;color:#10b981;font-weight:700;display:flex;align-items:center;gap:8px;">
                            <span>🖼️ Chèn Hình Ảnh Vào Bài Viết</span>
                        </h3>
                        <span style="cursor:pointer;font-size:22px;color:#a1a1aa;" onclick="window.closeSingleImageModal()">&times;</span>
                    </div>

                    <div style="display:flex;gap:6px;margin-bottom:14px;border-bottom:1px solid rgba(255,255,255,0.08);padding-bottom:8px;">
                        <button type="button" class="btn btn-secondary btn-sm single-img-tab active" id="sim-tab-btn-upload" onclick="window.switchSingleImageTab('upload')"
                            style="font-size:12px;padding:6px 14px;border-radius:6px;background:rgba(16,185,129,0.15);color:#10b981;border-color:rgba(16,185,129,0.4);">
                            📤 Tải từ thiết bị / máy tính
                        </button>
                        <button type="button" class="btn btn-secondary btn-sm single-img-tab" id="sim-tab-btn-media" onclick="window.switchSingleImageTab('media')"
                            style="font-size:12px;padding:6px 14px;border-radius:6px;background:transparent;color:var(--text-muted);border-color:var(--border-glass);">
                            📚 Kho ảnh Media FPT
                        </button>
                        <button type="button" class="btn btn-secondary btn-sm single-img-tab" id="sim-tab-btn-url" onclick="window.switchSingleImageTab('url')"
                            style="font-size:12px;padding:6px 14px;border-radius:6px;background:transparent;color:var(--text-muted);border-color:var(--border-glass);">
                            🔗 Nhập URL trực tiếp
                        </button>
                    </div>

                    <div id="sim-panel-upload" style="margin-bottom:14px;">
                        <div id="sim-drop-zone" onclick="document.getElementById('sim-file-input').click()"
                            style="border:2px dashed rgba(16,185,129,0.4);border-radius:10px;padding:26px 16px;text-align:center;cursor:pointer;background:rgba(16,185,129,0.04);transition:0.2s;">
                            <input type="file" id="sim-file-input" accept="image/*" style="display:none;" onchange="window.handleSingleImageUpload(event)">
                            <div style="font-size:32px;margin-bottom:6px;">📤</div>
                            <div style="font-size:13.5px;font-weight:700;color:#fff;">Nhấn để chọn ảnh hoặc kéo thả file từ máy tính vào đây</div>
                            <div style="font-size:11.5px;color:var(--text-muted);margin-top:4px;">Hỗ trợ PNG, JPG, WEBP, GIF tối đa 10MB</div>
                        </div>
                    </div>

                    <div id="sim-panel-media" style="display:none;margin-bottom:14px;">
                        <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">Chọn nhanh hình ảnh FPT Telecom có sẵn trong thư viện:</div>
                        <div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:10px;max-height:160px;overflow-y:auto;padding-right:4px;">
                            <div onclick="window.selectSingleImagePreset('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80', 'Hạ tầng cáp quang FPT Telecom', 'Hạ tầng viễn thông FPT')"
                                style="border:1px solid var(--border-glass);border-radius:8px;overflow:hidden;cursor:pointer;background:#000;">
                                <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=200&q=80" style="width:100%;height:70px;object-fit:cover;display:block;">
                                <div style="font-size:10.5px;padding:4px;color:#fff;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Hạ tầng cáp quang</div>
                            </div>
                            <div onclick="window.selectSingleImagePreset('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80', 'Modem Wi-Fi 6 FPT Telecom', 'Modem Wi-Fi 6 AX3000GZ')"
                                style="border:1px solid var(--border-glass);border-radius:8px;overflow:hidden;cursor:pointer;background:#000;">
                                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=200&q=80" style="width:100%;height:70px;object-fit:cover;display:block;">
                                <div style="font-size:10.5px;padding:4px;color:#fff;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Modem Wi-Fi 6</div>
                            </div>
                            <div onclick="window.selectSingleImagePreset('https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80', 'FPT Camera IQ3 Cloud', 'FPT Camera thông minh IQ3')"
                                style="border:1px solid var(--border-glass);border-radius:8px;overflow:hidden;cursor:pointer;background:#000;">
                                <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=200&q=80" style="width:100%;height:70px;object-fit:cover;display:block;">
                                <div style="font-size:10.5px;padding:4px;color:#fff;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Camera IQ3 Cloud</div>
                            </div>
                            <div onclick="window.selectSingleImagePreset('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80', 'Kỹ thuật viên FPT lắp đặt', 'Đội ngũ kỹ thuật viên FPT 24/7')"
                                style="border:1px solid var(--border-glass);border-radius:8px;overflow:hidden;cursor:pointer;background:#000;">
                                <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=200&q=80" style="width:100%;height:70px;object-fit:cover;display:block;">
                                <div style="font-size:10.5px;padding:4px;color:#fff;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Kỹ thuật viên FPT</div>
                            </div>
                        </div>
                    </div>

                    <div id="sim-panel-url" style="display:none;margin-bottom:14px;">
                        <label style="font-size:12px;color:var(--text-muted);display:block;margin-bottom:4px;">Đường dẫn URL hình ảnh:</label>
                        <input type="text" id="sim-input-url" class="form-input" placeholder="https://..." oninput="window.previewSingleImageUrl(this.value)" style="font-size:13px;padding:7px 10px;">
                    </div>

                    <div id="sim-preview-box" style="display:none;margin-bottom:14px;padding:10px;background:rgba(0,0,0,0.3);border-radius:8px;border:1px solid var(--border-glass);align-items:center;gap:14px;">
                        <img id="sim-preview-img" src="" style="width:110px;height:75px;object-fit:cover;border-radius:6px;border:1px solid rgba(255,255,255,0.1);">
                        <div style="flex:1;">
                            <div style="font-size:12px;color:#10b981;font-weight:700;">✅ Đã chọn hình ảnh thành công</div>
                            <div id="sim-preview-name" style="font-size:11px;color:var(--text-muted);margin-top:2px;word-break:break-all;"></div>
                        </div>
                    </div>

                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
                        <div>
                            <label style="font-size:11.5px;color:var(--text-muted);display:block;margin-bottom:3px;">Alt text (SEO Google):</label>
                            <input type="text" id="sim-input-alt" class="form-input" placeholder="Mô tả ảnh cho SEO..." style="font-size:12px;padding:6px 10px;">
                        </div>
                        <div>
                            <label style="font-size:11.5px;color:var(--text-muted);display:block;margin-bottom:3px;">Chú thích (Caption dưới ảnh):</label>
                            <input type="text" id="sim-input-caption" class="form-input" placeholder="Chú thích ảnh..." style="font-size:12px;padding:6px 10px;">
                        </div>
                    </div>

                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:18px;">
                        <div>
                            <label style="font-size:11.5px;color:var(--text-muted);display:block;margin-bottom:3px;">Căn lề hiển thị:</label>
                            <select class="form-select" id="sim-input-align" style="font-size:12px;padding:5px 8px;">
                                <option value="center" selected>Căn giữa (Toàn hàng 100%)</option>
                                <option value="left">Căn trái (Chữ bọc quanh)</option>
                                <option value="right">Căn phải (Chữ bọc quanh)</option>
                            </select>
                        </div>
                        <div>
                            <label style="font-size:11.5px;color:var(--text-muted);display:block;margin-bottom:3px;">Kích thước hiển thị:</label>
                            <select class="form-select" id="sim-input-size" style="font-size:12px;padding:5px 8px;">
                                <option value="100%" selected>Rộng 100% (Tiêu chuẩn)</option>
                                <option value="75%">Rộng 75% (Vừa phải)</option>
                                <option value="50%">Rộng 50% (Nhỏ gọn)</option>
                            </select>
                        </div>
                    </div>

                    <div style="display:flex;justify-content:flex-end;gap:8px;">
                        <button type="button" class="btn btn-secondary" onclick="window.closeSingleImageModal()" style="font-size:12px;padding:6px 14px;">Hủy bỏ</button>
                        <button type="button" class="btn btn-primary" onclick="window.confirmInsertSingleImage()" style="font-size:12px;padding:6px 18px;background:var(--primary-gradient);">➕ Chèn hình ảnh vào bài</button>
                    </div>
                </div>
            </div>`;
            document.body.insertAdjacentHTML('beforeend', html);
        } else {
            modal.style.display = 'flex';
        }
    };

    window.closeSingleImageModal = function () {
        const modal = document.getElementById('single-image-modal');
        if (modal) modal.style.display = 'none';
    };

    window.switchSingleImageTab = function (tab) {
        window.singleImageState.tab = tab;
        ['upload', 'media', 'url'].forEach(t => {
            const btn = document.getElementById('sim-tab-btn-' + t);
            const panel = document.getElementById('sim-panel-' + t);
            const isActive = t === tab;
            if (btn) {
                btn.style.background = isActive ? 'rgba(16,185,129,0.15)' : 'transparent';
                btn.style.color = isActive ? '#10b981' : 'var(--text-muted)';
                btn.style.borderColor = isActive ? 'rgba(16,185,129,0.4)' : 'var(--border-glass)';
            }
            if (panel) panel.style.display = isActive ? 'block' : 'none';
        });
    };

    window.handleSingleImageUpload = function (e) {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (evt) {
            const dataUrl = evt.target.result;
            window.singleImageState.url = dataUrl;
            const cleanName = file.name.replace(/\.[^/.]+$/, "");
            const altEl = document.getElementById('sim-input-alt');
            const capEl = document.getElementById('sim-input-caption');
            if (altEl && !altEl.value) altEl.value = cleanName;
            if (capEl && !capEl.value) capEl.value = cleanName;

            const prevBox = document.getElementById('sim-preview-box');
            const prevImg = document.getElementById('sim-preview-img');
            const prevName = document.getElementById('sim-preview-name');
            if (prevBox) prevBox.style.display = 'flex';
            if (prevImg) prevImg.src = dataUrl;
            if (prevName) prevName.innerText = `File: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
            showLdpToast('Đã tải hình ảnh từ thiết bị thành công!');
        };
        reader.readAsDataURL(file);
    };

    window.selectSingleImagePreset = function (url, alt, caption) {
        window.singleImageState.url = url;
        const altEl = document.getElementById('sim-input-alt');
        const capEl = document.getElementById('sim-input-caption');
        if (altEl) altEl.value = alt || '';
        if (capEl) capEl.value = caption || '';

        const prevBox = document.getElementById('sim-preview-box');
        const prevImg = document.getElementById('sim-preview-img');
        const prevName = document.getElementById('sim-preview-name');
        if (prevBox) prevBox.style.display = 'flex';
        if (prevImg) prevImg.src = url;
        if (prevName) prevName.innerText = `Thư viện: ${caption || alt}`;
        showLdpToast('Đã chọn hình ảnh từ Kho Media FPT!');
    };

    window.previewSingleImageUrl = function (url) {
        if (!url || !url.trim()) return;
        window.singleImageState.url = url.trim();
        const prevBox = document.getElementById('sim-preview-box');
        const prevImg = document.getElementById('sim-preview-img');
        const prevName = document.getElementById('sim-preview-name');
        if (prevBox) prevBox.style.display = 'flex';
        if (prevImg) prevImg.src = url.trim();
        if (prevName) prevName.innerText = url.trim();
    };

    window.confirmInsertSingleImage = function () {
        const urlInput = document.getElementById('sim-input-url');
        const url = window.singleImageState.url || (urlInput ? urlInput.value.trim() : '');
        if (!url) {
            showLdpToast('Vui lòng tải ảnh lên từ thiết bị, chọn từ kho hoặc nhập URL!');
            return;
        }

        const alt = document.getElementById('sim-input-alt')?.value.trim() || 'Hình ảnh FPT Telecom';
        const caption = document.getElementById('sim-input-caption')?.value.trim() || '';
        const align = document.getElementById('sim-input-align')?.value || 'center';
        const size = document.getElementById('sim-input-size')?.value || '100%';

        let figureStyle = 'margin:20px 0;';
        if (align === 'center') {
            figureStyle += 'text-align:center;width:100%;';
        } else if (align === 'left') {
            figureStyle += 'float:left;margin:10px 20px 15px 0;max-width:50%;';
        } else if (align === 'right') {
            figureStyle += 'float:right;margin:10px 0 15px 20px;max-width:50%;';
        }

        const imgHtml = `\n\n<figure style="${figureStyle}"><img src="${url}" alt="${alt}" style="width:${size};max-width:100%;height:auto;border-radius:8px;display:inline-block;box-shadow:0 4px 15px rgba(0,0,0,0.12);">${caption ? `<figcaption style="font-size:12px;color:#94a3b8;font-style:italic;margin-top:6px;line-height:1.4;">${caption}</figcaption>` : ''}</figure>\n\n`;

        const contentEl = document.getElementById('art-content');
        if (contentEl) {
            const startPos = contentEl.selectionStart || contentEl.value.length;
            const endPos = contentEl.selectionEnd || contentEl.value.length;
            contentEl.value = contentEl.value.substring(0, startPos) + imgHtml + contentEl.value.substring(endPos);
            contentEl.focus();
            contentEl.setSelectionRange(startPos + imgHtml.length, startPos + imgHtml.length);
        }

        window.closeSingleImageModal();
        window.updateWordAndReadingStats();
        window.triggerAutoSave();
        showLdpToast('Đã chèn hình ảnh vào nội dung bài viết!');
    };

    // Luôn map promptInsertImage trỏ về modal hiện đại
    window.promptInsertImage = window.openSingleImageModal;

    window.insertEditorHeading = function (tag) {
        if (!tag) return;
        const contentEl = document.getElementById('art-content');
        if (!contentEl) return;
        const startPos = contentEl.selectionStart || 0;
        const endPos = contentEl.selectionEnd || 0;
        const selected = contentEl.value.substring(startPos, endPos) || 'Tiêu đề bài viết';
        let snippet = '';
        if (tag === 'quote') {
            snippet = `\n> ${selected}\n`;
        } else if (tag === 'code') {
            snippet = `\n\`\`\`\n${selected}\n\`\`\`\n`;
        } else {
            const prefix = tag === 'h2' ? '## ' : (tag === 'h3' ? '### ' : '#### ');
            snippet = `\n${prefix}${selected}\n`;
        }
        contentEl.value = contentEl.value.substring(0, startPos) + snippet + contentEl.value.substring(endPos);
        contentEl.focus();
        window.updateWordAndReadingStats();
        window.triggerAutoSave();
    };

    window.wrapEditorText = function (before, after) {
        const contentEl = document.getElementById('art-content');
        if (!contentEl) return;
        const startPos = contentEl.selectionStart || 0;
        const endPos = contentEl.selectionEnd || 0;
        const selected = contentEl.value.substring(startPos, endPos);
        const snippet = before + (selected || 'văn bản') + after;
        contentEl.value = contentEl.value.substring(0, startPos) + snippet + contentEl.value.substring(endPos);
        contentEl.focus();
        contentEl.setSelectionRange(startPos + before.length, startPos + snippet.length - after.length);
        window.updateWordAndReadingStats();
        window.triggerAutoSave();
    };

    window.insertEditorList = function (type) {
        const contentEl = document.getElementById('art-content');
        if (!contentEl) return;
        const prefix = type === 'ol' ? '1. ' : '- ';
        const startPos = contentEl.selectionStart || contentEl.value.length;
        const endPos = contentEl.selectionEnd || contentEl.value.length;
        const snippet = `\n${prefix}Mục danh sách 1\n${prefix}Mục danh sách 2\n`;
        contentEl.value = contentEl.value.substring(0, startPos) + snippet + contentEl.value.substring(endPos);
        contentEl.focus();
        window.updateWordAndReadingStats();
        window.triggerAutoSave();
    };

    // =========================================================================
    //   CHỨC NĂNG CHÈN GALLERY ĐA HÌNH ẢNH (STT 19 CHECKLIST CMS TIN TỨC)
    //   - Upload nhiều ảnh cùng lúc
    //   - Kéo thả / Đổi thứ tự ảnh trước khi chèn
    //   - Hỗ trợ layout cột: 50/50, 33/33/33, 25/25/25/25, 33/67, 67/33, Grid 2x2
    //   - Chỉnh Alt text, Caption cho từng ảnh
    //   - Responsive trên Desktop / Mobile
    //   - Thay đổi layout sau khi đã chèn vào bài
    // =========================================================================
    window.articleGalleriesData = window.articleGalleriesData || {};

    // Kho ảnh Media Library phong cách WordPress của FPT Telecom
    window.mediaLibraryItems = [
        {
            id: 'med-1',
            category: 'internet',
            url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
            name: 'ha-tang-cap-quang-fpt.jpg',
            alt: 'Hạ tầng mạng cáp quang siêu tốc FPT Telecom',
            caption: 'Hạ tầng mạng cáp quang băng rộng thế hệ mới phủ sóng toàn quốc'
        },
        {
            id: 'med-2',
            category: 'internet',
            url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
            name: 'modem-wifi-6-ax3000gz.jpg',
            alt: 'Thiết bị Modem Wi-Fi 6 AX3000GZ 2 băng tần chuẩn Gigabit',
            caption: 'Modem Wi-Fi 6 AX3000GZ phát đồng thời băng tần 5GHz giảm độ trễ'
        },
        {
            id: 'med-3',
            category: 'camera',
            url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
            name: 'fpt-camera-iq3-cloud.jpg',
            alt: 'Camera An Ninh Thông Minh FPT Camera IQ3 Cloud',
            caption: 'FPT Camera IQ3 lưu trữ dữ liệu an toàn trên đám mây chuẩn Tier III'
        },
        {
            id: 'med-4',
            category: 'tech',
            url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
            name: 'ky-thuat-vien-fpt-lap-dat.jpg',
            alt: 'Kỹ thuật viên FPT Telecom hỗ trợ lắp đặt tại nhà 24/7',
            caption: 'Đội ngũ kỹ thuật viên tận tâm hỗ trợ khách hàng bảo trì tận nơi'
        },
        {
            id: 'med-5',
            category: 'fptplay',
            url: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=800&q=80',
            name: 'fpt-play-truyen-hinh-bong-da.jpg',
            alt: 'Truyền hình FPT Play phát sóng trực tiếp cúp C1 UEFA',
            caption: 'FPT Play độc quyền bản quyền các giải thể thao đỉnh cao châu Âu'
        },
        {
            id: 'med-6',
            category: 'internet',
            url: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
            name: 'goi-cuoc-meta-fpt-1gbps.jpg',
            alt: 'Gói cước Internet FPT Meta tốc độ 1Gbps không giới hạn băng thông',
            caption: 'Gói cước FPT Meta bứt phá trải nghiệm livestream và gaming'
        },
        {
            id: 'med-7',
            category: 'camera',
            url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
            name: 'ai-nhan-dien-khuon-mat-camera.jpg',
            alt: 'Trí tuệ nhân tạo AI nhận diện khuôn mặt người lạ FPT Camera',
            caption: 'Tính năng AI phân biệt người và vật cảnh báo chuyển động tức thì'
        },
        {
            id: 'med-8',
            category: 'tech',
            url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
            name: 'trung-tam-du-lieu-data-center.jpg',
            alt: 'Trung tâm dữ liệu FPT Data Center đạt chuẩn Uptime Tier III',
            caption: 'Data Center hiện đại đảm bảo tính bảo mật và uptime 99.99%'
        }
    ];

    // Mảng ID của các ảnh đang được tick chọn trong Kho Media Library
    window.selectedMediaIds = ['med-1', 'med-2'];
    window.activeDetailMediaId = 'med-1';
    window.mediaCurrentCategory = 'all';
    window.mediaSearchKeyword = '';

    window.galleryState = {
        items: [],
        layout: '50-50',
        editingId: null,
        previewDevice: 'desktop'
    };

    // Chuyển đổi tab trong modal Gallery: 'library' hoặc 'layout'
    window.switchGalleryModalTab = function (tabName) {
        const tabLibBtn = document.getElementById('tab-btn-media-library');
        const tabLayoutBtn = document.getElementById('tab-btn-media-layout');
        const contentLib = document.getElementById('gallery-tab-library-content');
        const contentLayout = document.getElementById('gallery-tab-layout-content');

        if (tabName === 'layout') {
            if (tabLibBtn) { tabLibBtn.style.background = 'transparent'; tabLibBtn.style.color = 'var(--text-muted)'; }
            if (tabLayoutBtn) { tabLayoutBtn.style.background = 'var(--primary-gradient)'; tabLayoutBtn.style.color = '#fff'; }
            if (contentLib) contentLib.style.display = 'none';
            if (contentLayout) contentLayout.style.display = 'flex';
            window.syncSelectedMediaToGalleryItems();
            window.renderGalleryModalUI();
        } else {
            if (tabLibBtn) { tabLibBtn.style.background = 'var(--primary-gradient)'; tabLibBtn.style.color = '#fff'; }
            if (tabLayoutBtn) { tabLayoutBtn.style.background = 'transparent'; tabLayoutBtn.style.color = 'var(--text-muted)'; }
            if (contentLib) contentLib.style.display = 'flex';
            if (contentLayout) contentLayout.style.display = 'none';
            window.renderMediaLibraryGrid();
        }
    };

    // Đồng bộ các ảnh đã chọn từ Kho Media Library sang cấu trúc Gallery Items
    window.syncSelectedMediaToGalleryItems = function () {
        const selectedObjs = window.mediaLibraryItems.filter(item => window.selectedMediaIds.includes(item.id));
        window.galleryState.items = selectedObjs.map(item => ({
            id: item.id,
            url: item.url,
            alt: item.alt || '',
            caption: item.caption || ''
        }));

        // Tự động gợi ý layout phù hợp với số lượng ảnh
        const total = window.galleryState.items.length;
        if (total === 1) {
            window.galleryState.layout = '1-col';
        } else if (total === 2 && window.galleryState.layout !== '33-67' && window.galleryState.layout !== '67-33') {
            window.galleryState.layout = '50-50';
        } else if (total === 3) {
            window.galleryState.layout = '33-33-33';
        } else if (total >= 4) {
            window.galleryState.layout = total === 4 ? '25-25-25-25' : 'grid-2x2';
        }
    };

    // Render lưới ảnh WordPress Media Library
    window.renderMediaLibraryGrid = function () {
        const grid = document.getElementById('media-library-grid');
        if (!grid) return;

        let filtered = window.mediaLibraryItems;
        if (window.mediaCurrentCategory !== 'all') {
            filtered = filtered.filter(item => item.category === window.mediaCurrentCategory);
        }
        if (window.mediaSearchKeyword) {
            const kw = window.mediaSearchKeyword.toLowerCase();
            filtered = filtered.filter(item =>
                (item.name && item.name.toLowerCase().includes(kw)) ||
                (item.alt && item.alt.toLowerCase().includes(kw)) ||
                (item.caption && item.caption.toLowerCase().includes(kw))
            );
        }

        grid.innerHTML = '';
        if (filtered.length === 0) {
            grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:30px; color:var(--text-muted); font-size:12px;">Không tìm thấy hình ảnh phù hợp trong kho!</div>`;
            return;
        }

        filtered.forEach(item => {
            const isSelected = window.selectedMediaIds.includes(item.id);
            const selectIndex = window.selectedMediaIds.indexOf(item.id) + 1;
            const isActive = window.activeDetailMediaId === item.id;

            const card = document.createElement('div');
            card.className = 'media-library-thumb-card';
            card.style.cssText = `
                position: relative;
                aspect-ratio: 1;
                border-radius: 6px;
                overflow: hidden;
                cursor: pointer;
                background: #000;
                border: 2px solid ${isSelected ? 'var(--primary)' : isActive ? '#38bdf8' : 'rgba(255,255,255,0.08)'};
                box-shadow: ${isSelected ? '0 0 10px rgba(255,107,0,0.5)' : 'none'};
                transition: transform 0.15s ease, border-color 0.15s ease;
            `;

            card.innerHTML = `
                <img src="${item.url}" alt="${item.alt || ''}" style="width:100%; height:100%; object-fit:cover; display:block;">
                <!-- Checkbox tick chọn kiểu WordPress -->
                <div style="position:absolute; top:4px; right:4px; width:22px; height:22px; border-radius:4px; background:${isSelected ? 'var(--primary)' : 'rgba(0,0,0,0.6)'}; border:1px solid ${isSelected ? 'var(--primary)' : 'rgba(255,255,255,0.4)'}; display:flex; align-items:center; justify-content:center; color:#fff; font-size:11px; font-weight:800;">
                    ${isSelected ? `✓` : ''}
                </div>
                ${isSelected ? `<div style="position:absolute; top:4px; left:4px; background:rgba(0,0,0,0.75); color:#ff8c42; border-radius:3px; padding:1px 5px; font-size:10px; font-weight:800; border:1px solid rgba(255,107,0,0.3);">#${selectIndex}</div>` : ''}
                <div style="position:absolute; bottom:0; left:0; right:0; background:linear-gradient(to top, rgba(0,0,0,0.85), transparent); padding:4px 6px; font-size:9.5px; color:#cbd5e1; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                    ${item.name || 'image.jpg'}
                </div>
            `;

            card.onclick = (e) => {
                window.toggleSelectMediaItem(item.id);
            };

            grid.appendChild(card);
        });

        // Cập nhật badge số lượng đã chọn
        const badgeCount = document.getElementById('gallery-selected-counter-badge');
        if (badgeCount) badgeCount.innerText = `${window.selectedMediaIds.length} ảnh`;
        const libBadge = document.getElementById('tab-badge-lib-count');
        if (libBadge) libBadge.innerText = window.mediaLibraryItems.length;
        const layoutBadge = document.getElementById('tab-badge-layout-count');
        if (layoutBadge) layoutBadge.innerText = window.selectedMediaIds.length;

        // Render chi tiết ảnh
        window.renderActiveMediaDetail();
    };

    // Toggle tick chọn 1 ảnh trong Media Library
    window.toggleSelectMediaItem = function (itemId) {
        window.activeDetailMediaId = itemId;
        const idx = window.selectedMediaIds.indexOf(itemId);
        if (idx > -1) {
            window.selectedMediaIds.splice(idx, 1);
        } else {
            window.selectedMediaIds.push(itemId);
        }
        window.renderMediaLibraryGrid();
    };

    // Hiển thị chi tiết ảnh được chọn trong panel bên phải (WordPress Attachment Details)
    window.renderActiveMediaDetail = function () {
        const item = window.mediaLibraryItems.find(m => m.id === window.activeDetailMediaId) ||
            (window.selectedMediaIds.length > 0 ? window.mediaLibraryItems.find(m => m.id === window.selectedMediaIds[0]) : null);

        const previewBox = document.getElementById('media-detail-preview-box');
        const altInput = document.getElementById('media-detail-alt-input');
        const captionInput = document.getElementById('media-detail-caption-input');

        if (!item) {
            if (previewBox) previewBox.innerHTML = `<span style="color:var(--text-muted); font-size:11px;">Chưa chọn ảnh nào</span>`;
            if (altInput) { altInput.value = ''; altInput.disabled = true; }
            if (captionInput) { captionInput.value = ''; captionInput.disabled = true; }
            return;
        }

        if (previewBox) {
            previewBox.innerHTML = `<img src="${item.url}" alt="${item.alt || ''}" style="width:100%; height:100%; object-fit:contain;">`;
        }
        if (altInput) {
            altInput.value = item.alt || '';
            altInput.disabled = false;
        }
        if (captionInput) {
            captionInput.value = item.caption || '';
            captionInput.disabled = false;
        }
    };

    window.updateCurrentActiveMediaAlt = function (val) {
        const item = window.mediaLibraryItems.find(m => m.id === window.activeDetailMediaId);
        if (item) item.alt = val;
    };

    window.updateCurrentActiveMediaCaption = function (val) {
        const item = window.mediaLibraryItems.find(m => m.id === window.activeDetailMediaId);
        if (item) item.caption = val;
    };

    window.filterMediaLibrary = function (cat) {
        window.mediaCurrentCategory = cat;
        window.renderMediaLibraryGrid();
    };

    window.searchMediaLibrary = function (val) {
        window.mediaSearchKeyword = val;
        window.renderMediaLibraryGrid();
    };

    window.selectAllMediaLibrary = function (bool) {
        if (bool) {
            window.selectedMediaIds = window.mediaLibraryItems.map(item => item.id);
        } else {
            window.selectedMediaIds = [];
        }
        window.renderMediaLibraryGrid();
    };

    window.clearMediaLibrarySelection = function () {
        window.selectedMediaIds = [];
        window.renderMediaLibraryGrid();
    };

    // Chèn nhanh các ảnh đã tick chọn vào bài viết dạng ảnh đơn lẻ (Feedback Marketing)
    window.confirmInsertSelectedAsStandaloneImages = function () {
        if (window.selectedMediaIds.length === 0) {
            showLdpToast('Vui lòng chọn ít nhất 1 hình ảnh từ Thư viện!');
            return;
        }

        const selectedObjs = window.mediaLibraryItems.filter(item => window.selectedMediaIds.includes(item.id));
        let htmlSnippet = '\n';
        selectedObjs.forEach(item => {
            htmlSnippet += `<p><img src="${item.url}" alt="${item.alt || ''}" style="max-width:100%; border-radius:6px; margin:12px 0; display:block;"></p>\n`;
            if (item.caption) {
                htmlSnippet += `<p style="font-size:12px; color:#94a3b8; font-style:italic; margin-top:-6px; text-align:center;">${item.caption}</p>\n`;
            }
        });

        const contentEl = document.getElementById('art-content');
        if (contentEl) {
            const startPos = contentEl.selectionStart || contentEl.value.length;
            const endPos = contentEl.selectionEnd || contentEl.value.length;
            contentEl.value = contentEl.value.substring(0, startPos) + htmlSnippet + contentEl.value.substring(endPos);
            contentEl.focus();
        }

        window.closeGalleryModal();
        window.updateWordAndReadingStats();
        window.triggerAutoSave();
        showLdpToast(`Đã chèn nhanh ${selectedObjs.length} hình ảnh vào nội dung bài viết!`);
    };

    // Chuyển sang bước chọn bố cục cột Gallery
    window.goToGalleryLayoutStep = function () {
        if (window.selectedMediaIds.length === 0) {
            showLdpToast('Vui lòng tick chọn ít nhất 1 hình ảnh từ Kho Media Library!');
            return;
        }
        window.switchGalleryModalTab('layout');
    };

    // Tự động kiểm tra và khởi tạo Modal WordPress Media Library & Gallery
    window.ensureGalleryModalInDOM = function () {
        let modal = document.getElementById('gallery-picker-modal');
        if (modal) return modal;

        modal = document.createElement('div');
        modal.id = 'gallery-picker-modal';
        modal.style.cssText = 'display:none; position:fixed; inset:0; z-index:9999; background:rgba(0,0,0,0.85); backdrop-filter:blur(8px); align-items:center; justify-content:center; padding:16px;';

        modal.innerHTML = `
            <div style="background:#131822; border:1px solid rgba(255,255,255,0.12); border-radius:14px; max-width:1150px; width:100%; height:88vh; max-height:760px; display:flex; flex-direction:column; overflow:hidden; box-shadow:0 24px 80px rgba(0,0,0,0.8);">
                <!-- Header Modal với Tab chuyển đổi -->
                <div style="padding:12px 20px; border-bottom:1px solid rgba(255,255,255,0.08); display:flex; align-items:center; justify-content:space-between; background:rgba(255,255,255,0.02);">
                    <div style="display:flex; align-items:center; gap:16px;">
                        <div style="font-size:15px; font-weight:800; color:#fff; display:flex; align-items:center; gap:8px;">
                            <span>🖼️</span> <span>Quản Lý Media Library & Gallery</span>
                        </div>
                        <!-- Tab Bar phong cách WordPress Media Manager -->
                        <div style="display:flex; background:rgba(0,0,0,0.35); padding:3px; border-radius:8px; border:1px solid rgba(255,255,255,0.08); gap:4px;">
                            <button type="button" id="tab-btn-media-library" onclick="window.switchGalleryModalTab('library')"
                                style="padding:5px 14px; font-size:12px; font-weight:700; border-radius:6px; border:none; background:var(--primary-gradient); color:#fff; cursor:pointer; display:flex; align-items:center; gap:6px;">
                                <span>📁 Thư viện Media</span>
                                <span id="tab-badge-lib-count" style="background:rgba(0,0,0,0.3); padding:1px 6px; border-radius:10px; font-size:10.5px;">8</span>
                            </button>
                            <button type="button" id="tab-btn-media-layout" onclick="window.switchGalleryModalTab('layout')"
                                style="padding:5px 14px; font-size:12px; font-weight:700; border-radius:6px; border:none; background:transparent; color:var(--text-muted); cursor:pointer; display:flex; align-items:center; gap:6px;">
                                <span>🔲 Bố cục Cột Gallery</span>
                                <span id="tab-badge-layout-count" style="background:rgba(255,255,255,0.1); padding:1px 6px; border-radius:10px; font-size:10.5px;">2</span>
                            </button>
                        </div>
                    </div>
                    <button type="button" onclick="window.closeGalleryModal()"
                        style="background:none; border:none; color:var(--text-muted); font-size:22px; cursor:pointer; line-height:1;" title="Đóng">&times;</button>
                </div>

                <!-- TAB 1: KHO ẢNH (WORDPRESS MEDIA LIBRARY) -->
                <div id="gallery-tab-library-content" style="flex:1; display:flex; flex-direction:column; overflow:hidden;">
                    <!-- Toolbar lọc & tìm kiếm -->
                    <div style="padding:10px 20px; border-bottom:1px solid rgba(255,255,255,0.06); display:flex; align-items:center; justify-content:space-between; gap:12px; background:rgba(0,0,0,0.2); flex-wrap:wrap;">
                        <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                            <select onchange="window.filterMediaLibrary(this.value)" class="form-select" style="font-size:12px; padding:5px 10px; height:32px; border-radius:6px; background:#181f2c; color:#fff; border:1px solid var(--border-glass);">
                                <option value="all">📂 Tất cả danh mục media</option>
                                <option value="internet">🌐 Cáp quang Internet FPT</option>
                                <option value="camera">📹 FPT Camera Cloud</option>
                                <option value="fptplay">📺 Truyền hình FPT Play</option>
                                <option value="tech">⚙️ Kỹ thuật & Data Center</option>
                            </select>
                            <div style="position:relative;">
                                <input type="text" placeholder="🔍 Tìm tên file, alt text..." oninput="window.searchMediaLibrary(this.value)"
                                    style="padding:5px 10px 5px 28px; font-size:12px; border-radius:6px; background:#181f2c; border:1px solid var(--border-glass); color:#fff; width:190px; height:32px; box-sizing:border-box;">
                                <span style="position:absolute; left:8px; top:7px; font-size:12px; opacity:0.6;">🔍</span>
                            </div>
                            <button type="button" onclick="window.selectAllMediaLibrary(true)" class="btn btn-secondary btn-sm" style="font-size:11.5px; padding:4px 8px; height:32px;">Chọn tất cả</button>
                            <button type="button" onclick="window.clearMediaLibrarySelection()" class="btn btn-secondary btn-sm" style="font-size:11.5px; padding:4px 8px; height:32px;">Bỏ chọn</button>
                        </div>
                        <div style="display:flex; align-items:center; gap:10px;">
                            <div style="font-size:12px; color:var(--text-muted);">
                                Đã chọn: <span id="gallery-selected-counter-badge" style="color:var(--primary); font-weight:800; font-size:13px;">2 ảnh</span>
                            </div>
                            <label class="btn btn-primary btn-sm" style="cursor:pointer; font-size:12px; padding:6px 14px; background:var(--primary-gradient); display:inline-flex; align-items:center; gap:6px; border-radius:6px; font-weight:700;">
                                <span>📤 Tải ảnh từ thiết bị</span>
                                <input type="file" multiple accept="image/*" onchange="window.handleGalleryUpload(event)" style="display:none;">
                            </label>
                        </div>
                    </div>

                    <!-- Vùng thân Media Library chia 2 cột -->
                    <div style="flex:1; display:flex; overflow:hidden;">
                        <!-- Lưới ảnh WordPress (Grid Thumbnail) -->
                        <div style="flex:1; padding:16px 20px; overflow-y:auto;">
                            <div id="media-library-grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:12px;"></div>
                        </div>

                        <!-- Cột phải: Attachment Details (Chi tiết ảnh đã chọn) -->
                        <div style="width:310px; border-left:1px solid rgba(255,255,255,0.08); background:rgba(0,0,0,0.25); padding:16px; display:flex; flex-direction:column; gap:12px; overflow-y:auto;">
                            <div style="font-size:12.5px; font-weight:800; color:#fff; text-transform:uppercase; letter-spacing:0.5px; border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:8px;">
                                📋 Chi tiết ảnh được chọn
                            </div>
                            <!-- Box preview ảnh đang focus -->
                            <div id="media-detail-preview-box" style="width:100%; height:140px; background:#000; border-radius:8px; border:1px solid var(--border-glass); display:flex; align-items:center; justify-content:center; overflow:hidden;">
                                <span style="color:var(--text-muted); font-size:11px;">Chọn ảnh để xem</span>
                            </div>
                            <div>
                                <label style="font-size:11px; color:var(--text-muted); display:block; margin-bottom:4px; font-weight:600;">Văn bản thay thế (Alt text SEO):</label>
                                <input type="text" id="media-detail-alt-input" oninput="window.updateCurrentActiveMediaAlt(this.value)"
                                    class="form-input" placeholder="Mô tả ảnh cho công cụ tìm kiếm..." style="font-size:11.5px; padding:6px 10px; width:100%; box-sizing:border-box;">
                            </div>
                            <div>
                                <label style="font-size:11px; color:var(--text-muted); display:block; margin-bottom:4px; font-weight:600;">Chú thích ảnh (Caption):</label>
                                <textarea id="media-detail-caption-input" oninput="window.updateCurrentActiveMediaCaption(this.value)"
                                    class="form-input" placeholder="Chú thích hiển thị dưới chân ảnh..." style="font-size:11.5px; padding:6px 10px; width:100%; height:55px; resize:none; box-sizing:border-box;"></textarea>
                            </div>

                            <!-- 2 Lựa chọn hành động theo đúng feedback Marketing -->
                            <div style="margin-top:auto; display:flex; flex-direction:column; gap:8px; padding-top:12px; border-top:1px solid rgba(255,255,255,0.08);">
                                <button type="button" class="btn btn-secondary" onclick="window.confirmInsertSelectedAsStandaloneImages()"
                                    style="font-size:12px; font-weight:700; padding:9px 12px; border-color:rgba(52,211,153,0.4); color:#34d399; background:rgba(52,211,153,0.08);"
                                    title="Chèn ngay các ảnh đã tick chọn vào nội dung dưới dạng từng ảnh đơn lẻ, không cần ghép cột layout">
                                    ⚡ Chèn ảnh lẻ trực tiếp vào bài
                                </button>
                                <button type="button" class="btn btn-primary" onclick="window.goToGalleryLayoutStep()"
                                    style="font-size:12.5px; font-weight:800; padding:10px 12px; background:var(--primary-gradient);"
                                    title="Chuyển sang bước chọn bố cục cột (50/50, 33/33/33, 4 cột...)">
                                    🔲 Ghép Bố cục Cột (Gallery) ➔
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- TAB 2: BỐ CỤC CỘT GALLERY & TỶ LỆ CẮT -->
                <div id="gallery-tab-layout-content" style="flex:1; display:none; overflow:hidden;">
                    <!-- Cột trái: Danh sách sắp xếp thứ tự ảnh trong Gallery -->
                    <div style="width:450px; border-right:1px solid rgba(255,255,255,0.08); background:rgba(0,0,0,0.2); padding:16px; display:flex; flex-direction:column; overflow:hidden;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                            <div style="font-size:13px; font-weight:700; color:#fff;">Sắp xếp thứ tự ảnh (Kéo thả)</div>
                            <button type="button" onclick="window.switchGalleryModalTab('library')" class="btn btn-secondary btn-sm" style="font-size:11px; padding:3px 8px; color:var(--primary);">+ Thêm/Bỏ ảnh</button>
                        </div>
                        <div id="gallery-empty-tip" style="display:none; text-align:center; padding:20px; color:var(--text-muted); font-size:12px;">Chưa chọn ảnh nào!</div>
                        <div id="gallery-items-container" style="flex:1; overflow-y:auto; display:flex; flex-direction:column; gap:8px; padding-right:4px;"></div>
                    </div>

                    <!-- Cột phải: Chọn layout & Xem trước Responsive -->
                    <div style="flex:1; padding:16px 20px; display:flex; flex-direction:column; overflow-y:auto; gap:14px;">
                        <div>
                            <div style="font-size:12.5px; font-weight:700; color:#cbd5e1; margin-bottom:8px;">
                                Chọn Bố cục Cột: <span id="gallery-layout-curr-name" style="color:var(--primary); font-weight:800;">50 / 50 (2 cột đều)</span>
                            </div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px;">
                                <button type="button" class="btn btn-secondary gallery-layout-btn" data-layout="1-col" onclick="window.selectGalleryLayout('1-col')" style="font-size:11px; padding:8px 4px; font-weight:700;">1 Cột (Banner)</button>
                                <button type="button" class="btn btn-secondary gallery-layout-btn" data-layout="50-50" onclick="window.selectGalleryLayout('50-50')" style="font-size:11px; padding:8px 4px; font-weight:700;">50 / 50 (2 cột)</button>
                                <button type="button" class="btn btn-secondary gallery-layout-btn" data-layout="33-33-33" onclick="window.selectGalleryLayout('33-33-33')" style="font-size:11px; padding:8px 4px; font-weight:700;">33/33/33 (3 cột)</button>
                                <button type="button" class="btn btn-secondary gallery-layout-btn" data-layout="25-25-25-25" onclick="window.selectGalleryLayout('25-25-25-25')" style="font-size:11px; padding:8px 4px; font-weight:700;">4 Cột đều</button>
                                <button type="button" class="btn btn-secondary gallery-layout-btn" data-layout="33-67" onclick="window.selectGalleryLayout('33-67')" style="font-size:11px; padding:8px 4px; font-weight:700;">33 / 67 (Lệch)</button>
                                <button type="button" class="btn btn-secondary gallery-layout-btn" data-layout="67-33" onclick="window.selectGalleryLayout('67-33')" style="font-size:11px; padding:8px 4px; font-weight:700;">67 / 33 (Lệch)</button>
                                <button type="button" class="btn btn-secondary gallery-layout-btn" data-layout="grid-2x2" onclick="window.selectGalleryLayout('grid-2x2')" style="font-size:11px; padding:8px 4px; font-weight:700;">Lưới 2x2</button>
                            </div>
                        </div>

                        <!-- Thiết bị xem trước -->
                        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid rgba(255,255,255,0.06); padding-top:10px;">
                            <span style="font-size:12px; color:var(--text-muted); font-weight:600;">Xem trước hiển thị bài viết:</span>
                            <div style="display:flex; gap:4px; background:rgba(0,0,0,0.4); padding:2px; border-radius:6px;">
                                <button type="button" id="gal-prev-btn-desktop" onclick="window.setGalleryPreviewDevice('desktop')" style="padding:4px 10px; font-size:11px; border:none; background:rgba(255,255,255,0.1); color:#fff; border-radius:4px; cursor:pointer; font-weight:700;">💻 Desktop</button>
                                <button type="button" id="gal-prev-btn-mobile" onclick="window.setGalleryPreviewDevice('mobile')" style="padding:4px 10px; font-size:11px; border:none; background:transparent; color:var(--text-muted); border-radius:4px; cursor:pointer; font-weight:700;">📱 Mobile</button>
                            </div>
                        </div>

                        <!-- Khung xem trước trực tiếp -->
                        <div id="gallery-preview-container" style="flex:1; min-height:220px; overflow-y:auto; border-radius:8px; border:1px solid rgba(255,255,255,0.06); padding:12px; background:rgba(0,0,0,0.25);"></div>
                    </div>
                </div>

                <!-- Footer Modal -->
                <div style="padding:12px 20px; border-top:1px solid rgba(255,255,255,0.08); display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.02);">
                    <div style="font-size:11.5px; color:var(--text-muted);">
                        💡 Có thể chèn từ 1 ảnh trở lên và dễ dàng thay đổi layout bất cứ lúc nào.
                    </div>
                    <div style="display:flex; gap:10px;">
                        <button type="button" class="btn btn-secondary" onclick="window.closeGalleryModal()" style="font-size:12.5px; padding:7px 16px;">Đóng</button>
                        <button type="button" class="btn btn-primary" onclick="window.confirmInsertGallery()" style="font-size:12.5px; padding:7px 20px; background:var(--primary-gradient); font-weight:700;">
                            ✨ Chèn Gallery vào bài viết
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        return modal;
    };

    // Mở Modal Gallery & Kho ảnh
    window.openGalleryModal = function (galleryId = null) {
        const modal = window.ensureGalleryModalInDOM();
        if (!modal) return;

        if (galleryId && window.articleGalleriesData[galleryId]) {
            // Chế độ chỉnh sửa gallery đã có sẵn
            const data = window.articleGalleriesData[galleryId];
            window.galleryState.editingId = galleryId;
            window.galleryState.layout = data.layout || '50-50';
            window.galleryState.items = JSON.parse(JSON.stringify(data.items || []));
            window.galleryState.previewDevice = 'desktop';
            window.selectedMediaIds = window.galleryState.items.map(it => it.id || '').filter(Boolean);
            modal.style.display = 'flex';
            window.switchGalleryModalTab('layout');
        } else {
            // Chế độ tạo mới từ Thư viện Media
            window.galleryState.editingId = null;
            modal.style.display = 'flex';
            window.switchGalleryModalTab('library');
        }
    };

    window.closeGalleryModal = function () {
        const modal = document.getElementById('gallery-picker-modal');
        if (modal) modal.style.display = 'none';
        window.galleryState.editingId = null;
    };

    // Upload thêm ảnh mới vào Media Library và chọn ngay
    window.handleGalleryUpload = function (event) {
        const files = event.target.files;
        if (!files || files.length === 0) return;

        let processed = 0;
        Array.from(files).forEach((file) => {
            const reader = new FileReader();
            reader.onload = function (e) {
                const cleanName = file.name.replace(/\.[^/.]+$/, "");
                const newId = 'med-upload-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4);
                const newMedia = {
                    id: newId,
                    category: 'all',
                    url: e.target.result,
                    name: file.name,
                    alt: `Hình ảnh: ${cleanName}`,
                    caption: cleanName
                };
                window.mediaLibraryItems.unshift(newMedia);
                window.selectedMediaIds.push(newId);
                window.activeDetailMediaId = newId;

                processed++;
                if (processed === files.length) {
                    window.renderMediaLibraryGrid();
                    showLdpToast(`Đã tải lên ${processed} hình ảnh vào Thư viện thành công!`);
                }
            };
            reader.readAsDataURL(file);
        });
        event.target.value = '';
    };

    window.removeGalleryItem = function (index) {
        if (index >= 0 && index < window.galleryState.items.length) {
            const removed = window.galleryState.items.splice(index, 1)[0];
            if (removed && removed.id) {
                const sIdx = window.selectedMediaIds.indexOf(removed.id);
                if (sIdx > -1) window.selectedMediaIds.splice(sIdx, 1);
            }
            window.renderGalleryModalUI();
            showLdpToast('Đã bỏ ảnh khỏi Gallery!');
        }
    };

    window.moveGalleryItem = function (fromIndex, toIndex) {
        if (toIndex < 0 || toIndex >= window.galleryState.items.length) return;
        const item = window.galleryState.items.splice(fromIndex, 1)[0];
        window.galleryState.items.splice(toIndex, 0, item);
        window.renderGalleryModalUI();
    };

    window.selectGalleryLayout = function (layoutKey) {
        window.galleryState.layout = layoutKey;
        const names = {
            '1-col': '1 Cột (Banner ảnh lớn)',
            '50-50': '50 / 50 (2 cột đều)',
            '33-33-33': '33 / 33 / 33 (3 cột đều)',
            '25-25-25-25': '25 / 25 / 25 / 25 (4 cột đều)',
            '33-67': '33 / 67 (Cột trái 1/3, Cột phải 2/3)',
            '67-33': '67 / 33 (Cột trái 2/3, Cột phải 1/3)',
            'grid-2x2': 'Lưới 2x2 (4 ảnh ma trận)'
        };
        const hintEl = document.getElementById('gallery-layout-curr-name');
        if (hintEl) hintEl.innerText = names[layoutKey] || layoutKey;

        // Cập nhật class active cho các nút layout
        document.querySelectorAll('.gallery-layout-btn').forEach(btn => {
            const isMatch = btn.getAttribute('data-layout') === layoutKey;
            btn.classList.toggle('active', isMatch);
            btn.style.border = isMatch ? '2px solid var(--primary)' : '1px solid var(--border-glass)';
            btn.style.background = isMatch ? 'rgba(255,107,0,0.1)' : 'rgba(255,255,255,0.03)';
        });

        window.renderGalleryPreview();
    };

    window.updateGalleryItemAlt = function (index, value) {
        if (window.galleryState.items[index]) {
            window.galleryState.items[index].alt = value;
            window.renderGalleryPreview();
        }
    };

    window.updateGalleryItemCaption = function (index, value) {
        if (window.galleryState.items[index]) {
            window.galleryState.items[index].caption = value;
            window.renderGalleryPreview();
        }
    };

    window.setGalleryPreviewDevice = function (device) {
        window.galleryState.previewDevice = device;
        const btnDesk = document.getElementById('gal-prev-btn-desktop');
        const btnMob = document.getElementById('gal-prev-btn-mobile');
        const wrapper = document.getElementById('gallery-preview-container');

        if (device === 'mobile') {
            if (btnDesk) { btnDesk.style.background = 'transparent'; btnDesk.style.color = 'var(--text-muted)'; }
            if (btnMob) { btnMob.style.background = 'rgba(255,255,255,0.1)'; btnMob.style.color = '#fff'; }
            if (wrapper) {
                wrapper.style.maxWidth = '375px';
                wrapper.style.boxShadow = '0 0 20px rgba(0,0,0,0.6)';
                wrapper.style.border = '2px solid rgba(255,255,255,0.15)';
                wrapper.style.borderRadius = '16px';
                wrapper.style.padding = '12px';
                wrapper.style.background = '#0e121a';
            }
        } else {
            if (btnDesk) { btnDesk.style.background = 'rgba(255,255,255,0.1)'; btnDesk.style.color = '#fff'; }
            if (btnMob) { btnMob.style.background = 'transparent'; btnMob.style.color = 'var(--text-muted)'; }
            if (wrapper) {
                wrapper.style.maxWidth = '100%';
                wrapper.style.boxShadow = 'none';
                wrapper.style.border = 'none';
                wrapper.style.borderRadius = '0';
                wrapper.style.padding = '0';
                wrapper.style.background = 'transparent';
            }
        }

        window.renderGalleryPreview();
    };

    window.renderGalleryModalUI = function () {
        const count = window.galleryState.items.length;
        const emptyTip = document.getElementById('gallery-empty-tip');
        if (emptyTip) emptyTip.style.display = count === 0 ? 'block' : 'none';

        const container = document.getElementById('gallery-items-container');
        if (!container) return;

        container.innerHTML = '';
        window.galleryState.items.forEach((item, idx) => {
            const row = document.createElement('div');
            row.className = 'gallery-item-row';
            row.draggable = true;
            row.style.cssText = 'display:flex; align-items:center; gap:10px; padding:6px 10px; background:rgba(255,255,255,0.03); border:1px solid var(--border-glass); border-radius:6px; cursor:move; transition:0.2s;';

            row.ondragstart = (e) => {
                e.dataTransfer.setData('text/plain', idx);
                row.style.opacity = '0.5';
            };
            row.ondragend = () => {
                row.style.opacity = '1';
            };
            row.ondragover = (e) => {
                e.preventDefault();
                row.style.borderColor = 'var(--primary)';
            };
            row.ondragleave = () => {
                row.style.borderColor = 'var(--border-glass)';
            };
            row.ondrop = (e) => {
                e.preventDefault();
                row.style.borderColor = 'var(--border-glass)';
                const fromIdx = parseInt(e.dataTransfer.getData('text/plain'), 10);
                if (!isNaN(fromIdx) && fromIdx !== idx) {
                    window.moveGalleryItem(fromIdx, idx);
                }
            };

            row.innerHTML = `
                <div style="font-size:12px; font-weight:800; color:var(--primary); width:24px; text-align:center;">#${idx + 1}</div>
                <div style="width:50px; height:38px; border-radius:4px; overflow:hidden; background:#000; flex-shrink:0; border:1px solid var(--border-glass);">
                    <img src="${item.url}" alt="${item.alt || ''}" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <div style="flex:1; display:grid; grid-template-columns:1fr 1.2fr; gap:6px;">
                    <div>
                        <input type="text" class="form-input" value="${item.alt || ''}" placeholder="Alt text (SEO)..."
                            oninput="window.updateGalleryItemAlt(${idx}, this.value)" style="font-size:11px; padding:3px 6px; height:26px;">
                    </div>
                    <div>
                        <input type="text" class="form-input" value="${item.caption || ''}" placeholder="Chú thích..."
                            oninput="window.updateGalleryItemCaption(${idx}, this.value)" style="font-size:11px; padding:3px 6px; height:26px;">
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:3px; margin-left:auto;">
                    <button type="button" class="btn btn-secondary btn-sm" onclick="window.moveGalleryItem(${idx}, ${idx - 1})"
                        ${idx === 0 ? 'disabled style="opacity:0.3; padding:2px 6px;"' : 'style="padding:2px 6px;"'} title="Lên trên">◀</button>
                    <button type="button" class="btn btn-secondary btn-sm" onclick="window.moveGalleryItem(${idx}, ${idx + 1})"
                        ${idx === count - 1 ? 'disabled style="opacity:0.3; padding:2px 6px;"' : 'style="padding:2px 6px;"'} title="Xuống dưới">▶</button>
                    <button type="button" class="btn btn-secondary btn-sm" onclick="window.removeGalleryItem(${idx})"
                        style="color:var(--danger); border-color:rgba(239,68,68,0.3); padding:2px 6px; margin-left:2px;" title="Xóa">🗑️</button>
                </div>
            `;
            container.appendChild(row);
        });

        window.selectGalleryLayout(window.galleryState.layout);
    };

    window.getGalleryGridTemplateColumns = function (layoutKey, isMobile = false) {
        if (isMobile) {
            return '1fr'; // Mobile responsive tự động căn 1 cột
        }
        switch (layoutKey) {
            case '1-col': return '1fr';
            case '50-50': return 'repeat(2, 1fr)';
            case '33-33-33': return 'repeat(3, 1fr)';
            case '25-25-25-25': return 'repeat(4, 1fr)';
            case '33-67': return '1fr 2fr';
            case '67-33': return '2fr 1fr';
            case 'grid-2x2': return 'repeat(2, 1fr)';
            default: return 'repeat(2, 1fr)';
        }
    };

    window.renderGalleryPreview = function () {
        const previewEl = document.getElementById('gallery-preview-container');
        if (!previewEl) return;

        const items = window.galleryState.items;
        if (items.length === 0) {
            previewEl.innerHTML = `<div style="text-align:center; color:var(--text-muted); font-size:12px; padding:20px;">Chưa có ảnh để hiển thị xem trước.</div>`;
            return;
        }

        const isMobile = window.galleryState.previewDevice === 'mobile';
        const gridCols = window.getGalleryGridTemplateColumns(window.galleryState.layout, isMobile);

        let html = `
            <div style="font-size:11px; color:#c084fc; font-weight:700; margin-bottom:8px; display:flex; justify-content:space-between;">
                <span>✨ Bố cục Gallery: ${window.galleryState.layout} (${items.length} ảnh)</span>
                <span>${isMobile ? '📱 Mobile: Tự động xếp chồng 100% responsive' : '💻 Desktop: Căn theo tỷ lệ cột'}</span>
            </div>
            <div class="gallery-grid" style="display:grid; grid-template-columns:${gridCols}; gap:12px; width:100%;">
        `;

        items.forEach((item) => {
            html += `
                <figure style="margin:0; text-align:center; overflow:hidden; border-radius:8px; background:rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.08); padding:4px;">
                    <img src="${item.url}" alt="${item.alt || ''}"
                        style="width:100%; height:auto; aspect-ratio:16/10; object-fit:cover; border-radius:6px; display:block;">
                    ${item.caption ? `<figcaption style="font-size:11.5px; color:#cbd5e1; font-style:italic; padding:6px 4px 2px; line-height:1.4;">${item.caption}</figcaption>` : ''}
                </figure>
            `;
        });

        html += `</div>`;
        previewEl.innerHTML = html;
    };

    // Chèn Gallery vào bài viết (Hỗ trợ từ 1 ảnh trở lên, không ép buộc >= 2 ảnh)
    window.confirmInsertGallery = function () {
        const items = window.galleryState.items;
        if (!items || items.length === 0) {
            showLdpToast('Vui lòng chọn ít nhất 1 hình ảnh vào Gallery!');
            return;
        }

        const layout = window.galleryState.layout;
        const galId = window.galleryState.editingId || ('gal-' + Date.now().toString(36));

        // Lưu vào kho data để có thể chỉnh sửa sau này
        window.articleGalleriesData[galId] = {
            id: galId,
            layout: layout,
            items: JSON.parse(JSON.stringify(items))
        };

        const gridCols = window.getGalleryGridTemplateColumns(layout, false);

        // Sinh mã HTML chuẩn responsive và shortcode
        const gallerySnippet = `\n\n<!-- GALLERY_START: id="${galId}" layout="${layout}" -->
<div class="article-gallery" data-gallery-id="${galId}" data-layout="${layout}" style="margin:24px 0; padding:12px; border:1px dashed rgba(192,132,252,0.35); border-radius:10px; background:rgba(192,132,252,0.03);">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; padding-bottom:6px; border-bottom:1px solid rgba(255,255,255,0.06); font-size:11.5px; color:#c084fc;">
        <span>🖼️ <strong>Gallery (${layout})</strong> &mdash; ${items.length} hình ảnh</span>
        <button type="button" class="btn btn-secondary btn-sm" onclick="window.openGalleryModal('${galId}')" style="font-size:10.5px; padding:2px 8px; color:var(--primary); border-color:var(--primary);">✏️ Đổi layout / Chỉnh sửa</button>
    </div>
    <div class="gallery-grid" style="display:grid; grid-template-columns:${gridCols}; gap:12px;">
${items.map(item => `        <figure style="margin:0; text-align:center;">
            <img src="${item.url}" alt="${item.alt || ''}" style="width:100%; height:auto; border-radius:6px; object-fit:cover; aspect-ratio:16/10; border:1px solid rgba(255,255,255,0.08);">
            ${item.caption ? `<figcaption style="font-size:11.5px; color:#94a3b8; font-style:italic; margin-top:5px;">${item.caption}</figcaption>` : ''}
        </figure>`).join('\n')}
    </div>
</div>
<!-- GALLERY_END -->\n\n`;

        const contentEl = document.getElementById('art-content');
        if (contentEl) {
            if (window.galleryState.editingId) {
                // Thay thế khối cũ nếu đang sửa
                const regex = new RegExp(`<!-- GALLERY_START: id="${galId}"[\\s\\S]*?<!-- GALLERY_END -->`, 'g');
                if (regex.test(contentEl.value)) {
                    contentEl.value = contentEl.value.replace(regex, gallerySnippet.trim());
                } else {
                    contentEl.value += gallerySnippet;
                }
            } else {
                // Chèn mới tại vị trí con trỏ chuột
                const startPos = contentEl.selectionStart || contentEl.value.length;
                const endPos = contentEl.selectionEnd || contentEl.value.length;
                contentEl.value = contentEl.value.substring(0, startPos) + gallerySnippet + contentEl.value.substring(endPos);
                contentEl.focus();
                contentEl.setSelectionRange(startPos + gallerySnippet.length, startPos + gallerySnippet.length);
            }
        }

        window.closeGalleryModal();
        window.updateWordAndReadingStats();
        window.triggerAutoSave();
        showLdpToast(`Đã chèn Gallery (${layout}) gồm ${items.length} hình ảnh vào bài viết!`);
    };

    // Google SERP Snippet Preview realtime (STT 11)
    window.updateSerpPreview = function () {
        const seoTitle = document.getElementById('art-seo-title')?.value.trim();
        const artTitle = document.getElementById('art-title')?.value.trim();
        const slug = document.getElementById('art-slug')?.value.trim();
        const seoDesc = document.getElementById('art-seo-desc')?.value.trim();
        const artSapo = document.getElementById('art-sapo')?.value.trim();

        const titleEl = document.getElementById('serp-preview-title');
        const slugEl = document.getElementById('serp-preview-slug');
        const descEl = document.getElementById('serp-preview-desc');

        if (titleEl) {
            titleEl.innerText = seoTitle || artTitle || 'Lắp đặt mạng FPT khuyến mãi hè 2026 cực sốc';
        }
        if (slugEl) {
            slugEl.innerText = slug || 'lap-mang-fpt-khuyen-mai-he-2026';
        }
        if (descEl) {
            descEl.innerText = seoDesc || artSapo || 'Chào hè rực rỡ với chương trình khuyến mãi lắp đặt mạng cáp quang FPT Telecom cực lớn trong năm 2026. Tặng đến 2 tháng cước sử dụng, miễn phí modem Wi-Fi 6 thế hệ mới.';
        }
    };

    window.resetNewsForm = function (shouldFillDemo = false) {
        document.getElementById('article-form-title').innerText = 'Tạo mới Bài viết Tin tức';
        const titleBarEl = document.getElementById('article-form-title-bar');
        if (titleBarEl) titleBarEl.innerText = 'Tạo mới Bài viết Tin tức';

        document.getElementById('article-id').value = '';
        document.getElementById('art-title').value = '';
        document.getElementById('art-slug').value = '';
        document.getElementById('art-sapo').value = '';
        document.getElementById('art-content').value = '';
        document.getElementById('art-tags').value = '';
        if (typeof window.setSelectedTagsFromValue === 'function') window.setSelectedTagsFromValue('');
        if (typeof window.setAppliedPackages === 'function') window.setAppliedPackages(['int-giga-fptvn', 'int-meta-fptvn']);
        const oldCatEl = document.getElementById('art-category'); if (oldCatEl) oldCatEl.value = 'Tin khuyến mãi';

        // Reset Cây Danh mục (STT 7.0)
        document.querySelectorAll('#news-cat-tree-container .cat-check').forEach(chk => {
            chk.checked = chk.value === 'Tin khuyến mãi';
        });
        if (typeof window.setNewsPrimaryCategory === 'function') {
            window.setNewsPrimaryCategory('Tin khuyến mãi');
        }

        const elChan = document.getElementById('art-channel'); if (elChan) elChan.value = 'fpt-telecom';
        const elStat = document.getElementById('art-status'); if (elStat) elStat.value = 'Published';
        window.currentEditingArticleChannel = 'fpt-telecom';
        window.currentEditingArticleStatus = 'Published';

        // Cho phép tự động sinh slug theo tiêu đề ban đầu
        window.isSlugManual = false;
        window.isSlugLocked = false;

        // Reset các bộ đếm
        const titleCnt = document.getElementById('news-title-count'); if (titleCnt) { titleCnt.innerText = '0 / 250 ký tự'; titleCnt.style.color = 'var(--text-muted)'; }
        const sapoCnt = document.getElementById('news-sapo-count'); if (sapoCnt) { sapoCnt.innerText = '0 / 500 ký tự'; sapoCnt.style.color = 'var(--text-muted)'; }

        // Các trường tùy chọn
        const elType = document.getElementById('art-type'); if (elType) elType.value = 'article';
        const elCatSub = document.getElementById('art-category-sub'); if (elCatSub) elCatSub.value = '';
        const elLang = document.getElementById('art-lang'); if (elLang) elLang.value = 'vi';
        const elPubDate = document.getElementById('art-publish-date');
        if (elPubDate) {
            const now = new Date();
            const offset = now.getTimezoneOffset() * 60000;
            const localISOTime = (new Date(now.getTime() - offset)).toISOString().slice(0, 16);
            elPubDate.value = localISOTime;
        }
        const elAllowComment = document.getElementById('art-allow-comment'); if (elAllowComment) elAllowComment.checked = true;
        const elMediaUrl = document.getElementById('art-media-url'); if (elMediaUrl) elMediaUrl.value = '';
        const elSeoKeywords = document.getElementById('art-seo-keywords'); if (elSeoKeywords) elSeoKeywords.value = '';
        const elSeoRobot = document.getElementById('art-seo-robot'); if (elSeoRobot) elSeoRobot.value = 'index, follow';

        document.getElementById('art-thumbnail-url').value = 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80';
        document.getElementById('art-thumb-preview').src = 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80';
        const fnEl = document.getElementById('art-thumb-filename'); if (fnEl) fnEl.innerText = 'img_thumbnail_default.jpg';
        const altEl = document.getElementById('art-thumbnail-alt'); if (altEl) altEl.value = '';
        const capEl = document.getElementById('art-thumbnail-caption'); if (capEl) capEl.value = '';

        document.getElementById('art-seo-title').value = '';
        document.getElementById('art-seo-desc').value = '';
        const titleCountEl = document.getElementById('seo-title-count'); if (titleCountEl) titleCountEl.innerText = '0 / 60 ký tự';
        const descCountEl = document.getElementById('seo-desc-count'); if (descCountEl) descCountEl.innerText = '0 / 160 ký tự';

        const autosaveEl = document.getElementById('art-autosave-status');
        if (autosaveEl) autosaveEl.innerText = '';
        const featuredEl = document.getElementById('art-featured');
        if (featuredEl) featuredEl.checked = false;

        // Reset Tiện ích Chuyển đổi & Trang chủ
        const showHomeEl = document.getElementById('art-show-home'); if (showHomeEl) showHomeEl.checked = true;
        const homeOrderEl = document.getElementById('art-home-order'); if (homeOrderEl) homeOrderEl.value = '1';
        const showCatEl = document.getElementById('art-show-cat'); if (showCatEl) showCatEl.checked = true;
        const catOrderEl = document.getElementById('art-cat-order'); if (catOrderEl) catOrderEl.value = '1';
        const catOrderWrap = document.getElementById('art-cat-order-wrap'); if (catOrderWrap) catOrderWrap.style.display = 'flex';
        const leadFormEl = document.getElementById('art-enable-lead-form'); if (leadFormEl) leadFormEl.checked = false;
        const leadFormBox = document.getElementById('box-lead-form-options'); if (leadFormBox) leadFormBox.style.display = 'none';
        const chatEl = document.getElementById('art-enable-chat'); if (chatEl) chatEl.checked = false;
        const chatBox = document.getElementById('box-chat-options'); if (chatBox) chatBox.style.display = 'none';
        const popupEl = document.getElementById('art-enable-popup'); if (popupEl) popupEl.checked = false;
        const popupBox = document.getElementById('box-popup-options'); if (popupBox) popupBox.style.display = 'none';

        window.updateWordAndReadingStats();
        window.updateSerpPreview();
        window.onArticleStatusChange();

        if (shouldFillDemo) {
            window.loadMockArticleToForm(false);
        }
    };

    // =========================================================================
    // XỬ LÝ XEM TRÊN WEBSITE (STT 16.0)
    // =========================================================================
    window.viewNewsArticleOnWeb = function (id) {
        const art = window.newsArticlesData[id];
        if (!art) {
            showLdpToast('Không tìm thấy thông tin bài viết!');
            return;
        }

        const slug = art.slug || ('bai-viet-' + id);
        let previewUrl = `https://fpt.vn/tin-tuc/${slug}`;

        if (art.status === 'Draft' || art.status === 'Scheduled') {
            previewUrl += `?preview=true&token=fpt_cms_preview_token_secure&status=${art.status.toLowerCase()}`;
            showLdpToast(`Đang mở chế độ Xem trước (Preview) cho bài viết ${art.status === 'Draft' ? 'Bản nháp' : 'Lên lịch'}...`);
        } else {
            showLdpToast('Đang mở trang bài viết công khai trên website...');
        }

        window.open(previewUrl, '_blank');
    };

    // =========================================================================
    // XỬ LÝ DROPDOWN MULTI-SELECT CHỌN THẺ TAGS TỪ HỆ THỐNG QUẢN LÝ TAGS
    // =========================================================================
    window.toggleNewsTagsDropdown = function (event) {
        if (event) event.stopPropagation();
        const menu = document.getElementById('art-tags-dropdown-menu');
        const arrow = document.getElementById('art-tags-arrow');
        if (!menu) return;

        const isOpen = menu.style.display === 'block';
        if (isOpen) {
            window.closeNewsTagsDropdown();
        } else {
            window.renderArticleTagsDropdown();
            menu.style.display = 'block';
            if (arrow) arrow.style.transform = 'rotate(180deg)';
            const searchInput = document.getElementById('art-tags-search-filter');
            if (searchInput) {
                searchInput.value = '';
                setTimeout(() => searchInput.focus(), 50);
            }
        }
    };

    window.closeNewsTagsDropdown = function () {
        const menu = document.getElementById('art-tags-dropdown-menu');
        const arrow = document.getElementById('art-tags-arrow');
        if (menu) menu.style.display = 'none';
        if (arrow) arrow.style.transform = 'rotate(0deg)';
    };

    window.goToNewsTagsTab = function (event) {
        if (event) event.stopPropagation();
        window.closeNewsTagsDropdown();
        window.closeNewsArticleDrawer();
        const tabsBar = document.querySelector('#mod-news .tabs');
        if (tabsBar) {
            const tagTab = Array.from(tabsBar.querySelectorAll('.tab')).find(t => t.innerText.includes('Quản lý Tags') || t.innerText.includes('Tags'));
            if (tagTab) {
                window.switchNewsTab('tag-list', tagTab);
            }
        }
    };

    window.getSelectedTagsArray = function () {
        const input = document.getElementById('art-tags');
        if (!input) return [];
        const val = input.value.trim();
        return val ? val.split(',').map(t => t.trim()).filter(Boolean) : [];
    };

    window.renderArticleTagsDropdown = function () {
        const listContainer = document.getElementById('art-tags-options-list');
        const chipsContainer = document.getElementById('art-tags-selected-chips');
        const badgeCount = document.getElementById('art-tags-badge-count');
        const selectedTags = window.getSelectedTagsArray();

        // 1. Render Chips đã chọn ở Trigger Box
        if (chipsContainer) {
            chipsContainer.innerHTML = '';
            if (selectedTags.length === 0) {
                chipsContainer.innerHTML = '<span style="color:var(--text-muted); font-size:12.5px;" id="art-tags-placeholder">-- Chọn thẻ Tags từ hệ thống Quản lý Tags --</span>';
                if (badgeCount) badgeCount.style.display = 'none';
            } else {
                selectedTags.forEach(tag => {
                    const chip = document.createElement('span');
                    chip.className = 'badge';
                    chip.style.cssText = 'background:rgba(249,115,22,0.18); color:#f97316; border:1px solid rgba(249,115,22,0.35); padding:3px 9px; border-radius:14px; font-size:12px; display:inline-flex; align-items:center; gap:6px; margin:2px 3px 2px 0; font-weight:500;';
                    chip.innerHTML = `<span>#${tag}</span><span onclick="window.removeSelectedTag('${tag}', event)" style="cursor:pointer; font-weight:700; opacity:0.8; font-size:12px; padding:0 2px;" title="Xóa thẻ">&times;</span>`;
                    chipsContainer.appendChild(chip);
                });
                if (badgeCount) {
                    badgeCount.innerText = selectedTags.length;
                    badgeCount.style.display = 'inline-block';
                }
            }
        }

        // 2. Render danh sách Options từ window.newsTagsData
        if (listContainer) {
            listContainer.innerHTML = '';
            const allTagsMap = {};

            for (let id in window.newsTagsData) {
                const tagObj = window.newsTagsData[id];
                const tagName = tagObj.name || tagObj.slug;
                allTagsMap[tagName.toLowerCase()] = {
                    name: tagName,
                    slug: tagObj.slug || tagName,
                    count: tagObj.count || 0,
                    status: tagObj.status || 'Active'
                };
            }

            selectedTags.forEach(t => {
                const lower = t.toLowerCase();
                if (!allTagsMap[lower]) {
                    allTagsMap[lower] = {
                        name: t,
                        slug: t,
                        count: 0,
                        status: 'Active'
                    };
                }
            });

            const tagKeys = Object.keys(allTagsMap);
            if (tagKeys.length === 0) {
                listContainer.innerHTML = '<div style="color:var(--text-muted); font-size:12px; padding:10px; text-align:center;">Chưa có thẻ tag nào trong hệ thống!</div>';
                return;
            }

            tagKeys.forEach(key => {
                const item = allTagsMap[key];
                const isChecked = selectedTags.some(t => t.toLowerCase() === item.name.toLowerCase());

                const row = document.createElement('div');
                row.className = 'art-tag-option-item';
                row.setAttribute('data-name', item.name.toLowerCase());
                row.style.cssText = `display:flex; align-items:center; justify-content:space-between; padding:7px 10px; border-radius:6px; cursor:pointer; background:${isChecked ? 'rgba(249,115,22,0.12)' : 'transparent'}; border:1px solid ${isChecked ? 'rgba(249,115,22,0.3)' : 'transparent'}; transition:all 0.15s;`;
                row.onclick = function (e) {
                    window.toggleSelectTag(item.name, e);
                };

                row.innerHTML = `
                    <div style="display:flex; align-items:center; gap:8px;">
                        <input type="checkbox" ${isChecked ? 'checked' : ''} style="accent-color:var(--primary); width:15px; height:15px; cursor:pointer;" onclick="event.stopPropagation(); window.toggleSelectTag('${item.name}', event);">
                        <span style="font-weight:600; color:${isChecked ? '#fb923c' : '#fff'}; font-size:12.5px;">${item.name}</span>
                        <span style="font-size:11px; color:#94a3b8; font-family:monospace;">(${item.slug})</span>
                    </div>
                    <div style="display:flex; align-items:center; gap:6px;">
                        ${item.count > 0 ? `<span style="font-size:10.5px; color:#94a3b8;">${item.count} bài</span>` : ''}
                        <span class="badge" style="font-size:10px; padding:1px 6px; background:${item.status === 'Active' ? 'rgba(16,185,129,0.15)' : 'rgba(148,163,184,0.15)'}; color:${item.status === 'Active' ? '#10b981' : '#94a3b8'};">${item.status === 'Active' ? 'Hoạt động' : 'Nháp'}</span>
                    </div>
                `;
                listContainer.appendChild(row);
            });
        }
    };

    window.filterArticleTagsDropdown = function (query) {
        const q = (query || '').toLowerCase().trim();
        const items = document.querySelectorAll('#art-tags-options-list .art-tag-option-item');
        items.forEach(item => {
            const name = item.getAttribute('data-name') || '';
            if (!q || name.includes(q)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    };

    window.toggleSelectTag = function (tagName, event) {
        if (event) event.stopPropagation();
        const input = document.getElementById('art-tags');
        if (!input) return;

        let selected = window.getSelectedTagsArray();
        const index = selected.findIndex(t => t.toLowerCase() === tagName.toLowerCase());

        if (index > -1) {
            selected.splice(index, 1);
        } else {
            selected.push(tagName);
        }

        input.value = selected.join(', ');
        window.renderArticleTagsDropdown();
    };

    window.removeSelectedTag = function (tagName, event) {
        if (event) event.stopPropagation();
        const input = document.getElementById('art-tags');
        if (!input) return;

        let selected = window.getSelectedTagsArray();
        selected = selected.filter(t => t.toLowerCase() !== tagName.toLowerCase());
        input.value = selected.join(', ');
        window.renderArticleTagsDropdown();
    };

    window.clearAllSelectedTags = function (event) {
        if (event) event.stopPropagation();
        const input = document.getElementById('art-tags');
        if (input) input.value = '';
        window.renderArticleTagsDropdown();
    };

    window.setSelectedTagsFromValue = function (tagsStr) {
        const input = document.getElementById('art-tags');
        if (input) input.value = tagsStr || '';
        window.renderArticleTagsDropdown();
    };

    window.addTagToInput = function (newTag) {
        const input = document.getElementById('art-tags');
        if (!input) return;

        let tags = window.getSelectedTagsArray();
        const isExist = tags.some(t => t.toLowerCase() === newTag.toLowerCase());
        if (isExist) {
            showLdpToast(`Thẻ "${newTag}" đã được chọn!`);
            return;
        }

        tags.push(newTag);
        input.value = tags.join(', ');
        window.renderArticleTagsDropdown();
        showLdpToast(`Đã chọn thẻ: ${newTag}`);
    };

    // Đóng dropdown tags khi click ra ngoài
    document.addEventListener('click', function (e) {
        const wrapper = document.getElementById('art-tags-wrapper');
        if (wrapper && !wrapper.contains(e.target)) {
            window.closeNewsTagsDropdown();
        }
    });

    // =========================================================================
    // XỬ LÝ BỘ CHỌN CÂY DANH MỤC ĐA TẦNG (CATEGORY TREE - STT 7.0)
    // =========================================================================
    window.filterNewsCategoryTree = function (query) {
        const q = (query || '').toLowerCase().trim();
        const nodes = document.querySelectorAll('#news-cat-tree-container .cat-tree-node');
        nodes.forEach(node => {
            const name = (node.getAttribute('data-name') || '').toLowerCase();
            if (!q || name.includes(q)) {
                node.style.display = 'flex';
            } else {
                node.style.display = 'none';
            }
        });
    };

    window.toggleCatTreeNode = function (childrenId, toggleBtn) {
        const childContainer = document.getElementById(childrenId);
        if (!childContainer) return;
        if (childContainer.style.display === 'none') {
            childContainer.style.display = 'flex';
            if (toggleBtn) toggleBtn.innerText = '▼';
        } else {
            childContainer.style.display = 'none';
            if (toggleBtn) toggleBtn.innerText = '▶';
        }
    };

    window._isCatTreeExpanded = true;
    window.expandAllNewsCatTree = function () {
        window._isCatTreeExpanded = !window._isCatTreeExpanded;
        const subContainers = document.querySelectorAll('#news-cat-tree-container [id$="-children"]');
        const toggles = document.querySelectorAll('#news-cat-tree-container .cat-toggle');
        subContainers.forEach(el => el.style.display = window._isCatTreeExpanded ? 'flex' : 'none');
        toggles.forEach(t => t.innerText = window._isCatTreeExpanded ? '▼' : '▶');
    };

    window.setNewsPrimaryCategory = function (catName) {
        if (!catName) return;
        const primaryInput = document.getElementById('art-primary-category');
        const primaryLabel = document.getElementById('news-primary-cat-label');
        if (primaryInput) primaryInput.value = catName;
        if (primaryLabel) primaryLabel.innerText = catName;

        // Cập nhật class active cho badge Chính
        document.querySelectorAll('#news-cat-tree-container .cat-primary-badge').forEach(badge => {
            const node = badge.closest('.cat-tree-node');
            const nodeName = node ? (node.getAttribute('data-name') || node.querySelector('.cat-check')?.value) : '';
            if (nodeName === catName) {
                badge.classList.add('active');
                // Tự động tick checkbox nếu chưa tick
                const chk = node.querySelector('.cat-check');
                if (chk && !chk.checked) chk.checked = true;
            } else {
                badge.classList.remove('active');
            }
        });

        // Tự động đồng bộ vào select chuyên mục chính cũ nếu còn tồn tại
        const oldCatSelect = document.getElementById('art-category');
        if (oldCatSelect) oldCatSelect.value = catName;
    };

    window.onNewsCategoryCheckChange = function (chk) {
        const catName = chk.value;
        const primaryInput = document.getElementById('art-primary-category');
        const currentPrimary = primaryInput ? primaryInput.value : '';

        if (chk.checked) {
            // Nếu chưa có danh mục chính nào, chọn mục vừa tick làm chính
            if (!currentPrimary) {
                window.setNewsPrimaryCategory(catName);
            }
        } else {
            // Nếu bỏ tick danh mục đang là chính, chuyển sang mục đã tick khác
            if (currentPrimary === catName) {
                const otherChecked = document.querySelector('#news-cat-tree-container .cat-check:checked');
                if (otherChecked) {
                    window.setNewsPrimaryCategory(otherChecked.value);
                } else {
                    if (primaryInput) primaryInput.value = '';
                    const primaryLabel = document.getElementById('news-primary-cat-label');
                    if (primaryLabel) primaryLabel.innerText = 'Chưa chọn';
                    document.querySelectorAll('#news-cat-tree-container .cat-primary-badge').forEach(b => b.classList.remove('active'));
                }
            }
        }
    };

    window.promptQuickAddCategory = function () {
        const newCatName = prompt('Nhập tên Chuyên mục mới muốn thêm nhanh:');
        if (!newCatName || !newCatName.trim()) return;

        const name = newCatName.trim();
        const container = document.getElementById('news-cat-tree-container');
        if (!container) return;

        const catId = 'cat-custom-' + Date.now();
        const newNode = document.createElement('div');
        newNode.className = 'cat-tree-node';
        newNode.setAttribute('data-id', catId);
        newNode.setAttribute('data-name', name);
        newNode.style.cssText = 'display:flex; align-items:center; justify-content:space-between; padding:4px 6px; border-radius:4px; font-size:12px;';
        newNode.innerHTML = `
            <label style="display:flex; align-items:center; gap:6px; margin:0; cursor:pointer; color:#e2e8f0; flex:1;">
                <input type="checkbox" class="cat-check" value="${name}" checked onchange="window.onNewsCategoryCheckChange(this)" style="accent-color:var(--primary); cursor:pointer;">
                <span>📁 ${name}</span>
            </label>
            <span class="cat-primary-badge" onclick="window.setNewsPrimaryCategory('${name}')" title="Đặt làm danh mục đại diện">Chính</span>
        `;
        container.appendChild(newNode);
        window.setNewsPrimaryCategory(name);
        showLdpToast(`Đã thêm nhanh chuyên mục: "${name}"`);
    };

    // Thêm thẻ gợi ý nhanh vào trường Tags (STT 8.0)
    window.addTagToInput = function (tag) {
        const input = document.getElementById('art-tags');
        if (!input) return;
        const current = input.value.split(',').map(t => t.trim()).filter(Boolean);
        if (!current.includes(tag)) {
            current.push(tag);
            input.value = current.join(', ');
            showLdpToast(`Đã gắn thẻ: #${tag}`);
        } else {
            showLdpToast(`Thẻ #${tag} đã được chọn!`);
        }
    };

    window.editNewsArticle = function (id) {
        const art = window.newsArticlesData[id];
        if (!art) return;

        document.getElementById('article-form-title').innerText = 'Chỉnh sửa Bài viết #' + id;
        const titleBarEl = document.getElementById('article-form-title-bar');
        if (titleBarEl) titleBarEl.innerText = 'Chỉnh sửa Bài viết #' + id;

        document.getElementById('article-id').value = art.id;
        document.getElementById('art-title').value = art.title;
        document.getElementById('art-slug').value = art.slug;
        document.getElementById('art-sapo').value = art.sapo || '';
        document.getElementById('art-content').value = art.content || '';
        document.getElementById('art-tags').value = art.tags || '';
        if (typeof window.setSelectedTagsFromValue === 'function') window.setSelectedTagsFromValue(art.tags || '');
        if (typeof window.setAppliedPackages === 'function') window.setAppliedPackages(art.appliedPackages || ['int-giga-fptvn']);

        // Đổ dữ liệu Cây Danh mục (STT 7.0)
        const primaryCat = art.categoryPrimary || art.category || 'Tin khuyến mãi';
        const allCats = art.categories || [art.category, art.categorySub].filter(Boolean);

        // Reset check các node
        document.querySelectorAll('#news-cat-tree-container .cat-check').forEach(chk => {
            chk.checked = allCats.includes(chk.value) || chk.value === primaryCat;
        });
        window.setNewsPrimaryCategory(primaryCat);

        const oldCatEl = document.getElementById('art-category'); if (oldCatEl) oldCatEl.value = primaryCat;
        const elChan = document.getElementById('art-channel'); if (elChan) elChan.value = art.channel || 'fpt-telecom';
        const elStat = document.getElementById('art-status'); if (elStat) elStat.value = art.status;
        window.currentEditingArticleChannel = art.channel || 'fpt-telecom';
        window.currentEditingArticleStatus = art.status || 'Published';

        // Đối với bài viết đã có, đánh dấu slug thủ công để tránh vô tình đổi đường dẫn URL khi sửa tiêu đề
        window.isSlugManual = true;

        // Cập nhật bộ đếm ký tự
        const titleCnt = document.getElementById('news-title-count');
        if (titleCnt) titleCnt.innerText = `${art.title.length} / 250 ký tự`;
        const sapoCnt = document.getElementById('news-sapo-count');
        if (sapoCnt) sapoCnt.innerText = `${(art.sapo || '').length} / 500 ký tự`;

        // Các trường khác
        const elType = document.getElementById('art-type'); if (elType) elType.value = art.type || 'article';
        const elCatSub = document.getElementById('art-category-sub'); if (elCatSub) elCatSub.value = art.categorySub || '';
        const elLang = document.getElementById('art-lang'); if (elLang) elLang.value = art.lang || 'vi';
        const elPubDate = document.getElementById('art-publish-date'); if (elPubDate) elPubDate.value = art.publishDate || '';
        const elAllowComment = document.getElementById('art-allow-comment'); if (elAllowComment) elAllowComment.checked = art.allowComment !== false;
        const elMediaUrl = document.getElementById('art-media-url'); if (elMediaUrl) elMediaUrl.value = art.mediaUrl || '';
        const elSeoKeywords = document.getElementById('art-seo-keywords'); if (elSeoKeywords) elSeoKeywords.value = art.seoKeywords || '';
        const elSeoRobot = document.getElementById('art-seo-robot'); if (elSeoRobot) elSeoRobot.value = art.seoRobot || 'index, follow';

        // Load Tiện ích Chuyển đổi & Trang chủ
        const showHomeEl = document.getElementById('art-show-home');
        if (showHomeEl) showHomeEl.checked = art.showHome !== false;
        const homeOrderEl = document.getElementById('art-home-order');
        if (homeOrderEl) homeOrderEl.value = art.homeOrder || 1;
        const showCatEl = document.getElementById('art-show-cat');
        if (showCatEl) showCatEl.checked = art.showCat !== false;
        const catOrderEl = document.getElementById('art-cat-order');
        if (catOrderEl) catOrderEl.value = art.catOrder || 1;
        const catOrderWrap = document.getElementById('art-cat-order-wrap');
        if (catOrderWrap) catOrderWrap.style.display = (art.showCat !== false) ? 'flex' : 'none';

        const leadFormEl = document.getElementById('art-enable-lead-form');
        const leadFormBox = document.getElementById('box-lead-form-options');
        if (leadFormEl) {
            leadFormEl.checked = !!art.enableLeadForm;
            if (leadFormBox) leadFormBox.style.display = art.enableLeadForm ? 'block' : 'none';
        }
        const leadFormIdEl = document.getElementById('art-lead-form-id');
        if (leadFormIdEl && art.leadFormId) leadFormIdEl.value = art.leadFormId;
        const leadFormPosEl = document.getElementById('art-lead-form-pos');
        if (leadFormPosEl && art.leadFormPos) leadFormPosEl.value = art.leadFormPos;

        const chatEl = document.getElementById('art-enable-chat');
        const chatBox = document.getElementById('box-chat-options');
        if (chatEl) {
            chatEl.checked = !!art.enableChat;
            if (chatBox) chatBox.style.display = art.enableChat ? 'block' : 'none';
        }
        const chatChannelEl = document.getElementById('art-chat-channel');
        if (chatChannelEl && art.chatChannel) chatChannelEl.value = art.chatChannel;

        const popupEl = document.getElementById('art-enable-popup');
        const popupBox = document.getElementById('box-popup-options');
        if (popupEl) {
            popupEl.checked = !!art.enablePopup;
            if (popupBox) popupBox.style.display = art.enablePopup ? 'block' : 'none';
        }
        const popupIdEl = document.getElementById('art-popup-id');
        if (popupIdEl && art.popupId) popupIdEl.value = art.popupId;
        const popupFreqEl = document.getElementById('art-popup-freq');
        if (popupFreqEl && art.popupFreq) popupFreqEl.value = art.popupFreq;

        document.getElementById('art-thumbnail-url').value = art.thumbUrl;
        document.getElementById('art-thumb-preview').src = art.thumbUrl;
        const fnEl = document.getElementById('art-thumb-filename');
        if (fnEl) fnEl.innerText = art.thumbUrl.substring(art.thumbUrl.lastIndexOf('/') + 1);
        const altEl = document.getElementById('art-thumbnail-alt'); if (altEl) altEl.value = art.thumbAlt || '';
        const capEl = document.getElementById('art-thumbnail-caption'); if (capEl) capEl.value = art.thumbCaption || '';

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
        window.updateWordAndReadingStats();
        window.updateSerpPreview();
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

        // Thu thập danh mục từ Cây Danh mục (STT 7.0)
        const checkedCats = Array.from(document.querySelectorAll('#news-cat-tree-container .cat-check:checked')).map(cb => cb.value);
        let primaryCat = document.getElementById('art-primary-category')?.value;
        if (!primaryCat && checkedCats.length > 0) {
            primaryCat = checkedCats[0];
            window.setNewsPrimaryCategory(primaryCat);
        }
        const category = primaryCat || 'Tin khuyến mãi';

        const elChan = document.getElementById('art-channel');
        const channel = elChan ? elChan.value : (window.currentEditingArticleChannel || 'fpt-telecom');
        const elStat = document.getElementById('art-status');
        let status = elStat ? elStat.value : (window.currentEditingArticleStatus || 'Published');
        const thumbUrl = document.getElementById('art-thumbnail-url').value;
        const thumbAlt = document.getElementById('art-thumbnail-alt')?.value.trim() || '';
        const thumbCaption = document.getElementById('art-thumbnail-caption')?.value.trim() || '';
        const seoTitle = document.getElementById('art-seo-title').value.trim();
        const seoDesc = document.getElementById('art-seo-desc').value.trim();
        const featuredEl = document.getElementById('art-featured');
        const featured = featuredEl ? featuredEl.checked : false;

        // Các trường mới bổ sung
        const elType = document.getElementById('art-type'); const type = elType ? elType.value : 'article';
        const elCatSub = document.getElementById('art-category-sub'); const categorySub = elCatSub ? elCatSub.value : '';
        const elLang = document.getElementById('art-lang'); const lang = elLang ? elLang.value : 'vi';
        const elPubDate = document.getElementById('art-publish-date'); const publishDate = elPubDate ? elPubDate.value : '';
        const elAllowComment = document.getElementById('art-allow-comment'); const allowComment = elAllowComment ? elAllowComment.checked : true;
        const elMediaUrl = document.getElementById('art-media-url'); const mediaUrl = elMediaUrl ? elMediaUrl.value : '';
        const elSeoKeywords = document.getElementById('art-seo-keywords'); const seoKeywords = elSeoKeywords ? elSeoKeywords.value : '';
        const elSeoRobot = document.getElementById('art-seo-robot'); const seoRobot = elSeoRobot ? elSeoRobot.value : 'index, follow';
        const bannerId = document.getElementById('art-banner-id') ? document.getElementById('art-banner-id').value : '';

        // Tiện ích Chuyển đổi & Trang chủ
        const showHomeEl = document.getElementById('art-show-home'); const showHome = showHomeEl ? showHomeEl.checked : true;
        const homeOrderEl = document.getElementById('art-home-order'); const homeOrder = homeOrderEl ? parseInt(homeOrderEl.value) || 1 : 1;
        const showCatEl = document.getElementById('art-show-cat'); const showCat = showCatEl ? showCatEl.checked : true;
        const catOrderEl = document.getElementById('art-cat-order'); const catOrder = catOrderEl ? parseInt(catOrderEl.value) || 1 : 1;
        const leadFormEl = document.getElementById('art-enable-lead-form'); const enableLeadForm = leadFormEl ? leadFormEl.checked : false;
        const leadFormIdEl = document.getElementById('art-lead-form-id'); const leadFormId = leadFormIdEl ? leadFormIdEl.value : 'form-tu-van-fpt';
        const leadFormPosEl = document.getElementById('art-lead-form-pos'); const leadFormPos = leadFormPosEl ? leadFormPosEl.value : 'bottom';
        const chatEl = document.getElementById('art-enable-chat'); const enableChat = chatEl ? chatEl.checked : false;
        const chatChannelEl = document.getElementById('art-chat-channel'); const chatChannel = chatChannelEl ? chatChannelEl.value : 'zalo';
        const popupEl = document.getElementById('art-enable-popup'); const enablePopup = popupEl ? popupEl.checked : false;
        const popupIdEl = document.getElementById('art-popup-id'); const popupId = popupIdEl ? popupIdEl.value : 'popup-khuyenmai-he';
        const popupFreqEl = document.getElementById('art-popup-freq'); const popupFreq = popupFreqEl ? popupFreqEl.value : 'once_session';

        if (!title || !slug || !content || !sapo) {
            showLdpToast('Vui lòng nhập đầy đủ các thông tin bắt buộc (*): Tiêu đề, Slug, Sapo, Nội dung!');
            return;
        }

        if (checkedCats.length === 0) {
            showLdpToast('Vui lòng chọn ít nhất một chuyên mục trong Cây Danh mục!');
            return;
        }

        let scheduledTime = '';
        if (status === 'Scheduled') {
            scheduledTime = publishDate;
            if (!scheduledTime) {
                showLdpToast('Vui lòng chọn ngày đăng để đặt lịch xuất bản!');
                return;
            }
            const schedDate = new Date(scheduledTime);
            const now = new Date();
            if (schedDate <= now) {
                status = 'Published';
                showLdpToast('Thời gian đặt lịch bằng hoặc nhỏ hơn hiện tại. Bài viết được xuất bản ngay lập tức!');
            } else {
                showLdpToast('Đã lưu bài viết ở trạng thái đặt lịch. Bài viết sẽ tự động xuất bản khi đến giờ hẹn!');
            }
        } else {
            scheduledTime = publishDate;
        }

        const formatDateString = function (isoStr) {
            if (!isoStr) return '';
            try {
                const d = new Date(isoStr);
                if (isNaN(d.getTime())) return '';
                const day = d.getDate().toString().padStart(2, '0');
                const month = (d.getMonth() + 1).toString().padStart(2, '0');
                const year = d.getFullYear();
                const hours = d.getHours().toString().padStart(2, '0');
                const mins = d.getMinutes().toString().padStart(2, '0');
                return `${day}/${month}/${year} ${hours}:${mins}`;
            } catch (e) {
                return '';
            }
        };

        let dateStr = '';
        if (publishDate) {
            dateStr = formatDateString(publishDate);
        } else {
            const today = new Date();
            dateStr = today.getDate().toString().padStart(2, '0') + '/' + (today.getMonth() + 1).toString().padStart(2, '0') + '/' + today.getFullYear() + ' ' + today.getHours().toString().padStart(2, '0') + ':' + today.getMinutes().toString().padStart(2, '0');
        }

        const now = new Date();
        const updatedStr = now.getDate().toString().padStart(2, '0') + '/' + (now.getMonth() + 1).toString().padStart(2, '0') + '/' + now.getFullYear() + ' ' + now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

        window.newsArticlesData[id] = {
            id: id,
            title: title,
            slug: slug,
            sapo: sapo,
            content: content,
            tags: tags,
            category: category,
            categoryPrimary: primaryCat,
            categories: checkedCats,
            channel: channel,
            status: status,
            thumbUrl: thumbUrl,
            thumbAlt: thumbAlt,
            thumbCaption: thumbCaption,
            seoTitle: seoTitle,
            seoDesc: seoDesc,
            featured: featured,
            date: window.newsArticlesData[id] ? window.newsArticlesData[id].date : dateStr,
            updatedAt: updatedStr,
            scheduledTime: scheduledTime,
            type: type,
            categorySub: categorySub,
            lang: lang,
            publishDate: publishDate,
            allowComment: allowComment,
            mediaUrl: mediaUrl,
            seoKeywords: seoKeywords,
            seoRobot: seoRobot,
            bannerId: bannerId,
            appliedPackages: (document.getElementById('art-applied-packages')?.value || '').split(',').filter(Boolean),
            showHome: showHome,
            homeOrder: homeOrder,
            showCat: showCat,
            catOrder: catOrder,
            enableLeadForm: enableLeadForm,
            leadFormId: leadFormId,
            leadFormPos: leadFormPos,
            enableChat: enableChat,
            chatChannel: chatChannel,
            enablePopup: enablePopup,
            popupId: popupId,
            popupFreq: popupFreq,
            views: window.newsArticlesData[id] ? (window.newsArticlesData[id].views || 0) : 0
        };

        window.stopAutoSaveTimer();
        window.closeNewsArticleDrawer();

        window.renderNewsTableHTML();

        if (status === 'Draft') {
            showLdpToast('Đã lưu bài viết ở trạng thái Bản nháp (Draft)!');
        } else if (status === 'Published') {
            showLdpToast('Đã xuất bản bài viết (Published) thành công!');
        } else if (status !== 'Scheduled') {
            showLdpToast('Đã lưu bài viết thành công!');
        }
    };

    window.saveNewsDraftAction = function () {
        window.currentEditingArticleStatus = 'Draft';
        const statusEl = document.getElementById('art-status');
        if (statusEl) statusEl.value = 'Draft';
        window.onArticleStatusChange();
        window.saveNewsArticleAction();
    };

    window.publishNewsArticleAction = function () {
        window.currentEditingArticleStatus = 'Published';
        const statusEl = document.getElementById('art-status');
        if (statusEl) statusEl.value = 'Published';
        window.onArticleStatusChange();
        window.saveNewsArticleAction();
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
        const statusEl = document.getElementById('art-status');
        const status = statusEl ? statusEl.value : (window.currentEditingArticleStatus || 'Published');
        const pubDateEl = document.getElementById('art-publish-date');
        if (status === 'Scheduled' && pubDateEl) {
            const val = pubDateEl.value;
            let needsDefault = !val;
            if (val) {
                const d = new Date(val);
                if (d <= new Date()) needsDefault = true;
            }
            if (needsDefault) {
                const future = new Date(Date.now() + 60 * 60 * 1000);
                const tzoffset = future.getTimezoneOffset() * 60000;
                const localISOTime = (new Date(future.getTime() - tzoffset)).toISOString().slice(0, 16);
                pubDateEl.value = localISOTime;
            }
        }
    };

    window.onScheduleButtonClick = function() {
        const statusEl = document.getElementById('art-status');
        if (statusEl) statusEl.value = 'Scheduled';
        
        const pubDateEl = document.getElementById('art-publish-date');
        if (pubDateEl) {
            const val = pubDateEl.value;
            let needsDefault = !val;
            if (val) {
                const d = new Date(val);
                if (d <= new Date()) needsDefault = true;
            }
            if (needsDefault) {
                const future = new Date(Date.now() + 60 * 60 * 1000);
                const tzoffset = future.getTimezoneOffset() * 60000;
                const localISOTime = (new Date(future.getTime() - tzoffset)).toISOString().slice(0, 16);
                pubDateEl.value = localISOTime;
            }
            pubDateEl.focus();
            
            pubDateEl.style.transition = 'all 0.3s ease';
            pubDateEl.style.borderColor = '#fbbf24';
            pubDateEl.style.boxShadow = '0 0 10px rgba(251, 191, 36, 0.6)';
            setTimeout(() => {
                pubDateEl.style.borderColor = '';
                pubDateEl.style.boxShadow = '';
            }, 3000);
        }
        
        window.onArticleStatusChange();
        showLdpToast('Đã chuyển sang Đặt lịch. Hãy thiết lập Ngày đăng!');
    };

    // Chuyển đổi thiết bị xem trước bài viết (Desktop / Mobile)
    window.setNewsPreviewDevice = function (device) {
        const btnDesk = document.getElementById('prev-device-btn-desktop');
        const btnMob = document.getElementById('prev-device-btn-mobile');
        const containerBox = document.getElementById('news-preview-container-box');
        const bodyLayout = document.getElementById('prev-art-body-layout');
        const tocSidebar = document.getElementById('prev-art-toc-sidebar');

        if (device === 'mobile') {
            if (btnDesk) { btnDesk.style.background = 'transparent'; btnDesk.style.color = 'var(--text-muted)'; }
            if (btnMob) { btnMob.style.background = 'rgba(255,255,255,0.18)'; btnMob.style.color = '#fff'; }
            if (containerBox) {
                containerBox.style.maxWidth = '390px';
                containerBox.style.border = '10px solid #1e293b';
                containerBox.style.borderRadius = '38px';
                containerBox.style.boxShadow = '0 25px 60px -15px rgba(0,0,0,0.85)';
            }
            if (bodyLayout) {
                bodyLayout.style.flexDirection = 'column';
                bodyLayout.style.padding = '18px 14px 30px';
                bodyLayout.style.gap = '20px';
            }
            if (tocSidebar) {
                tocSidebar.style.width = '100%';
                tocSidebar.style.position = 'static';
            }
        } else {
            if (btnDesk) { btnDesk.style.background = 'rgba(255,255,255,0.18)'; btnDesk.style.color = '#fff'; }
            if (btnMob) { btnMob.style.background = 'transparent'; btnMob.style.color = 'var(--text-muted)'; }
            if (containerBox) {
                containerBox.style.maxWidth = '900px';
                containerBox.style.border = 'none';
                containerBox.style.borderRadius = '14px';
                containerBox.style.boxShadow = '0 24px 80px rgba(0,0,0,0.6)';
            }
            if (bodyLayout) {
                bodyLayout.style.flexDirection = 'row';
                bodyLayout.style.padding = '32px 24px 48px';
                bodyLayout.style.gap = '32px';
            }
            if (tocSidebar) {
                tocSidebar.style.width = '220px';
                tocSidebar.style.position = 'sticky';
            }
        }
    };

    // Xem trước bài viết theo ID từ bảng danh sách (Feedback Marketing)
    window.previewNewsArticleById = function (articleId) {
        const art = (window.newsArticlesData && window.newsArticlesData[articleId]) ||
            (typeof newsArticlesData !== 'undefined' ? newsArticlesData[articleId] : null);

        if (!art) {
            showLdpToast('Không tìm thấy dữ liệu bài viết để xem trước!');
            return;
        }

        // Đổ thông tin vào các trường form để hàm preview đồng bộ
        const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
        setVal('article-id', art.id);
        setVal('art-title', art.title);
        setVal('art-slug', art.slug);
        setVal('art-sapo', art.sapo || '');
        setVal('art-content', art.content || '');
        setVal('art-channel', art.channel || 'fpt-telecom');
        setVal('art-category', art.category || 'Tin tức');
        setVal('art-author', art.author || 'Admin');
        setVal('art-thumbnail-url', art.thumbUrl || '');
        setVal('art-thumbnail-alt', art.thumbAlt || '');
        setVal('art-thumbnail-caption', art.thumbCaption || '');

        window.previewNewsArticle();
    };

    // Hàm Preview bài viết chính (Nâng cấp Form Lead, Table, Gallery, Mark Highlight)
    window.previewNewsArticle = function () {
        const title = document.getElementById('art-title')?.value.trim() || 'Tiêu đề bài viết chưa nhập';
        const sapo = document.getElementById('art-sapo')?.value.trim() || 'Sa-po bài viết đang bỏ trống...';
        const content = document.getElementById('art-content')?.value.trim() || 'Nội dung chi tiết bài viết chưa nhập...';
        const channel = document.getElementById('art-channel')?.value || 'fpt-telecom';
        const category = document.getElementById('art-category')?.value || 'Tin tức';
        const author = document.getElementById('art-author')?.value.trim() || 'Admin';
        const thumbUrl = document.getElementById('art-thumbnail-url')?.value || '';
        const thumbAlt = document.getElementById('art-thumbnail-alt')?.value.trim() || '';
        const thumbCaption = document.getElementById('art-thumbnail-caption')?.value.trim() || '';
        const slug = document.getElementById('art-slug')?.value.trim() || 'url-slug';
        const leadFormPos = document.getElementById('art-lead-form-pos')?.value || 'after-content';

        const modal = document.getElementById('news-preview-modal');
        if (modal) modal.style.display = 'flex';

        // Đồng bộ Chrome bar & Breadcrumb
        const slugBar = document.getElementById('preview-slug-bar');
        if (slugBar) slugBar.innerText = slug;
        const titleBc = document.getElementById('prev-art-title-breadcrumb');
        if (titleBc) titleBc.innerText = title;

        document.getElementById('prev-art-title').innerText = title;
        document.getElementById('prev-art-meta').innerText = `Tác giả: ${author} · Chuyên mục: ${category} · Kênh: ${channel}`;
        document.getElementById('prev-art-sapo').innerText = sapo;

        const prevImg = document.getElementById('prev-art-thumb');
        const prevCaption = document.getElementById('prev-art-caption');
        if (prevImg) {
            prevImg.src = thumbUrl || 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=720&q=80';
            prevImg.alt = thumbAlt || title;
        }
        if (prevCaption) {
            prevCaption.innerText = thumbCaption || 'Hình ảnh đại diện bài viết';
        }

        const tocContainer = document.getElementById('prev-art-toc-list');
        if (tocContainer) tocContainer.innerHTML = '';

        const mainContentEl = document.getElementById('prev-art-content-area');
        if (!mainContentEl) return;
        mainContentEl.innerHTML = '';

        // Đính kèm CSS cho Gallery, Table và Mark Highlight trong khung Preview
        let previewCustomCss = `
            <style>
                .article-gallery { margin: 22px 0; }
                .article-gallery .gallery-grid { display: grid; gap: 12px; }
                mark { background-color: #fef08a; color: #1e293b; padding: 2px 4px; border-radius: 3px; font-weight: 600; }
                .preview-table-wrapper { width: 100%; overflow-x: auto; margin: 20px 0; border: 1px solid #e2e8f0; border-radius: 8px; }
                .preview-table-wrapper table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
                .preview-table-wrapper th, .preview-table-wrapper td { padding: 10px 14px; text-align: left; }
                @media (max-width: 640px) {
                    .article-gallery .gallery-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .article-gallery figure img {
                        aspect-ratio: 16/9 !important;
                    }
                }
            </style>
        `;

        // Hàm sinh card HTML Form thu Leads hiển thị trong preview theo formId cụ thể
        const generateLeadFormCardHtml = function (formId) {
            const f = (window.leadFormsData && window.leadFormsData[formId]) 
                ? window.leadFormsData[formId] 
                : (window.leadFormsData ? window.leadFormsData['form-register'] : null);
            
            const title = f ? f.title : 'Đăng ký nhận tư vấn ưu đãi FPT Telecom';
            const desc = f ? f.desc : 'Để lại thông tin để chuyên viên FPT liên hệ khảo sát hạ tầng & tư vấn gói cước phù hợp nhất trong vòng 10 phút!';
            const btnText = f ? f.btnText : 'Gửi yêu cầu tư vấn';
            const btnColor = f ? (f.btnColor || '#ff6b00') : '#ff6b00';
            const tag = f ? f.tag : '#form-register';

            let fieldsHtml = '';
            if (f && f.fields) {
                if (f.fields.length === 2) {
                    fieldsHtml = `
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px;">
                            ${f.fields.map(field => `<input type="${field.type}" placeholder="${field.label}" style="padding:9px 12px; border:1px solid rgba(0,0,0,0.15); border-radius:6px; font-size:13px; background:#fff; outline:none;" readonly value="${field.placeholder}">`).join('')}
                        </div>
                    `;
                } else if (f.fields.length >= 3) {
                    const row1 = f.fields.slice(0, 2);
                    const row2 = f.fields.slice(2);
                    fieldsHtml = `
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:10px;">
                            ${row1.map(field => `<input type="${field.type}" placeholder="${field.label}" style="padding:9px 12px; border:1px solid rgba(0,0,0,0.15); border-radius:6px; font-size:13px; background:#fff; outline:none;" readonly value="${field.placeholder}">`).join('')}
                        </div>
                        <div style="margin-bottom:12px; display:flex; flex-direction:column; gap:8px;">
                            ${row2.map(field => `<input type="${field.type}" placeholder="${field.label}" style="width:100%; box-sizing:border-box; padding:9px 12px; border:1px solid rgba(0,0,0,0.15); border-radius:6px; font-size:13px; background:#fff; outline:none;" readonly value="${field.placeholder}">`).join('')}
                        </div>
                    `;
                }
            } else {
                fieldsHtml = `
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:10px;">
                        <input type="text" placeholder="Họ và tên của bạn *" style="padding:9px 12px; border:1px solid #fed7aa; border-radius:6px; font-size:13px; background:#fff; outline:none;" readonly value="Nguyễn Văn A">
                        <input type="tel" placeholder="Số điện thoại liên hệ *" style="padding:9px 12px; border:1px solid #fed7aa; border-radius:6px; font-size:13px; background:#fff; outline:none;" readonly value="0988 123 456">
                    </div>
                `;
            }

            return `
                <div class="lead-form-preview-card" style="margin:26px 0; background:linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%); border:2px solid ${btnColor}; border-radius:12px; padding:22px 20px; box-shadow:0 8px 24px rgba(0,0,0,0.08); position:relative;">
                    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; flex-wrap:wrap; gap:6px;">
                        <div style="display:flex; align-items:center; gap:8px;">
                            <span style="font-size:22px;">📋</span>
                            <h4 style="margin:0; font-size:16px; font-weight:800; color:#c2410c;">${title}</h4>
                        </div>
                        <code style="font-size:10.5px; background:rgba(0,0,0,0.06); padding:3px 7px; border-radius:4px; color:#9a3412; font-weight:700;">Nhúng: ${tag}</code>
                    </div>
                    <p style="font-size:12.5px; color:#7c2d12; margin:0 0 14px; line-height:1.5;">${desc}</p>
                    ${fieldsHtml}
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
                        <span style="font-size:11px; color:#9a3412;">🔒 Thông tin được bảo mật 100% theo quy chuẩn FPT Telecom</span>
                        <button type="button" style="background:${btnColor}; color:#fff; border:none; padding:10px 22px; border-radius:6px; font-weight:700; font-size:13px; cursor:pointer; box-shadow:0 4px 12px rgba(0,0,0,0.2);">${btnText}</button>
                    </div>
                </div>
            `;
        };

        // Form mặc định nếu bài không chèn shortcode mà chọn theo vị trí ở sidebar
        const defaultSelectedFormId = document.getElementById('art-lead-form-id')?.value || 'form-register';
        const leadFormCardHtml = generateLeadFormCardHtml(defaultSelectedFormId);

        // 1. Trích xuất các block Gallery ra placeholder tạm để tránh bị ngắt dòng thành thẻ <p>
        let processedContent = content;
        const galleryBlocks = [];
        processedContent = processedContent.replace(/<!-- GALLERY_START:[\s\S]*?<!-- GALLERY_END -->/g, (match) => {
            const placeholder = `__GALLERY_BLOCK_${galleryBlocks.length}__`;
            const readerGalleryHtml = match.replace(/<button[^>]*>✏️ Đổi layout[\s\S]*?<\/button>/gi, '');
            galleryBlocks.push(readerGalleryHtml);
            return '\n' + placeholder + '\n';
        });

        // 2. Trích xuất các block Bảng <table> ra placeholder tạm
        const tableBlocks = [];
        processedContent = processedContent.replace(/<table[\s\S]*?<\/table>/gi, (match) => {
            const placeholder = `__TABLE_BLOCK_${tableBlocks.length}__`;
            tableBlocks.push(`<div class="preview-table-wrapper">${match}</div>`);
            return '\n' + placeholder + '\n';
        });

        // 3. Xử lý Shortcode / Tag Form thu Leads (#form-... hoặc [lead_form id="..."]) tại vị trí con trỏ
        let hasInjectedShortcodeForm = false;
        const leadFormBlocks = [];

        // Bắt mã tag dạng #form-register, #form-camera, #form-voucher, #form-enterprise
        processedContent = processedContent.replace(/(?:^|\n|\s)(#(form-[a-zA-Z0-9_-]+))(?:\s|\n|$)/gi, (match, fullTag, formId) => {
            hasInjectedShortcodeForm = true;
            const placeholder = `__LEAD_FORM_BLOCK_${leadFormBlocks.length}__`;
            leadFormBlocks.push(generateLeadFormCardHtml(formId));
            return '\n' + placeholder + '\n';
        });

        // Bắt shortcode [lead_form id="..."]
        processedContent = processedContent.replace(/\[lead_form\s+id="([^"]+)"[^\]]*\]/gi, (match, formId) => {
            hasInjectedShortcodeForm = true;
            const placeholder = `__LEAD_FORM_BLOCK_${leadFormBlocks.length}__`;
            leadFormBlocks.push(generateLeadFormCardHtml(formId));
            return '\n' + placeholder + '\n';
        });

        // Fallback cho cú pháp [lead_form] không có id
        processedContent = processedContent.replace(/\[lead_form\]/gi, () => {
            hasInjectedShortcodeForm = true;
            const placeholder = `__LEAD_FORM_BLOCK_${leadFormBlocks.length}__`;
            leadFormBlocks.push(leadFormCardHtml);
            return '\n' + placeholder + '\n';
        });

        const lines = processedContent.split('\n');
        let tocIndex = 1;
        let paragraphs = [];
        let tocItems = [];

        lines.forEach(line => {
            const trimmed = line.trim();
            if (!trimmed) return;

            if (trimmed.startsWith('__GALLERY_BLOCK_') && trimmed.endsWith('__')) {
                const bIdx = parseInt(trimmed.replace('__GALLERY_BLOCK_', '').replace('__', ''), 10);
                if (galleryBlocks[bIdx] !== undefined) paragraphs.push(galleryBlocks[bIdx]);
            } else if (trimmed.startsWith('__TABLE_BLOCK_') && trimmed.endsWith('__')) {
                const tIdx = parseInt(trimmed.replace('__TABLE_BLOCK_', '').replace('__', ''), 10);
                if (tableBlocks[tIdx] !== undefined) paragraphs.push(tableBlocks[tIdx]);
            } else if (trimmed.startsWith('__LEAD_FORM_BLOCK_') && trimmed.endsWith('__')) {
                const fIdx = parseInt(trimmed.replace('__LEAD_FORM_BLOCK_', '').replace('__', ''), 10);
                if (leadFormBlocks[fIdx] !== undefined) paragraphs.push(leadFormBlocks[fIdx]);
            } else if (trimmed === '__LEAD_FORM_BLOCK__') {
                paragraphs.push(leadFormCardHtml);
            } else if (line.startsWith('## ')) {
                const headingText = line.substring(3).trim();
                const headingId = 'heading-section-' + tocIndex;
                tocItems.push({ id: headingId, index: tocIndex, text: headingText });
                paragraphs.push(`<h3 id="${headingId}" style="color:#0f172a; font-size:17px; margin-top:24px; margin-bottom:10px; border-bottom:1px solid #e2e8f0; padding-bottom:5px; font-weight:700;">${headingText}</h3>`);
                tocIndex++;
            } else if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
                paragraphs.push(`<ul><li style="margin-left:20px; list-style-type:disc; margin-bottom:4px; font-size:14px; color:#334155;">${line.trim().substring(2)}</li></ul>`);
            } else if (line.trim().match(/^\d+\.\s/)) {
                paragraphs.push(`<ol><li style="margin-left:20px; list-style-type:decimal; margin-bottom:4px; font-size:14px; color:#334155;">${line.trim().replace(/^\d+\.\s/, '')}</li></ol>`);
            } else {
                paragraphs.push(`<p style="font-size:14px; color:#334155; line-height:1.75; margin-bottom:14px;">${line}</p>`);
            }
        });

        // 4. Chèn Form Thu Leads theo cấu hình vị trí nếu chưa có shortcode
        if (!hasInjectedShortcodeForm && leadFormPos !== 'none' && leadFormPos !== 'shortcode') {
            const pIndices = [];
            paragraphs.forEach((p, idx) => {
                if (p.startsWith('<p') || p.startsWith('<h3')) pIndices.push(idx);
            });

            if (leadFormPos === 'after-p2' && pIndices.length >= 2) {
                paragraphs.splice(pIndices[1] + 1, 0, leadFormCardHtml);
            } else if (leadFormPos === 'after-p3' && pIndices.length >= 3) {
                paragraphs.splice(pIndices[2] + 1, 0, leadFormCardHtml);
            } else if (leadFormPos === 'in-content-center' && pIndices.length >= 2) {
                const mid = Math.floor(pIndices.length / 2);
                paragraphs.splice(pIndices[mid] + 1, 0, leadFormCardHtml);
            } else {
                // Mặc định hoặc 'after-content'
                paragraphs.push(leadFormCardHtml);
            }
        }

        // Render toàn bộ nội dung
        mainContentEl.innerHTML = previewCustomCss + paragraphs.join('\n');

        // Render Mục lục TOC
        if (tocContainer) {
            tocContainer.innerHTML = '';
            if (tocItems.length > 0) {
                tocItems.forEach(item => {
                    const li = document.createElement('li');
                    li.style.marginBottom = '6px';
                    li.innerHTML = `<a href="#${item.id}" style="color:var(--primary); font-size:12.5px; text-decoration:none;" onclick="document.getElementById('${item.id}').scrollIntoView({behavior:'smooth'}); return false;">${item.index}. ${item.text}</a>`;
                    tocContainer.appendChild(li);
                });
            } else {
                const li = document.createElement('li');
                li.style.color = 'var(--text-muted)';
                li.style.fontSize = '12px';
                li.style.fontStyle = 'italic';
                li.innerText = 'Không phát hiện tiêu đề ## để tạo mục lục.';
                tocContainer.appendChild(li);
            }
        }
    };

    window.closeNewsPreviewModal = function () {
        const modal = document.getElementById('news-preview-modal');
        if (modal) modal.style.display = 'none';
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
            window.initNewsContentTypeDOM();
            if (typeof window.renderArticleTagsDropdown === 'function') window.renderArticleTagsDropdown();

            // Đồng bộ master checkbox
            const masterCb = document.getElementById('news-check-all');
            if (masterCb) {
                masterCb.addEventListener('change', function () {
                    window.toggleSelectAllNews(this);
                });
            }

            // Gắn sự kiện lọc bảng tin tức
            const kwInput = document.getElementById('news-search-keyword');
            if (kwInput) kwInput.addEventListener('input', () => window.renderNewsTableHTML());
            const catSel = document.getElementById('news-search-cat');
            if (catSel) catSel.addEventListener('change', () => window.renderNewsTableHTML());
            const statusSel = document.getElementById('news-search-status');
            if (statusSel) statusSel.addEventListener('change', () => window.renderNewsTableHTML());
            const featSel = document.getElementById('news-search-featured');
            if (featSel) featSel.addEventListener('change', () => window.renderNewsTableHTML());
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
            card.classList.remove('active-total', 'active-pub', 'active-draft', 'active-sched');
        });

        const cards = document.querySelectorAll('.news-stat-card');
        if (cardElement) {
            if (statusValue === '') {
                cardElement.classList.add('active-total');
            } else if (statusValue === 'Published') {
                cardElement.classList.add('active-pub');
            } else if (statusValue === 'Draft') {
                cardElement.classList.add('active-draft');
            } else if (statusValue === 'Scheduled') {
                cardElement.classList.add('active-sched');
            }
        } else {
            // Trường hợp đồng bộ từ dropdown select
            if (statusValue === '') {
                cards[0]?.classList.add('active-total');
            } else if (statusValue === 'Published') {
                cards[1]?.classList.add('active-pub');
            } else if (statusValue === 'Draft') {
                cards[2]?.classList.add('active-draft');
            } else if (statusValue === 'Scheduled') {
                cards[3]?.classList.add('active-sched');
            }
        }

        window.renderNewsTableHTML();
    };

    window.syncNewsCardFilterFromSelect = function (statusValue) {
        window.selectNewsStatusFilter(statusValue, null);
    };

    // =========================================================================
    //                    PHÂN HỆ QUẢN LÝ CMS BANNER ĐỘNG
    // =========================================================================
    
    window.cmsBannersData = {
        '001': {
            id: '001',
            name: 'Banner Hero Trang Chủ T5',
            desktopUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
            mobileUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=400&q=80',
            redirectUrl: '/khuyen-mai-thang-5',
            target: '_self',
            pages: ['Trang chủ'],
            order: 1,
            startDate: '2026-05-01T00:00',
            endDate: '2026-05-31T23:59',
            status: 'Active',
            createdDate: '2026-05-01T10:12'
        },
        '002': {
            id: '002',
            name: 'Banner Khuyến Mãi Hè FPT Play',
            desktopUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
            mobileUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=400&q=80',
            redirectUrl: '/fpt-play-goi-cuoc',
            target: '_blank',
            pages: ['Khuyến mãi'],
            order: 2,
            startDate: '2026-06-01T00:00',
            endDate: '2026-08-31T23:59',
            status: 'Active',
            createdDate: '2026-06-01T08:03'
        }
    };

    // Render Bảng Banner chính
    window.renderCmsBannersTable = function (data = window.cmsBannersData) {
        const tbody = document.querySelector('#cms-banner-table tbody');
        if (!tbody) return;
        tbody.innerHTML = '';

        const searchKw = (document.getElementById('search-banner-name')?.value || '').toLowerCase().trim();
        const statusVal = document.getElementById('search-banner-status')?.value || '';

        const formatDateString = function (isoStr, includeTime = false) {
            if (!isoStr) return '—';
            try {
                const d = new Date(isoStr);
                if (isNaN(d.getTime())) return isoStr;
                const day = d.getDate().toString().padStart(2, '0');
                const month = (d.getMonth() + 1).toString().padStart(2, '0');
                const year = d.getFullYear();
                if (includeTime) {
                    const hours = d.getHours().toString().padStart(2, '0');
                    const mins = d.getMinutes().toString().padStart(2, '0');
                    return `${day}/${month}/${year} ${hours}:${mins}`;
                }
                return `${day}/${month}/${year}`;
            } catch (e) {
                return isoStr;
            }
        };

        let rowIndex = 1;
        for (let id in data) {
            const banner = data[id];

            if (searchKw && !banner.id.includes(searchKw) && !banner.name.toLowerCase().includes(searchKw)) {
                continue;
            }
            if (statusVal && banner.status !== statusVal) {
                continue;
            }

            const tr = document.createElement('tr');
            tr.setAttribute('data-id', banner.id);

            let statusBadge = '';
            if (banner.status === 'Active') {
                statusBadge = '<span class="badge active" style="background:rgba(16,185,129,0.15); color:var(--success); padding:3px 8px; border-radius:12px; font-size:12px;">Active</span>';
            } else if (banner.status === 'Inactive') {
                statusBadge = '<span class="badge" style="background:rgba(239,68,68,0.15); color:var(--danger); padding:3px 8px; border-radius:12px; font-size:12px;">Tạm ngưng</span>';
            } else if (banner.status === 'Expired') {
                statusBadge = '<span class="badge warning" style="background:rgba(245,158,11,0.15); color:var(--warning); padding:3px 8px; border-radius:12px; font-size:12px;">Hết hạn</span>';
            }

            const startStr = formatDateString(banner.startDate);
            const endStr = formatDateString(banner.endDate);
            const createdStr = formatDateString(banner.createdDate, true);

            tr.innerHTML = `
                <td style="text-align:center; font-weight:bold; color:var(--text-muted); font-size:13px;">${rowIndex++}</td>
                <td style="text-align:center; font-weight:bold; color:var(--primary); font-size:13px;">${banner.id}</td>
                <td>
                    <img src="${banner.desktopUrl}" style="width:80px; height:45px; border-radius:4px; object-fit:cover; border:1px solid var(--border-glass);">
                </td>
                <td>
                    <strong style="color:#fff;">${banner.name}</strong>
                </td>
                <td>
                    <span style="font-size:11px; color:#60a5fa; word-break:break-all;">${banner.redirectUrl || '—'}</span>
                </td>
                <td>
                    <span class="badge" style="background:rgba(168,85,247,0.15); color:#c084fc; font-size:11px; padding:2px 6px;">${banner.target || '_self'}</span>
                </td>
                <td><span style="font-size:12px; color:#fff;">${startStr}</span></td>
                <td><span style="font-size:12px; color:var(--text-muted);">${endStr}</span></td>
                <td style="text-align:center; font-weight:600; color:#fbbf24;">${banner.order || 0}</td>
                <td>${banner.pages.map(p => `<span class="badge" style="background:rgba(255,255,255,0.08); font-size:11px; margin-right:3px;">${p}</span>`).join('')}</td>
                <td style="text-align:center;">${statusBadge}</td>
                <td style="font-size:11px; color:var(--text-muted); white-space:nowrap;">${createdStr}</td>
                <td style="text-align:right; white-space:nowrap;">
                    <div style="display:inline-flex; gap:6px; justify-content:flex-end;">
                        <button class="btn btn-secondary btn-sm" style="color:var(--primary); border-color:var(--primary); margin:0;" onclick="window.editCmsBanner('${banner.id}')">Sửa</button>
                        <button class="btn btn-secondary btn-sm" style="color:var(--danger); border-color:var(--danger); margin:0;" onclick="window.deleteCmsBanner('${banner.id}')">Xóa</button>
                    </div>
                </td>
            `;
            tbody.appendChild(tr);
        }
    };

    window.filterCmsBannersTable = function () {
        window.renderCmsBannersTable();
    };

    window.openCreateCmsBannerForm = function () {
        document.getElementById('banner-form-title').innerText = 'Tạo Banner mới';
        
        // Phát sinh ID tự động (max ID + 1)
        let maxId = 0;
        for (let id in window.cmsBannersData) {
            let num = parseInt(id, 10);
            if (!isNaN(num) && num > maxId) maxId = num;
        }
        let nextId = (maxId + 1).toString().padStart(3, '0');
        
        const idInput = document.getElementById('banner-id-input');
        if (idInput) {
            idInput.value = nextId;
            idInput.removeAttribute('readonly');
            idInput.style.background = 'transparent';
            idInput.style.color = '#fff';
        }
        document.getElementById('banner-name-input').value = '';
        document.getElementById('banner-order-input').value = '1';
        document.getElementById('banner-desktop-url').value = '';
        document.getElementById('banner-mobile-url').value = '';
        document.getElementById('banner-redirect-url').value = '';
        document.getElementById('banner-target').value = '_self';
        document.getElementById('banner-status-input').value = 'Active';
        document.getElementById('banner-start-date').value = '';
        document.getElementById('banner-end-date').value = '';
        
        // Reset preview
        document.getElementById('banner-desktop-preview').style.display = 'none';
        document.getElementById('banner-desktop-no-img').style.display = 'block';
        document.getElementById('banner-mobile-preview').style.display = 'none';
        document.getElementById('banner-mobile-no-img').style.display = 'block';

        // Reset multiselect
        const pagesSelect = document.getElementById('banner-pages');
        if (pagesSelect) {
            for (let i = 0; i < pagesSelect.options.length; i++) {
                pagesSelect.options[i].selected = (i === 0);
            }
        }

        document.getElementById('banner-list').style.display = 'none';
        document.getElementById('banner-form').style.display = 'block';
    };

    window.closeCmsBannerForm = function () {
        document.getElementById('banner-form').style.display = 'none';
        document.getElementById('banner-list').style.display = 'block';
    };

    window.updateBannerFormPreview = function (type) {
        const urlInput = document.getElementById(`banner-${type}-url`);
        const imgPreview = document.getElementById(`banner-${type}-preview`);
        const noImgSpan = document.getElementById(`banner-${type}-no-img`);
        if (urlInput && imgPreview && noImgSpan) {
            const url = urlInput.value.trim();
            if (url) {
                imgPreview.src = url;
                imgPreview.style.display = 'block';
                noImgSpan.style.display = 'none';
            } else {
                imgPreview.src = '';
                imgPreview.style.display = 'none';
                noImgSpan.style.display = 'block';
            }
        }
    };

    window.editCmsBanner = function (id) {
        const banner = window.cmsBannersData[id];
        if (!banner) return;

        document.getElementById('banner-form-title').innerText = 'Chỉnh sửa Banner #' + id;
        
        const idInput = document.getElementById('banner-id-input');
        if (idInput) {
            idInput.value = banner.id;
            idInput.setAttribute('readonly', 'true');
            idInput.style.background = 'rgba(255,255,255,0.04)';
            idInput.style.color = '#aaa';
        }
        document.getElementById('banner-name-input').value = banner.name;
        document.getElementById('banner-order-input').value = banner.order || 1;
        document.getElementById('banner-desktop-url').value = banner.desktopUrl;
        document.getElementById('banner-mobile-url').value = banner.mobileUrl;
        document.getElementById('banner-redirect-url').value = banner.redirectUrl || '';
        document.getElementById('banner-target').value = banner.target || '_self';
        document.getElementById('banner-status-input').value = banner.status || 'Active';
        document.getElementById('banner-start-date').value = banner.startDate || '';
        document.getElementById('banner-end-date').value = banner.endDate || '';

        const pagesSelect = document.getElementById('banner-pages');
        if (pagesSelect) {
            for (let i = 0; i < pagesSelect.options.length; i++) {
                pagesSelect.options[i].selected = banner.pages.includes(pagesSelect.options[i].value);
            }
        }

        window.updateBannerFormPreview('desktop');
        window.updateBannerFormPreview('mobile');

        document.getElementById('banner-list').style.display = 'none';
        document.getElementById('banner-form').style.display = 'block';
    };

    window.saveCmsBannerAction = function () {
        const id = document.getElementById('banner-id-input').value.trim();
        const name = document.getElementById('banner-name-input').value.trim();
        const order = parseInt(document.getElementById('banner-order-input').value, 10) || 1;
        const desktopUrl = document.getElementById('banner-desktop-url').value.trim();
        const mobileUrl = document.getElementById('banner-mobile-url').value.trim();
        const redirectUrl = document.getElementById('banner-redirect-url').value.trim();
        const target = document.getElementById('banner-target').value;
        const status = document.getElementById('banner-status-input').value;
        const startDate = document.getElementById('banner-start-date').value;
        const endDate = document.getElementById('banner-end-date').value;

        if (!id) {
            alert('Vui lòng nhập Mã ID cho Banner!');
            return;
        }

        const isCreateMode = document.getElementById('banner-form-title').innerText.includes('Tạo Banner mới');
        if (isCreateMode && window.cmsBannersData[id]) {
            alert(`Mã ID "${id}" đã tồn tại trong hệ thống. Vui lòng nhập Mã ID khác hoặc sử dụng ID tự sinh!`);
            return;
        }

        if (!name || !desktopUrl || !mobileUrl) {
            alert('Vui lòng điền các trường bắt buộc (Tên, Ảnh Desktop, Ảnh Mobile)!');
            return;
        }

        const pagesSelect = document.getElementById('banner-pages');
        const pages = [];
        if (pagesSelect) {
            for (let i = 0; i < pagesSelect.options.length; i++) {
                if (pagesSelect.options[i].selected) pages.push(pagesSelect.options[i].value);
            }
        }

        if (pages.length === 0) {
            alert('Vui lòng chọn ít nhất một Trang áp dụng!');
            return;
        }

        const isNew = !window.cmsBannersData[id];
        const existingBanner = window.cmsBannersData[id];
        const createdDate = existingBanner && existingBanner.createdDate
            ? existingBanner.createdDate
            : new Date().toISOString();

        window.cmsBannersData[id] = {
            id, name, order, desktopUrl, mobileUrl, redirectUrl, target, status, startDate, endDate, pages, createdDate
        };

        window.renderCmsBannersTable();
        window.closeCmsBannerForm();
        showLdpToast(isNew ? 'Đã tạo Banner thành công!' : 'Đã cập nhật Banner thành công!');

        // Cascade Update: Đồng bộ hóa ảnh đại diện của bài viết liên kết Banner này
        if (!isNew) {
            window.syncBannerImagesToArticles(id);
        }
    };

    window.deleteCmsBanner = function (id) {
        if (confirm(`Bạn có chắc chắn muốn xóa Banner ID "${id}" không?`)) {
            // Cascade update in articles: Hủy liên kết
            let unlinkCount = 0;
            for (let artId in window.newsArticlesData) {
                if (window.newsArticlesData[artId].bannerId === id) {
                    window.newsArticlesData[artId].bannerId = '';
                    unlinkCount++;
                }
            }
            delete window.cmsBannersData[id];
            window.renderCmsBannersTable();
            showLdpToast('Đã xóa Banner thành công!');
            
            if (unlinkCount > 0) {
                window.renderNewsTableHTML();
                showLdpToast(`Đã tự động gỡ liên kết Banner ID ${id} khỏi ${unlinkCount} bài viết!`);
            }
        }
    };

    // =========================================================================
    //                        BANNER PICKER MODAL LOGIC
    // =========================================================================
    window.openBannerPickerModal = function () {
        document.getElementById('banner-picker-modal').style.display = 'flex';
        window.renderPickerBannersTable();
    };

    window.closeBannerPickerModal = function () {
        document.getElementById('banner-picker-modal').style.display = 'none';
    };

    window.renderPickerBannersTable = function () {
        const tbody = document.getElementById('picker-banner-tbody');
        if (!tbody) return;
        tbody.innerHTML = '';

        const searchKw = (document.getElementById('search-picker-banner-name')?.value || '').toLowerCase().trim();

        for (let id in window.cmsBannersData) {
            const banner = window.cmsBannersData[id];
            if (banner.status !== 'Active') continue; // Chỉ cho phép chọn banner đang hoạt động

            if (searchKw && !banner.id.includes(searchKw) && !banner.name.toLowerCase().includes(searchKw)) {
                continue;
            }

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td style="text-align:center; font-weight:bold; color:var(--primary);">${banner.id}</td>
                <td>
                    <img src="${banner.desktopUrl}" style="width:60px; height:30px; border-radius:3px; object-fit:cover; border:1px solid var(--border-glass);">
                </td>
                <td><strong style="color:#fff;">${banner.name}</strong></td>
                <td>${banner.pages.map(p => `<span class="badge" style="background:rgba(255,255,255,0.08); font-size:10px; padding:2px 4px; margin-right:2px;">${p}</span>`).join('')}</td>
                <td style="text-align:center;"><span class="badge active" style="font-size:11px; padding:2px 6px;">Active</span></td>
                <td style="text-align:center;">
                    <button type="button" class="btn btn-primary btn-sm" style="margin:0; padding:4px 10px; font-size:11px;" onclick="window.selectBannerForArticle('${banner.id}')">Chọn</button>
                </td>
            `;
            tbody.appendChild(tr);
        }
    };

    window.filterPickerBannersTable = function () {
        window.renderPickerBannersTable();
    };

    window.selectBannerForArticle = function (bannerId) {
        const banner = window.cmsBannersData[bannerId];
        if (!banner) return;

        document.getElementById('art-banner-id').value = bannerId;
        document.getElementById('art-banner-selected-info').innerText = `ID: ${banner.id} - ${banner.name}`;
        
        const previewImg = document.getElementById('art-banner-selected-preview');
        if (previewImg) previewImg.src = banner.desktopUrl;
        
        document.getElementById('art-banner-preview-box').style.display = 'block';
        document.getElementById('art-banner-no-link').style.display = 'none';

        // Tự động điền link ảnh banner vào ảnh đại diện của bài viết để đồng bộ trực quan
        document.getElementById('art-thumbnail-url').value = banner.desktopUrl;
        
        const previewThumb = document.getElementById('art-thumb-preview');
        if (previewThumb) previewThumb.src = banner.desktopUrl;
        
        const filenameSpan = document.getElementById('art-thumb-filename');
        if (filenameSpan) filenameSpan.innerText = banner.desktopUrl.substring(banner.desktopUrl.lastIndexOf('/') + 1);

        window.closeBannerPickerModal();
        showLdpToast(`Đã liên kết với Banner ID: ${bannerId}`);
    };

    window.removeLinkedBanner = function () {
        document.getElementById('art-banner-id').value = '';
        document.getElementById('art-banner-preview-box').style.display = 'none';
        document.getElementById('art-banner-no-link').style.display = 'block';
        showLdpToast('Đã hủy liên kết Banner');
    };

    window.syncBannerImagesToArticles = function (bannerId) {
        const banner = window.cmsBannersData[bannerId];
        if (!banner) return;
        
        let count = 0;
        for (let artId in window.newsArticlesData) {
            const art = window.newsArticlesData[artId];
            if (art.bannerId === bannerId) {
                art.thumbUrl = banner.desktopUrl; // đồng bộ ảnh đại diện
                count++;
            }
        }
        if (count > 0) {
            window.renderNewsTableHTML();
            showLdpToast(`Cascade: Tự động cập nhật ảnh cho ${count} bài viết liên kết Banner ${bannerId}!`);
        }
    };
    
    // Tự động render bảng banner khi tải xong trang
    setTimeout(() => {
        window.renderCmsBannersTable();
    }, 100);
    
    // Đảm bảo chạy interval đặt lịch
    if (!window.newsScheduleInterval) {
        window.newsScheduleInterval = setInterval(function () {
            const now = new Date();
            let hasChanged = false;
            let publishedTitles = [];
            
            for (let id in window.newsArticlesData) {
                const art = window.newsArticlesData[id];
                if (art.status === 'Scheduled' && art.publishDate) {
                    const pubDate = new Date(art.publishDate);
                    if (pubDate <= now) {
                        art.status = 'Published';
                        // Cập nhật lại ngày hiển thị sang giờ xuất bản hiện tại
                        const day = now.getDate().toString().padStart(2, '0');
                        const month = (now.getMonth() + 1).toString().padStart(2, '0');
                        const year = now.getFullYear();
                        const hours = now.getHours().toString().padStart(2, '0');
                        const mins = now.getMinutes().toString().padStart(2, '0');
                        art.date = `${day}/${month}/${year} ${hours}:${mins}`;
                        
                        hasChanged = true;
                        publishedTitles.push(art.title);
                    }
                }
            }
            
            if (hasChanged) {
                if (typeof window.renderNewsTableHTML === 'function') {
                    window.renderNewsTableHTML();
                }
                if (typeof window.updateNewsStats === 'function') {
                    window.updateNewsStats();
                }
                publishedTitles.forEach(title => {
                    showLdpToast(`⏰ Hệ thống: Tự động xuất bản bài viết "${title}" thành công theo lịch hẹn!`);
                });
            }
        }, 5000);
    }

    // Khởi tạo hiển thị danh sách gói bán áp dụng
    setTimeout(function () {
        if (typeof window.renderPkgList === 'function') {
            window.renderPkgList();
        }
    }, 300);
})();
