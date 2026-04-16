// ========================================
// Khởi tạo icon Lucide
// ========================================
lucide.createIcons();

// ========================================
// Toggle Theme (Sáng / Tối)
// ========================================
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ========================================
// Scroll Progress Bar + Navbar
// ========================================
window.addEventListener('scroll', () => {
    // Progress bar
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById("myBar");
    if (progressBar) {
        progressBar.style.width = scrolled + "%";
    }

    // Navbar khi scroll
    const navbar = document.getElementById('navbar');
    if (winScroll > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ========================================
// Active Link Navbar theo Section
// ========================================
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// ========================================
// Scroll Reveal Animation (IntersectionObserver)
// ========================================
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// ========================================
// TIMELINE - Dữ liệu nội dung (Popup)
// ========================================
const timelineData = {
    1: {
        date: "Trước 1911",
        title: "Hình thành tư tưởng yêu nước",
        icon: "compass",
        content: `
            <img src="images/timeline_1.png" alt="Phong cảnh làng quê Việt Nam gợi nhớ quê hương Làng Sen" class="modal-img" loading="lazy">
            <div class="modal-section">
                <h3><i data-lucide="map-pin"></i> Bối cảnh lịch sử quê hương</h3>
                <p>Nguyễn Sinh Cung sinh ngày 19/5/1890 tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An. Đây là vùng đất "địa linh nhân kiệt", cái nôi của các phong trào khởi nghĩa và chống Pháp mãnh liệt nhất của cả nước.</p>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="book-open"></i> Ảnh hưởng từ gia đình & Giáo dục</h3>
                <ul>
                    <li><strong>Từ người cha:</strong> Cụ Phó bảng Nguyễn Sinh Sắc truyền cho Người lòng yêu nước thương dân sâu sắc. Quan điểm "Quan trường là nô lệ trong những người nô lệ" của cụ đã ảnh hưởng lớn đến quyết tâm dứt khoát không bước vào con đường quan lộ của Nguyễn Sinh Cung.</li>
                    <li><strong>Từ người mẹ:</strong> Bà Hoàng Thị Loan là hiện thân của sự hy sinh, tần tảo, chịu thương chịu khó. Từ đó Người học được lòng nhân ái, vị tha và yêu thương con người.</li>
                    <li><strong>Giáo dục đa dạng:</strong> Được tiếp thu Nho giáo truyền thống, đồng thời học Quốc ngữ và chữ Pháp tại Quốc học Huế, giúp Người có tư duy cởi mở, không bị bó buộc bởi lễ giáo phong kiến hủ lậu.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="flame"></i> Sự trăn trở trước thất bại của các bậc tiền bối</h3>
                <ul>
                    <li>Người rất khâm phục lòng yêu nước của Phan Bội Châu (phong trào Đông Du), Phan Châu Trinh (phong trào Duy Tân) hay Hoàng Hoa Thám (khởi nghĩa Yên Thế).</li>
                    <li>Tuy nhiên, Người sớm nhận ra các con đường đó đều bế tắc: Dựa vào Nhật để đánh Pháp chẳng khác nào "Đưa hổ cửa trước, rước beo cửa sau"; Cầu xin Pháp cải cách chẳng khác nào "Xin giặc rủ lòng thương".</li>
                </ul>
            </div>
            <div class="modal-highlight">
                <p><strong>Bước ngoặt tư tưởng:</strong> Hình thành hoài bão cứu nước với tư duy độc lập mãnh liệt - quyết tâm đi sang phương Tây, đến chính nước Pháp để tìm hiểu xem họ làm thế nào, sau đó về giúp đồng bào.</p>
            </div>
        `
    },
    2: {
        date: "1911 - 1920",
        title: "Tìm thấy con đường cứu nước",
        icon: "ship",
        content: `
            <img src="images/timeline_2.png" alt="Con tàu ra khơi tượng trưng cho hành trình tìm đường cứu nước" class="modal-img" loading="lazy">
            <div class="modal-section">
                <h3><i data-lucide="ship"></i> Khởi xướng hành trình vĩ đại</h3>
                <p>Ngày 5/6/1911, dưới cái tên Văn Ba, Người ra đi tìm đường cứu nước từ bến cảng Nhà Rồng (Sài Gòn). Hành trang duy nhất là hai bàn tay trắng, ý chí nghị lực phi thường và một lòng yêu nước nồng nàn.</p>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="globe"></i> Khảo nghiệm thực tiễn toàn cầu (1911–1917)</h3>
                <ul>
                    <li>Không giống ai, Người đi đến nhiều quốc gia ở cả châu Á, châu Phi, châu Mỹ, châu Âu. Trực tiếp lao động miệt mài: phụ bếp, cào tuyết, nung lò...</li>
                    <li>Người nhận ra: "Ở đâu bọn đế quốc, thực dân cũng tàn bạo, độc ác. Ở đâu những người lao động cũng bị bóc lột, áp bức nặng nề". Đây là sự nhận thức vượt thời đại về sự tương đồng trong thân phận của giai cấp vô sản trên toàn thế giới.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="sparkles"></i> Ánh sáng của thời đại mới (1920)</h3>
                <ul>
                    <li>Tháng 7/1920, đọc bản <em>"Sơ thảo lần thứ nhất những Luận cương về vấn đề dân tộc và vấn đề thuộc địa"</em> của Lênin. Cuốn sách đã giải đáp hoàn toàn những câu hỏi nung nấu của Người suốt 10 năm qua.</li>
                    <li>Tháng 12/1920, tại Đại hội Tours, Người bỏ phiếu tán thành gia nhập Quốc tế III, trở thành một trong những người sáng lập Đảng Cộng sản Pháp và là người Cộng sản Việt Nam đầu tiên.</li>
                </ul>
            </div>
            <div class="modal-highlight">
                <p><strong>Giá trị vĩ đại:</strong> Vượt qua những rào cản hạn chế của lịch sử, Người đã gắn kết cách mạng giải phóng dân tộc Việt Nam với xu thế của thời đại — cách mạng vô sản.</p>
            </div>
        `
    },
    3: {
        date: "1921 - 1930",
        title: "Hình thành cơ bản tư tưởng",
        icon: "book-open",
        content: `
            <img src="images/timeline_3.png" alt="Khung cảnh Paris - Nơi Nguyễn Ái Quốc hoạt động cách mạng" class="modal-img" loading="lazy">
            <div class="modal-section">
                <h3><i data-lucide="pen-tool"></i> Truyền bá ánh sáng cách mạng (1921–1924)</h3>
                <ul>
                    <li>Thành lập "Hội liên hiệp thuộc địa" ở Paris, chủ bút báo <em>"Le Paria" (Người cùng khổ)</em> — phương tiện sắc bén tố cáo tội ác thực dân, thức tỉnh các dân tộc bị áp bức.</li>
                    <li>Tác phẩm <em>"Bản án chế độ thực dân Pháp"</em> (1925) ra đời, giáng một đòn mạnh mẽ vào sào huyệt của chủ nghĩa đế quốc bằng ngôn từ khoa học và hiện thực sâu sắc.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="users"></i> Tổ chức lực lượng tiên phong (1925–1929)</h3>
                <ul>
                    <li>Tại Quảng Châu (Trung Quốc), Người thành lập <strong>Hội Việt Nam Cách mạng Thanh niên</strong> — tổ chức quá độ để chuẩn bị cho sự ra đời của Đảng Cộng sản.</li>
                    <li>Xuất bản <em>"Đường Kách mệnh"</em> (1927), phác thảo rõ nét con đường, phương pháp cách mạng, đạo đức cách mạng... và đặc biệt khẳng định vai trò lãnh đạo tuyệt đối của một Đảng cách mạng.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="flag"></i> Mùa xuân của dân tộc (1930)</h3>
                <ul>
                    <li>Cuối 1929, ở VN xuất hiện 3 tổ chức cộng sản cạnh tranh nhau ảnh hưởng. Nguyễn Ái Quốc với uy tín tuyệt đối đã triệu tập Hội nghị thống nhất thành lập <strong>Đảng Cộng sản Việt Nam</strong> (3/2/1930).</li>
                    <li>Thông qua <em>Chính cương vắn tắt, Sách lược vắn tắt</em>: xác lập rõ ràng và đúng đắn đường lối giương cao ngọn cờ giải phóng dân tộc lên trên hết.</li>
                </ul>
            </div>
            <div class="modal-highlight">
                <p><strong>Hoàn thiện:</strong> Sự ra đời của Đảng cùng bộ "Cương lĩnh chính trị đầu tiên" đánh dấu sự hình thành cơ bản và định hình vững chắc của học thuyết Cách mạng Việt Nam mang tên: Tư tưởng Hồ Chí Minh.</p>
            </div>
        `
    },
    4: {
        date: "1930 - 1945",
        title: "Vượt qua thử thách, vươn tới thành công",
        icon: "flag-triangle-right",
        content: `
            <img src="images/timeline_4.png" alt="Rừng núi vĩ đại gợi nhớ căn cứ địa Việt Bắc, hang Pác Bó" class="modal-img" loading="lazy">
            <div class="modal-section">
                <h3><i data-lucide="alert-triangle"></i> Sóng gió và thử thách (1930–1939)</h3>
                <ul>
                    <li>Do tư tưởng thiên tả của Quốc tế Cộng sản thời bấy giờ (chỉ ưu tiên đấu tranh giai cấp), một bộ phận không nhỏ chưa thấy sự vĩ đại và đúng đắn trong việc Người đặt "giải phóng dân tộc" lên hàng đầu.</li>
                    <li>Tuy nhiên, Người giữ vững nguyên tắc, kiên trì thuyết phục đấu tranh, tuyệt đối không hoang mang hay xa rời mục tiêu giành độc lập cho Tổ quốc.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="home"></i> Hang Pác Bó nhen nhóm lửa thiêng (1941)</h3>
                <ul>
                    <li>Mùa xuân 1941, sau 30 năm dài xa cách, Bác trở về Tổ quốc thân yêu, trực tiếp dẫn dắt phong trào đấu tranh tại Cao Bằng.</li>
                    <li>Sáng lập <strong>Mặt trận Việt Minh</strong>, phát động các phong trào đánh Pháp, đuổi Nhật, đặt nền móng cho lực lượng vũ trang nhân dân và các khu giải phóng rộng lớn.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="star"></i> Khởi nghĩa Tháng Tám năm 1945</h3>
                <ul>
                    <li>Chớp đúng thời cơ "Ngàn năm có một" lúc Đồng minh chiến thắng phát xít, Người chỉ thị: <em>"Dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập"</em>.</li>
                    <li>Ngày 2/9/1945, Bác đọc <em>Tuyên ngôn Độc lập</em>, đập tan xiềng xích nô lệ hàng thế kỷ, chính thức ra mắt nước Việt Nam Dân chủ Cộng hòa.</li>
                </ul>
            </div>
            <div class="modal-highlight">
                <p><strong>Chiến thắng rực rỡ:</strong> Thắng lợi vĩ đại của Cách mạng Tháng Tám chứng minh chân lý sáng ngời và sức mạnh vô địch của tư tưởng Hồ Chí Minh trong thực tiễn vô cùng khốc liệt.</p>
            </div>
        `
    },
    5: {
        date: "1945 - 1969",
        title: "Phát triển và hoàn thiện đỉnh cao",
        icon: "gem",
        content: `
            <img src="images/timeline_5.png" alt="Hình ảnh Việt Nam hòa bình, xây dựng đất nước" class="modal-img" loading="lazy">
            <div class="modal-section">
                <h3><i data-lucide="award"></i> Vừa kháng chiến, vừa kiến quốc (1945–1954)</h3>
                <ul>
                    <li>Bác lãnh đạo nhân dân dẹp thù trong, giặc ngoài, đẩy lùi "Giặc đói, giặc dốt". Kêu gọi Toàn quốc kháng chiến chống thực dân Pháp.</li>
                    <li>Hình thành và phát triển xuất sắc lý luận về chiến tranh nhân dân, kháng chiến "toàn dân, toàn diện, trường kỳ và tự lực cánh sinh", đỉnh cao là đại thắng Điện Biên Phủ "Lừng lẫy năm châu".</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="hammer"></i> Xây dựng Miền Bắc, Giải phóng Miền Nam (1954–1969)</h3>
                <ul>
                    <li>Xác định đồng thời thực hiện 2 nhiệm vụ chiến lược: Xây dựng CNXH ở miền Bắc và đấu tranh giải phóng miền Nam, thống nhất Tổ quốc.</li>
                    <li>Người căn dặn: CNXH là để "dân giàu, nước mạnh, mọi người được no ấm, tự do, hạnh phúc". Liên tục hoàn thiện hệ thống tư tưởng về văn hóa, đạo đức, con người mới.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="scroll"></i> Đóa sen thơm ngát dâng đời (1969)</h3>
                <ul>
                    <li>Năm 1969, Bác ra đi, để lại bản Di chúc thiêng liêng — một văn kiện lịch sử đúc kết toàn bộ tinh hoa tư tưởng, đạo đức, lối sống của một vị Cha già dân tộc.</li>
                    <li>Trong Di chúc, điều bận tâm nhất của Người vẫn là xây dựng khối đại đoàn kết, chăm lo cho đời sống nhân dân và khát vọng về một Việt Nam "đàng hoàng hơn, to đẹp hơn".</li>
                </ul>
            </div>
            <div class="modal-highlight">
                <p><strong>Kết luận:</strong> Giai đoạn này, tư tưởng Hồ Chí Minh không những được khẳng định mà còn được mở rộng thành một hệ thống lý luận hoàn chỉnh, trở thành nền tảng tư tưởng vĩnh cửu của chế độ ta.</p>
            </div>
        `
    }
};

// ========================================
// CHAPTER MODAL - Dữ liệu nội dung
// ========================================
const chapterData = {
    1: {
        icon: 'search',
        title: 'Khái niệm, đối tượng, phương pháp nghiên cứu',
        content: `
            <img src="images/chapter_1.png" alt="Khái niệm và phương pháp nghiên cứu" class="modal-img" loading="lazy">
            <div class="modal-section">
                <h3><i data-lucide="book-open"></i> Khái niệm Tư tưởng Hồ Chí Minh</h3>
                <p>Tư tưởng Hồ Chí Minh là <strong>một hệ thống quan điểm toàn diện và sâu sắc</strong> về những vấn đề cơ bản của cách mạng Việt Nam, từ cách mạng dân tộc dân chủ nhân dân đến cách mạng xã hội chủ nghĩa.</p>
                <p>Là kết quả của sự vận dụng sáng tạo và phát triển chủ nghĩa Mác - Lênin vào điều kiện cụ thể của Việt Nam, đồng thời kế thừa và phát triển các giá trị truyền thống tốt đẹp của dân tộc, tiếp thu tinh hoa văn hóa nhân loại.</p>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="crosshair"></i> Đối tượng nghiên cứu</h3>
                <ul>
                    <li><strong>Hệ thống quan điểm, lý luận</strong> của Hồ Chí Minh về cách mạng Việt Nam trong các tác phẩm, bài viết, bài nói, chỉ thị, nghị quyết...</li>
                    <li><strong>Quá trình vận động, phát triển</strong> của tư tưởng Hồ Chí Minh qua các thời kỳ lịch sử.</li>
                    <li><strong>Giá trị thực tiễn</strong> của tư tưởng Hồ Chí Minh đối với cách mạng Việt Nam và thế giới.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="wrench"></i> Phương pháp nghiên cứu</h3>
                <ul>
                    <li><strong>Phương pháp luận:</strong> Dựa trên cơ sở thế giới quan, phương pháp luận duy vật biện chứng của chủ nghĩa Mác - Lênin.</li>
                    <li><strong>Phương pháp lịch sử - logic:</strong> Nghiên cứu sự hình thành, phát triển tư tưởng theo trình tự thời gian, gắn với bối cảnh lịch sử cụ thể.</li>
                    <li><strong>Phương pháp liên ngành:</strong> Kết hợp chính trị học, sử học, văn hóa học, triết học... để hiểu toàn diện.</li>
                    <li><strong>Phương pháp phân tích - tổng hợp:</strong> Phân tích từng luận điểm cụ thể, sau đó tổng hợp thành hệ thống hoàn chỉnh.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="graduation-cap"></i> Ý nghĩa học tập đối với sinh viên</h3>
                <div class="modal-highlight">
                    <p>"Học tập tư tưởng Hồ Chí Minh giúp sinh viên nâng cao năng lực tư duy lý luận, bồi dưỡng phẩm chất đạo đức cách mạng, xây dựng niềm tin khoa học vào sự nghiệp đổi mới do Đảng lãnh đạo."</p>
                </div>
            </div>
        `
    },
    2: {
        icon: 'git-branch',
        title: 'Cơ sở, quá trình hình thành tư tưởng Hồ Chí Minh',
        content: `
            <img src="images/chapter_2.png" alt="Cơ sở lịch sử và quá trình hình thành" class="modal-img" loading="lazy">
            <div class="modal-section">
                <h3><i data-lucide="layers"></i> Cơ sở khách quan</h3>
                <ul>
                    <li><strong>Bối cảnh lịch sử Việt Nam cuối TK XIX - đầu TK XX:</strong> Đất nước bị xâm lược, nhân dân bị áp bức. Các phong trào yêu nước theo lập trường phong kiến và tư sản đều thất bại → Khủng hoảng đường lối cứu nước.</li>
                    <li><strong>Bối cảnh thời đại:</strong> CNTB chuyển sang giai đoạn đế quốc chủ nghĩa, phong trào công nhân phát triển mạnh. Cách mạng Tháng Mười Nga (1917) mở ra thời đại mới — thời đại quá độ từ CNTB lên CNXH.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="brain"></i> Cơ sở tư tưởng - lý luận</h3>
                <ul>
                    <li><strong>Giá trị truyền thống dân tộc:</strong> Chủ nghĩa yêu nước, tinh thần đoàn kết, nhân ái, cần cù, sáng tạo — được hun đúc qua hàng ngàn năm dựng nước và giữ nước.</li>
                    <li><strong>Tinh hoa văn hóa nhân loại:</strong> Tiếp thu có chọn lọc tư tưởng Nho giáo (đạo đức, chính danh), Phật giáo (từ bi, bình đẳng), tư tưởng dân chủ phương Tây (tự do, bình đẳng, bác ái).</li>
                    <li><strong>Chủ nghĩa Mác - Lênin:</strong> Nền tảng tư tưởng chính — cung cấp thế giới quan, phương pháp luận khoa học. Hồ Chí Minh vận dụng sáng tạo vào điều kiện Việt Nam.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="user"></i> Nhân tố chủ quan của Hồ Chí Minh</h3>
                <ul>
                    <li><strong>Phẩm chất cá nhân:</strong> Tư duy độc lập, sáng tạo; khả năng tổng kết thực tiễn xuất sắc; bản lĩnh kiên định; tầm nhìn chiến lược.</li>
                    <li><strong>Vốn sống phong phú:</strong> 30 năm bôn ba khắp năm châu bốn biển, làm đủ nghề, trải qua nhiều quốc gia, tiếp xúc đủ mọi tầng lớp xã hội.</li>
                    <li><strong>Lòng yêu nước nồng nàn:</strong> Động lực thôi thúc suốt đời — từ hoài bão cứu nước thuở thiếu niên đến hành trình vĩ đại của một lãnh tụ cách mạng.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="milestone"></i> Các giai đoạn hình thành</h3>
                <ul>
                    <li><strong>Trước 1911:</strong> Hình thành tư tưởng yêu nước, chí hướng cứu dân cứu nước.</li>
                    <li><strong>1911–1920:</strong> Tìm thấy con đường cứu nước — cách mạng vô sản.</li>
                    <li><strong>1921–1930:</strong> Hình thành cơ bản tư tưởng về con đường cách mạng Việt Nam.</li>
                    <li><strong>1930–1945:</strong> Vượt qua thử thách, kiên trì con đường đã lựa chọn.</li>
                    <li><strong>1945–1969:</strong> Tư tưởng tiếp tục phát triển, hoàn thiện.</li>
                </ul>
            </div>
        `
    },
    3: {
        icon: 'flag',
        title: 'Độc lập dân tộc gắn liền với Chủ nghĩa Xã hội',
        content: `
            <img src="images/chapter_3.png" alt="Độc lập dân tộc gắn liền với chủ nghĩa xã hội" class="modal-img" loading="lazy">
            <div class="modal-section">
                <h3><i data-lucide="shield"></i> Tư tưởng về vấn đề dân tộc</h3>
                <ul>
                    <li><strong>Độc lập, tự do là quyền thiêng liêng:</strong> "Không có gì quý hơn độc lập, tự do" — đây là chân lý có giá trị muôn đời.</li>
                    <li><strong>Kết hợp dân tộc với giai cấp:</strong> Giải phóng dân tộc phải gắn liền với giải phóng giai cấp, giải phóng con người.</li>
                    <li><strong>Độc lập thật sự:</strong> "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì." Độc lập phải đi đôi với cơm no, áo ấm, được học hành.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="rocket"></i> Tư tưởng về cách mạng giải phóng dân tộc</h3>
                <ul>
                    <li><strong>Đường lối:</strong> Cách mạng giải phóng dân tộc muốn thắng lợi phải đi theo con đường cách mạng vô sản (theo chủ nghĩa Mác - Lênin).</li>
                    <li><strong>Lực lượng:</strong> Cách mạng là sự nghiệp của toàn dân, không phải của một vài cá nhân anh hùng.</li>
                    <li><strong>Phương pháp:</strong> Kết hợp sức mạnh dân tộc với sức mạnh thời đại; bạo lực cách mạng với khả năng sáng tạo.</li>
                    <li><strong>Quan hệ quốc tế:</strong> Cách mạng thuộc địa có thể chủ động giành thắng lợi, không phụ thuộc hoàn toàn vào cách mạng ở chính quốc — luận điểm sáng tạo của Hồ Chí Minh!</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="building-2"></i> Tư tưởng về CNXH ở Việt Nam</h3>
                <ul>
                    <li><strong>Mục tiêu:</strong> Xây dựng một xã hội công bằng, bình đẳng — dân giàu, nước mạnh, mọi người có cuộc sống ấm no, tự do, hạnh phúc.</li>
                    <li><strong>Đặc trưng:</strong> CNXH là chế độ do nhân dân làm chủ, có nền kinh tế phát triển, văn hóa phát triển, con người được giải phóng.</li>
                    <li><strong>Con đường:</strong> Phát triển kinh tế, cải thiện đời sống nhân dân, nâng cao dân trí, xây dựng Đảng trong sạch vững mạnh.</li>
                </ul>
            </div>
            <div class="modal-section">
                <div class="modal-highlight">
                    <p><strong>Sợi chỉ đỏ xuyên suốt:</strong> "Độc lập dân tộc gắn liền với chủ nghĩa xã hội" — đây là luận điểm trung tâm, bao trùm toàn bộ tư tưởng Hồ Chí Minh, là quy luật tất yếu của cách mạng Việt Nam.</p>
                </div>
            </div>
        `
    },
    4: {
        icon: 'landmark',
        title: 'Đảng Cộng sản Việt Nam & Nhà nước của Dân',
        content: `
            <img src="images/chapter_4.png" alt="Đảng và Nhà nước của nhân dân" class="modal-img" loading="lazy">
            <div class="modal-section">
                <h3><i data-lucide="users"></i> Tư tưởng về Đảng Cộng sản Việt Nam</h3>
                <ul>
                    <li><strong>Sự ra đời tất yếu:</strong> Đảng CSVN ra đời là sản phẩm của sự kết hợp: Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước. Đây là luận điểm sáng tạo so với Lênin (chỉ có 2 yếu tố).</li>
                    <li><strong>Bản chất:</strong> Đảng là đội tiên phong của giai cấp công nhân, đồng thời là đội tiên phong của nhân dân lao động và của cả dân tộc Việt Nam.</li>
                    <li><strong>Vai trò lãnh đạo:</strong> "Đảng vừa là người lãnh đạo, vừa là người đầy tớ trung thành của nhân dân" — kết hợp hai tư cách trong một.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="shield-check"></i> Xây dựng Đảng trong sạch, vững mạnh</h3>
                <ul>
                    <li><strong>Tư tưởng:</strong> Lấy chủ nghĩa Mác - Lênin làm nền tảng tư tưởng, kim chỉ nam cho mọi hành động.</li>
                    <li><strong>Chính trị:</strong> Đường lối đúng đắn, phục vụ nhân dân, vì lợi ích quốc gia dân tộc.</li>
                    <li><strong>Tổ chức:</strong> Nguyên tắc tập trung dân chủ, tự phê bình và phê bình thường xuyên.</li>
                    <li><strong>Đạo đức:</strong> Cán bộ đảng viên phải thực sự "cần, kiệm, liêm, chính, chí công vô tư".</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="landmark"></i> Tư tưởng về Nhà nước pháp quyền</h3>
                <ul>
                    <li><strong>Nhà nước "của dân, do dân, vì dân":</strong> Bao nhiêu lợi ích đều vì dân. Bao nhiêu quyền hạn đều của dân. Công cuộc đổi mới, xây dựng là trách nhiệm của dân.</li>
                    <li><strong>Pháp quyền nhân nghĩa:</strong> Nhà nước quản lý bằng pháp luật, nhưng pháp luật phải phục vụ nhân dân, thể hiện ý chí của nhân dân.</li>
                    <li><strong>Cán bộ nhà nước:</strong> Là "công bộc" (đầy tớ) của dân, phải gần dân, hiểu dân, lắng nghe dân. Kiên quyết chống tham ô, lãng phí, quan liêu.</li>
                </ul>
            </div>
            <div class="modal-section">
                <div class="modal-highlight">
                    <p><strong>Điểm cốt lõi:</strong> Xây dựng Đảng là then chốt, xây dựng Nhà nước phục vụ nhân dân là mục tiêu — hai nhiệm vụ gắn bó mật thiết, biện chứng với nhau.</p>
                </div>
            </div>
        `
    },
    5: {
        icon: 'globe',
        title: 'Đại đoàn kết dân tộc & Đoàn kết quốc tế',
        content: `
            <img src="images/chapter_5.png" alt="Đại đoàn kết toàn dân tộc" class="modal-img" loading="lazy">
            <div class="modal-section">
                <h3><i data-lucide="heart-handshake"></i> Tư tưởng Đại đoàn kết toàn dân tộc</h3>
                <ul>
                    <li><strong>Vai trò:</strong> Đại đoàn kết toàn dân tộc là <strong>vấn đề chiến lược</strong>, quyết định thành công của cách mạng. "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công."</li>
                    <li><strong>Lực lượng:</strong> Đoàn kết rộng rãi mọi tầng lớp: công nhân, nông dân, trí thức, thanh niên, phụ nữ, đồng bào các dân tộc, tôn giáo, Việt kiều ở nước ngoài...</li>
                    <li><strong>Nền tảng:</strong> Đoàn kết phải dựa trên lập trường giai cấp công nhân, giải quyết hài hòa lợi ích cá nhân, tập thể và xã hội.</li>
                    <li><strong>Nguyên tắc:</strong> Tin vào dân, dựa vào dân, phấn đấu vì lợi ích của dân. Lấy lợi ích chung làm điểm tương đồng, tôn trọng sự khác biệt.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="flag"></i> Mặt trận dân tộc thống nhất</h3>
                <ul>
                    <li>Mặt trận là tổ chức chính trị - xã hội rộng rãi nhất, tập hợp mọi lực lượng yêu nước.</li>
                    <li>Hoạt động theo nguyên tắc: <strong>hiệp thương dân chủ</strong>, đoàn kết - phê bình - tự phê bình.</li>
                    <li>Thực tiễn: Mặt trận Việt Minh (1941), Hội Liên Việt, Mặt trận Tổ quốc Việt Nam — đều thể hiện rõ tư tưởng đại đoàn kết.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="globe"></i> Đoàn kết quốc tế</h3>
                <ul>
                    <li><strong>Đoàn kết với phong trào cộng sản:</strong> Gắn bó với các nước XHCN, các Đảng Cộng sản anh em, phong trào công nhân quốc tế.</li>
                    <li><strong>Đoàn kết với các dân tộc bị áp bức:</strong> Ủng hộ phong trào giải phóng dân tộc trên toàn thế giới. "Giúp bạn là tự giúp mình."</li>
                    <li><strong>Đoàn kết với lực lượng hòa bình, tiến bộ:</strong> Tranh thủ sự ủng hộ rộng rãi của nhân dân tiến bộ trên thế giới.</li>
                    <li><strong>Nguyên tắc:</strong> Độc lập tự chủ, tôn trọng lẫn nhau, bình đẳng các bên cùng có lợi.</li>
                </ul>
            </div>
            <div class="modal-section">
                <div class="modal-highlight">
                    <p><strong>Giá trị bền vững:</strong> Tư tưởng đại đoàn kết là bài học lịch sử quý giá — khi nào đoàn kết tốt thì cách mạng thắng lợi, khi nào chia rẽ thì gặp khó khăn thất bại.</p>
                </div>
            </div>
        `
    },
    6: {
        icon: 'heart',
        title: 'Văn hóa, đạo đức, con người',
        content: `
            <img src="images/chapter_6.png" alt="Văn hóa và đạo đức cách mạng" class="modal-img" loading="lazy">
            <div class="modal-section">
                <h3><i data-lucide="palette"></i> Tư tưởng về Văn hóa</h3>
                <ul>
                    <li><strong>Định nghĩa:</strong> Văn hóa bao gồm mọi sáng tạo vật chất và tinh thần của con người, nhằm đáp ứng nhu cầu đời sống và đòi hỏi sinh tồn.</li>
                    <li><strong>Chức năng:</strong> "Văn hóa soi đường cho quốc dân đi" — văn hóa không đứng ngoài mà ở trong chính trị và kinh tế, phải phục vụ nhiệm vụ cách mạng.</li>
                    <li><strong>Xây dựng nền văn hóa mới:</strong> Có tính dân tộc, tính khoa học, tính đại chúng. Kết hợp bảo tồn truyền thống với tiếp thu tinh hoa nhân loại.</li>
                    <li><strong>Đội ngũ trí thức:</strong> Trí thức là "vốn liếng quý báu của dân tộc", phải được trọng dụng, phát huy trong sự nghiệp xây dựng đất nước.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="star"></i> Tư tưởng về Đạo đức cách mạng</h3>
                <ul>
                    <li><strong>Vai trò quyết định:</strong> Đạo đức là nền tảng, là "gốc" của người cách mạng. "Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân."</li>
                    <li><strong>Chuẩn mực đạo đức:</strong>
                        <br>• <em>Trung với nước, hiếu với dân</em> — phẩm chất hàng đầu
                        <br>• <em>Cần, kiệm, liêm, chính, chí công vô tư</em> — phẩm chất cốt lõi  
                        <br>• <em>Yêu thương con người</em> — phẩm chất cao đẹp
                        <br>• <em>Tinh thần quốc tế trong sáng</em> — phẩm chất cao quý
                    </li>
                    <li><strong>Tu dưỡng đạo đức:</strong> Phải rèn luyện suốt đời, nói đi đôi với làm, tự phê bình nghiêm túc. "Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền."</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3><i data-lucide="smile"></i> Tư tưởng về Con người</h3>
                <ul>
                    <li><strong>Con người là vốn quý nhất:</strong> "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người." — Chiến lược "trồng người" là tư tưởng vĩ đại.</li>
                    <li><strong>Con người vừa là mục tiêu, vừa là động lực:</strong> Mọi chính sách phải hướng tới con người; đồng thời con người là nguồn lực quyết định mọi thắng lợi.</li>
                    <li><strong>Phát triển toàn diện:</strong> Xây dựng con người có đức có tài, "hồng" và "chuyên" kết hợp, phục vụ Tổ quốc, phục vụ nhân dân.</li>
                </ul>
            </div>
            <div class="modal-section">
                <div class="modal-highlight">
                    <p><strong>Thông điệp:</strong> Văn hóa, đạo đức, con người là ba trụ cột không thể tách rời — là "sức mạnh mềm" quyết định sự phát triển bền vững của dân tộc Việt Nam.</p>
                </div>
            </div>
        `
    }
};

// ========================================
// CHAPTER MODAL - Xử lý mở/đóng
// ========================================
const modal = document.getElementById('chapterModal');
const modalClose = document.getElementById('modalClose');
const cards = document.querySelectorAll('.card[data-chapter]');

function openModal(chapterNum) {
    const data = chapterData[chapterNum];
    if (!data) return;

    document.getElementById('modalChapterNum').textContent = `Chương ${chapterNum}`;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalBody').innerHTML = data.content;

    // Icon
    const iconContainer = document.getElementById('modalIcon');
    iconContainer.innerHTML = `<i data-lucide="${data.icon}"></i>`;

    // Show modal
    const chapterModal = document.getElementById('chapterModal');
    chapterModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Reinitialize Lucide icons
    setTimeout(() => lucide.createIcons(), 50);
}

function openTimelineModal(timelineId) {
    const data = timelineData[timelineId];
    if (!data) return;

    document.getElementById('timelineModalDate').textContent = data.date;
    document.getElementById('timelineModalTitle').textContent = data.title;
    document.getElementById('timelineModalBody').innerHTML = data.content;

    // Icon
    const iconContainer = document.getElementById('timelineModalIcon');
    iconContainer.innerHTML = `<i data-lucide="${data.icon}"></i>`;

    // Show modal
    const timelineModal = document.getElementById('timelineModal');
    timelineModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Reinitialize Lucide icons
    setTimeout(() => lucide.createIcons(), 50);
}

function closeModal(modalId) {
    if (modalId) {
        document.getElementById(modalId).classList.remove('active');
    } else {
        // Fallback: đóng tất cả các modal đang active
        document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
    }
    document.body.style.overflow = '';
}

cards.forEach(card => {
    card.addEventListener('click', () => {
        const chapterNum = card.getAttribute('data-chapter');
        openModal(chapterNum);
    });
});

// Click ra ngoài để đóng mọi modal
document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});

// Nhấn Escape để đóng mọi modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ========================================
// ACCORDION Q&A
// ========================================
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        const currentlyActive = document.querySelector('.accordion-item.active');
        if (currentlyActive && currentlyActive !== item) {
            currentlyActive.classList.remove('active');
            currentlyActive.querySelector('.accordion-content').style.maxHeight = null;
        }

        item.classList.toggle('active');
        const content = item.querySelector('.accordion-content');

        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });
});

// ========================================
// SMOOTH SCROLL cho các anchor links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
