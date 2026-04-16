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

    // Parallax background offset
    document.body.style.setProperty('--scroll-y', winScroll + 'px');

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
        title: 'Chương 1: Khái niệm, đối tượng, phương pháp nghiên cứu và ý nghĩa học tập',
        content: `
            <img src="images/chapter_1.png" alt="Khái niệm và phương pháp nghiên cứu" class="modal-img" loading="lazy">
            <div class="modal-section">
                <h3>A. Mục tiêu</h3>
                <p>Cung cấp cho sinh viên những tri thức nền tảng nhất: hiểu rõ tư tưởng Hồ Chí Minh là gì, học phần này nghiên cứu về điều gì, dùng phương pháp nào để nghiên cứu và việc học tập tư tưởng Hồ Chí Minh có ý nghĩa như thế nào đối với nhận thức, hành động thực tiễn của sinh viên.</p>
            </div>
            <div class="modal-section">
                <h3>B. Nội dung</h3>
                <div style="margin-bottom: 24px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">I - Khái niệm tư tưởng Hồ Chí Minh</h4>
                    <p>Tư tưởng Hồ Chí Minh là <strong>một hệ thống quan điểm toàn diện và sâu sắc</strong> về những vấn đề cơ bản của cách mạng Việt Nam, từ cách mạng dân tộc dân chủ nhân dân đến cách mạng xã hội chủ nghĩa.</p>
                    <p>Là kết quả của sự vận dụng sáng tạo và phát triển chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta, kế thừa và phát triển các giá trị truyền thống tốt đẹp của dân tộc, tiếp thu tinh hoa văn hóa nhân loại. Tư tưởng của Người là tài sản tinh thần vô giá của Đảng và dân tộc ta, mãi mãi soi đường cho sự nghiệp cách mạng của Việt Nam.</p>
                </div>
                <div style="margin-bottom: 24px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">II - Đối tượng nghiên cứu</h4>
                    <ul>
                        <li><strong>Hệ thống quan điểm, lý luận:</strong> Nghiên cứu hệ thống quan điểm của Hồ Chí Minh về hệ thống các vấn đề lý luận và thực tiễn của cách mạng Việt Nam.</li>
                        <li><strong>Quá trình vận động, phát triển:</strong> Sự vận động, hiện thực hóa của các tư tưởng đó trong thực tiễn cách mạng qua các thời kỳ lịch sử.</li>
                    </ul>
                </div>
                <div style="margin-bottom: 24px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">III - Phương pháp nghiên cứu</h4>
                    <ul>
                        <li><strong>Cơ sở phương pháp luận:</strong> Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử Mác - Lênin.</li>
                        <li><strong>Các phương pháp cụ thể:</strong>
                            <br>- Phương pháp lịch sử - logic (Gắn lý luận với bối cảnh lịch sử cụ thể).
                            <br>- Phương pháp liên ngành (Kết hợp văn hóa học, sử học, triết học...).
                            <br>- Phương pháp phân tích, văn bản học (Qua hệ thống bài viết, di sản để lại).
                        </li>
                    </ul>
                </div>
                <div style="margin-bottom: 8px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">IV - Ý nghĩa của việc học tập môn Tư tưởng Hồ Chí Minh</h4>
                    <div class="modal-highlight">
                        <p>Nâng cao năng lực tư duy lý luận và phương pháp công tác. Bồi dưỡng phẩm chất đạo đức cách mạng, rèn luyện bản lĩnh chính trị tư tưởng kiên định. Thiết lập ý thức trách nhiệm công dân, niềm tin khoa học vào sự nghiệp đổi mới.</p>
                    </div>
                </div>
            </div>
            <div class="modal-section">
                <h3>C. Câu hỏi ôn tập</h3>
                <ul style="list-style-type: decimal; padding-left: 20px;">
                    <li>Phân tích định nghĩa tư tưởng Hồ Chí Minh được nêu trong Văn kiện Đại hội đại biểu toàn quốc lần thứ XI của Đảng?</li>
                    <li>Làm rõ đối tượng nghiên cứu và các phương pháp nghiên cứu của môn học Tư tưởng Hồ Chí Minh?</li>
                    <li>Sự cần thiết và ý nghĩa của việc học tập môn Tư tưởng Hồ Chí Minh đối với thế hệ trẻ hiện nay?</li>
                </ul>
            </div>
        `
    },
    2: {
        icon: 'git-branch',
        title: 'Chương 2: Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh',
        content: `
            <img src="images/chapter_2.png" alt="Cơ sở lịch sử và quá trình hình thành" class="modal-img" loading="lazy">
            <div class="modal-section">
                <h3>A. Mục tiêu</h3>
                <p>Nắm vững nguồn gốc, cơ sở lý luận, thực tiễn hình thành tư tưởng Hồ Chí Minh. Nhận thức đúng đắn về sự chuyển biến tư tưởng mang tính quy luật và những mốc son lịch sử quan trọng trong quá trình hình thành, phát triển tư tưởng của Người.</p>
            </div>
            <div class="modal-section">
                <h3>B. Nội dung</h3>
                <div style="margin-bottom: 24px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">I - Cơ sở hình thành tư tưởng Hồ Chí Minh</h4>
                    <ul>
                        <li><strong>1. Cơ sở thực tiễn:</strong><br>- <em>Thực tiễn Việt Nam:</em> Khủng hoảng đường lối cứu nước cuối TK XIX, các phong trào yêu nước thất bại. Yêu cầu bức thiết phải tìm một con đường mới.<br>- <em>Thực tiễn thế giới:</em> Chủ nghĩa tư bản chuyển sang đế quốc chủ nghĩa. Cách mạng Tháng Mười Nga thành công mở ra thời đại quá độ lên CNXH.</li>
                        <li><strong>2. Cơ sở lý luận:</strong><br>- <em>Giá trị truyền thống dân tộc:</em> Chủ nghĩa yêu nước là cốt lõi, tinh thần đoàn kết, ý chí tự lực tự cường.<br>- <em>Tinh hoa văn hóa nhân loại:</em> Tư tưởng Nho giáo, Phật giáo; Tư tưởng dân chủ tư sản Pháp, Mỹ.<br>- <em>Chủ nghĩa Mác - Lênin:</em> Đây là tiền đề lý luận quan trọng nhất, là thế giới quan và phương pháp luận quyết định bước phát triển về chất của tư tưởng Hồ Chí Minh.</li>
                        <li><strong>3. Nhân tố chủ quan:</strong><br>- Tư duy độc lập, tự chủ, sáng tạo. Nhãn quan chính trị sắc bén.<br>- Phẩm chất đạo đức cao đẹp, ý chí nghị lực phi thường và lòng yêu nước thương dân sâu sắc.</li>
                    </ul>
                </div>
                <div style="margin-bottom: 24px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">II - Quá trình hình thành và phát triển</h4>
                    <ul>
                        <li><strong>Trước 1911:</strong> Hình thành tư tưởng yêu nước và chí hướng cứu nước.</li>
                        <li><strong>1911 – 1920:</strong> Tìm thấy con đường cứu nước, giải phóng dân tộc (đến với chủ nghĩa Mác-Lênin).</li>
                        <li><strong>1921 – 1930:</strong> Hình thành cơ bản tư tưởng về con đường cách mạng Việt Nam (sáng lập Đảng, thảo Cương lĩnh chính trị đầu tiên).</li>
                        <li><strong>1930 – 1945:</strong> Vượt qua thử thách, kiên trì giữ vững đường lối, tiến tới thắng lợi Cách mạng Tháng Tám.</li>
                        <li><strong>1945 – 1969:</strong> Tư tưởng tiếp tục phát triển, hoàn thiện (vừa kháng chiến vừa kiến quốc).</li>
                    </ul>
                </div>
                <div style="margin-bottom: 8px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">III - Giá trị tư tưởng Hồ Chí Minh</h4>
                    <div class="modal-highlight">
                        <p><strong>1. Đối với cách mạng Việt Nam:</strong> Đưa cách mạng đi từ thắng lợi này đến thắng lợi khác, là nền tảng tư tưởng và kim chỉ nam cho hành động của Đảng.<br>
                        <strong>2. Đối với sự phát triển tiến bộ của nhân loại:</strong> Cống hiến to lớn vào kho tàng lý luận Mác - Lênin, cổ vũ phong trào giải phóng dân tộc trên toàn thế giới.</p>
                    </div>
                </div>
            </div>
            <div class="modal-section">
                <h3>C. Câu hỏi ôn tập</h3>
                <ul style="list-style-type: decimal; padding-left: 20px;">
                    <li>Phân tích những tiền đề khách quan và nhân tố chủ quan hình thành tư tưởng Hồ Chí Minh?</li>
                    <li>Tại sao chủ nghĩa Mác - Lênin là tiền đề lý luận quan trọng nhất quyết định bản chất tư tưởng Hồ Chí Minh?</li>
                    <li>Phân tích các thời kỳ lịch sử trong quá trình hình thành và phát triển của tư tưởng Hồ Chí Minh? Giá trị lớn lao của nó đối với cách mạng Việt Nam là gì?</li>
                </ul>
            </div>
        `
    },
    3: {
        icon: 'flag',
        title: 'Chương 3: Tư tưởng Hồ Chí Minh về Độc lập dân tộc và Chủ nghĩa xã hội',
        content: `
            <img src="images/chapter_3.png" alt="Độc lập dân tộc gắn liền với chủ nghĩa xã hội" class="modal-img" loading="lazy">
            <div class="modal-section">
                <h3>A. Mục tiêu</h3>
                <p>Nắm vững luận điểm về quyền độc lập tự do thiêng liêng của các dân tộc; tính tất yếu của con đường đi lên chủ nghĩa xã hội ở Việt Nam và mối quan hệ biện chứng, hữu cơ "độc lập dân tộc gắn liền với chủ nghĩa xã hội" trong tư tưởng Hồ Chí Minh.</p>
            </div>
            <div class="modal-section">
                <h3>B. Nội dung</h3>
                <div style="margin-bottom: 24px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">I - Tư tưởng Hồ Chí Minh về độc lập dân tộc</h4>
                    <ul>
                        <li><strong>Độc lập, tự do là quyền thiêng liêng và bất khả xâm phạm:</strong> "Không có gì quý hơn độc lập, tự do".</li>
                        <li><strong>Độc lập dân tộc gắn với hạnh phúc của nhân dân:</strong> Độc lập phải thực sự mang lại quyền lợi ấm no, hạnh phúc. "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì".</li>
                        <li><strong>Kết hợp với sức mạnh thời đại:</strong> Cách mạng giải phóng dân tộc phải đi theo con đường cách mạng vô sản, dựa vào sức mạnh của toàn dân.</li>
                        <li>Cách mạng thuộc địa có khả năng nổ ra và giành thắng lợi trước cách mạng ở chính quốc (Luận điểm sáng tạo độc đáo).</li>
                    </ul>
                </div>
                <div style="margin-bottom: 24px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">II - Tư tưởng Hồ Chí Minh về CNXH và xây dựng CNXH ở Việt Nam</h4>
                    <ul>
                        <li><strong>Quan niệm về CNXH:</strong> Một xã hội do nhân dân lao động làm chủ, có nền kinh tế phát triển cao, văn hóa tiên tiến, đậm đà bản sắc dân tộc, con người được bồi dưỡng, giải phóng toàn diện.</li>
                        <li><strong>Tính tất yếu của CNXH ở Việt Nam:</strong> Cách mạng dân tộc dân chủ nhân dân tiến lên cách mạng XHCN là tất yếu khách quan, phù hợp với quy luật tiến hóa của nhân loại.</li>
                        <li><strong>Thời kỳ quá độ:</strong> Quá độ bỏ qua chế độ tư bản chủ nghĩa, đây là công cuộc biến đổi sâu sắc, khó khăn, gian khổ, phức tạp và lâu dài.</li>
                        <li><strong>Động lực xây dựng:</strong> Dựa vào sức mạnh khối đại đoàn kết, lấy lợi ích của nhân dân làm mục tiêu. "Đem tài dân, sức dân, của dân làm lợi cho dân".</li>
                    </ul>
                </div>
                <div style="margin-bottom: 24px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">III - Mối quan hệ giữa độc lập dân tộc và CNXH</h4>
                    <p>Độc lập dân tộc là tiền đề, là điều kiện tiên quyết để xây dựng chủ nghĩa xã hội. Chủ nghĩa xã hội là cơ sở đảm bảo vững chắc cho độc lập dân tộc. Đây là "sợi chỉ đỏ" xuyên suốt toàn bộ di sản lý luận cũng như đường lối thực tiễn của cách mạng.</p>
                </div>
                <div style="margin-bottom: 8px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">IV - Vận dụng tư tưởng trong giai đoạn hiện nay</h4>
                    <div class="modal-highlight">
                        <p>Kiên định con đường độc lập dân tộc gắn liền với chủ nghĩa xã hội. Phát huy sức mạnh vĩ đại của toàn dân tộc; đẩy mạnh sự nghiệp công nghiệp hoá, hiện đại hoá đất nước và hội nhập quốc tế để xây dựng Việt Nam phồn vinh, hạnh phúc.</p>
                    </div>
                </div>
            </div>
            <div class="modal-section">
                <h3>C. Câu hỏi ôn tập</h3>
                <ul style="list-style-type: decimal; padding-left: 20px;">
                    <li>Phân tích nội dung cốt lõi của tư tưởng Hồ Chí Minh về độc lập dân tộc?</li>
                    <li>Phân tích quan điểm của Hồ Chí Minh về tính tất yếu và bản chất của chủ nghĩa xã hội ở Việt Nam?</li>
                    <li>Tại sao độc lập dân tộc phải gắn liền với chủ nghĩa xã hội? Liên hệ và vận dụng vào công cuộc Đổi mới ở Việt Nam hiện nay?</li>
                </ul>
            </div>
        `
    },
    4: {
        icon: 'landmark',
        title: 'Chương 4: Đảng Cộng sản Việt Nam và Nhà nước của nhân dân, do nhân dân, vì nhân dân',
        content: `
            <img src="images/chapter_4.png" alt="Đảng và Nhà nước của nhân dân" class="modal-img" loading="lazy">
            <div class="modal-section">
                <h3>A. Mục tiêu</h3>
                <p>Hiểu sâu sắc về tính tất yếu, bản chất của giai cấp công nhân của Đảng; nguyên tắc tổ chức sinh hoạt Đảng. Đồng thời lý giải được bản chất, cấu tạo và nguyên tắc hoạt động của Nhà nước pháp quyền xã hội chủ nghĩa trong tư tưởng của Bác.</p>
            </div>
            <div class="modal-section">
                <h3>B. Nội dung</h3>
                <div style="margin-bottom: 24px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">I - Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam</h4>
                    <ul>
                        <li><strong>Tính tất yếu hình thành:</strong> Sự kết hợp giữa chủ nghĩa Mác - Lênin, phong trào công nhân và phong trào yêu nước.</li>
                        <li><strong>Bản chất:</strong> Đảng là đội tiên phong của giai cấp công nhân, đồng thời là đội tiên phong của nhân dân lao động và của toàn dân tộc Việt Nam.</li>
                        <li><strong>Các nguyên tắc tổ chức, sinh hoạt Đảng:</strong>
                            <br>1. Tập trung dân chủ (Nguyên tắc căn bản nhất).
                            <br>2. Tập thể lãnh đạo, cá nhân phụ trách.
                            <br>3. Tự phê bình và phê bình.
                            <br>4. Kỷ luật nghiêm minh, tự giác.
                            <br>5. Đoàn kết thống nhất trong Đảng, gắn bó mật thiết với nhân dân.
                        </li>
                    </ul>
                </div>
                <div style="margin-bottom: 24px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">II - Tư tưởng Hồ Chí Minh về Nhà nước của nhân dân, do nhân dân, vì nhân dân</h4>
                    <ul>
                        <li><strong>Bản chất giai cấp:</strong> Do Đảng Cộng sản lãnh đạo, mang bản chất giai cấp công nhân, thống nhất với tính nhân dân và tính dân tộc.</li>
                        <li><strong>Nhà nước của nhân dân:</strong> Dân là chủ, quyền lực tối cao thuộc về nhân dân.</li>
                        <li><strong>Nhà nước do nhân dân:</strong> Dân thiết lập nên Nhà nước, tổ chức, quản lý và kiểm soát Nhà nước.</li>
                        <li><strong>Nhà nước vì nhân dân:</strong> Phục vụ lợi ích và nguyện vọng chính đáng của nhân dân, không có đặc quyền đặc lợi.</li>
                        <li><strong>Nhà nước pháp quyền:</strong> Quản lý đất nước bằng Hiến pháp, pháp luật. Coi trọng đạo đức, pháp quyền nhân nghĩa. Chống đặc quyền, đặc lợi, quan liêu, tham nhũng.</li>
                    </ul>
                </div>
                <div style="margin-bottom: 8px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">III - Vận dụng tư tưởng vào công tác xây dựng Đảng và xây dựng Nhà nước</h4>
                    <div class="modal-highlight">
                        <p>Xây dựng Đảng, Nhà nước trong sạch, vững mạnh. Chống tha hóa quyền lực, "tự diễn biến", "tự chuyển hóa". Xây dựng đội ngũ cán bộ, công chức vừa có đức vừa có tài, là "công bộc" tận tụy trung thành của nhân dân.</p>
                    </div>
                </div>
            </div>
            <div class="modal-section">
                <h3>C. Câu hỏi ôn tập</h3>
                <ul style="list-style-type: decimal; padding-left: 20px;">
                    <li>Phân tích quan điểm của Hồ Chí Minh về sự ra đời, bản chất và vai trò lãnh đạo của Đảng Cộng sản Việt Nam?</li>
                    <li>Anh/chị hiểu như thế nào về điểm then chốt nhất của các nguyên tắc tổ chức sinh hoạt Đảng (Tập trung dân chủ)?</li>
                    <li>Phân tích nội dung cốt lõi của tư tưởng: Nhà nước của dân, do dân, vì dân? Việc vận dụng nó trong công tác phòng chống tham nhũng hiện nay?</li>
                </ul>
            </div>
        `
    },
    5: {
        icon: 'globe',
        title: 'Chương 5: Đại đoàn kết toàn dân tộc và Đoàn kết quốc tế',
        content: `
            <img src="images/chapter_5.png" alt="Đại đoàn kết toàn dân tộc" class="modal-img" loading="lazy">
            <div class="modal-section">
                <h3>A. Mục tiêu</h3>
                <p>Nêu rõ cơ sở lý luận, nội dung cơ bản của tư tưởng Đại đoàn kết: đây là vấn đề chiến lược xuyên suốt. Hiểu được vai trò của Mặt trận Dân tộc thống nhất và các nguyên lý của đoàn kết quốc tế (kết hợp sức mạnh dân tộc với sức mạnh thời đại).</p>
            </div>
            <div class="modal-section">
                <h3>B. Nội dung</h3>
                <div style="margin-bottom: 24px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">I - Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc</h4>
                    <ul>
                        <li><strong>Vai trò:</strong> Là vấn đề chiến lược, quyết định thành bại của cách mạng. <em>"Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công"</em>.</li>
                        <li><strong>Lực lượng đại đoàn kết:</strong> Rất rộng lớn, bao gồm mọi giai cấp, tầng lớp, tôn giáo, dân tộc... trên nền tảng liên minh công - nông - trí thức.</li>
                        <li><strong>Nguyên tắc xây dựng:</strong> Lấy lợi ích chung (độc lập dân tộc, tự do của nhân dân) làm điểm đồng quy. Tin vào dân, khoan dung độ lượng, xóa bỏ mặc cảm do quá khứ.</li>
                        <li><strong>Hình thức tổ chức:</strong> Mặt trận dân tộc thống nhất (được xây dựng và hoạt động theo nguyên tắc hiệp thương dân chủ).</li>
                    </ul>
                </div>
                <div style="margin-bottom: 24px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">II - Tư tưởng Hồ Chí Minh về đoàn kết quốc tế</h4>
                    <ul>
                        <li><strong>Sự cần thiết:</strong> Tăng cường sức mạnh cho cách mạng VN và góp phần vào sự nghiệp cách mạng thế giới. Chống lại kẻ thù chung của nhân loại (đế quốc chủ nghĩa).</li>
                        <li><strong>Lực lượng đoàn kết:</strong> Phong trào cộng sản, phong trào công nhân quốc tế, phong trào đấu tranh giải phóng dân tộc, các lực lượng yêu chuộng hòa bình.</li>
                        <li><strong>Nguyên tắc:</strong> Dựa trên độc lập, tự chủ, tự lực cánh sinh. Bình đẳng, tôn trọng lẫn nhau, các bên cùng có lợi. <em>"Muốn người ta giúp cho, thì trước mình phải tự giúp lấy mình đã"</em>.</li>
                    </ul>
                </div>
                <div style="margin-bottom: 8px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">III - Vận dụng vào sự nghiệp cách mạng trong giai đoạn hiện nay</h4>
                    <div class="modal-highlight">
                        <p>Tiếp tục củng cố, tăng cường khối đại đoàn kết toàn dân tộc, phát huy dân chủ XHCN. Thực hiện nhất quán đường lối đối ngoại độc lập, tự chủ, hòa bình, đa phương hóa, đa dạng hóa quan hệ quốc tế (Ngoại giao Cây tre).</p>
                    </div>
                </div>
            </div>
            <div class="modal-section">
                <h3>C. Câu hỏi ôn tập</h3>
                <ul style="list-style-type: decimal; padding-left: 20px;">
                    <li>Phân tích vai trò của đại đoàn kết toàn dân tộc trong sự nghiệp cách mạng theo quan điểm của Hồ Chí Minh?</li>
                    <li>Sự kết hợp giữa chủ nghĩa yêu nước và chủ nghĩa quốc tế vô sản thể hiện qua tư tưởng đoàn kết quốc tế của Bác như thế nào?</li>
                    <li>Liên hệ việc phát huy dân chủ, đại đoàn kết toàn dân tộc tại địa phương hoặc môi trường làm việc - học tập của anh/chị?</li>
                </ul>
            </div>
        `
    },
    6: {
        icon: 'heart',
        title: 'Chương 6: Văn hóa, Đạo đức, Con người',
        content: `
            <img src="images/chapter_6.png" alt="Văn hóa và đạo đức cách mạng" class="modal-img" loading="lazy">
            <div class="modal-section">
                <h3>A. Mục tiêu</h3>
                <p>Khẳng định vai trò của "sức mạnh mềm" - văn hóa và đạo đức. Đây là nền tảng tinh thần của xã hội, giúp sinh viên ý thức sâu sắc việc tu dưỡng, rèn luyện phẩm chất đạo đức cách mạng và trở thành con người phát triển toàn diện.</p>
            </div>
            <div class="modal-section">
                <h3>B. Nội dung</h3>
                <div style="margin-bottom: 24px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">I - Tư tưởng Hồ Chí Minh về văn hóa</h4>
                    <ul>
                        <li><strong>Khái niệm & chức năng:</strong> Văn hóa là sự tổng hợp mọi sáng tạo của con người. Có chức năng bồi dưỡng tư tưởng, soi đường cho quốc dân đi, nâng cao dân trí.</li>
                        <li><strong>Quan hệ với các lĩnh vực khác:</strong> Văn hóa không đứng ngoài kinh tế, chính trị. Nó vừa phụ thuộc kinh tế, vừa có khả năng tác động mạnh mẽ trở lại kinh tế, chính trị.</li>
                        <li><strong>Tính chất văn hóa mới:</strong> Tính dân tộc, tính khoa học, tính đại chúng. Giữ gìn bản sắc dân tộc đi đôi với tiếp thu tinh hoa văn hóa nhân loại.</li>
                    </ul>
                </div>
                <div style="margin-bottom: 24px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">II - Tư tưởng Hồ Chí Minh về đạo đức</h4>
                    <ul>
                        <li><strong>Vai trò:</strong> Đạo đức là cái "gốc", nền tảng của người cách mạng. <em>"Có tài mà không có đức là người vô dụng"</em>.</li>
                        <li><strong>Các chuẩn mực đạo đức cốt lõi:</strong>
                            <br>- Trung với nước, hiếu với dân.
                            <br>- Cần, kiệm, liêm, chính, chí công vô tư.
                            <br>- Yêu thương con người. Suy nghĩ và hành động trên tinh thần quốc tế trong sáng.
                        </li>
                        <li><strong>Nguyên tắc tu dưỡng:</strong> Nói đi đôi với làm; Xây đi đôi với chống; Tu dưỡng đạo đức suốt đời như "Ngọc càng mài càng sáng, vàng càng luyện càng trong".</li>
                    </ul>
                </div>
                <div style="margin-bottom: 24px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">III - Tư tưởng Hồ Chí Minh về con người</h4>
                    <p>Con người là vốn quý nhất, là động lực để phát triển xã hội, đồng thời là mục tiêu vươn tới của giải phóng dân tộc và xây dựng CNXH. Xây dựng con người phải là một trong những mục tiêu chiến lược hàng đầu (Vì lợi ích mười năm trồng cây, trăm năm trồng người).</p>
                </div>
                <div style="margin-bottom: 8px;">
                    <h4 style="color: var(--primary); margin-bottom: 8px; font-size: 1.1rem;">IV - Xây dựng văn hóa, đạo đức, con người Việt Nam hiện nay</h4>
                    <div class="modal-highlight">
                        <p>Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc. Cán bộ, đảng viên, thế hệ trẻ gương mẫu thực hiện việc "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh", tạo động lực nội sinh to lớn phát triển bền vững đất nước.</p>
                    </div>
                </div>
            </div>
            <div class="modal-section">
                <h3>C. Câu hỏi ôn tập</h3>
                <ul style="list-style-type: decimal; padding-left: 20px;">
                    <li>Phân tích vị trí, chức năng của văn hóa trong đời sống xã hội theo quan điểm của Chủ tịch Hồ Chí Minh?</li>
                    <li>Sự cần thiết và những chuẩn mực của đạo đức cách mạng?</li>
                    <li>Là sinh viên, anh/chị làm gì để tu dưỡng đạo đức và tham gia vào chiến lược "trồng người" hiện nay?</li>
                </ul>
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

// ========================================
// ANIMATED COUNTER (Stats Section)
// ========================================
function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutQuart
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(eased * (target - start) + start);
        
        el.textContent = current.toLocaleString('vi-VN');
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target.toLocaleString('vi-VN');
        }
    }
    
    requestAnimationFrame(update);
}

const statNumbers = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(el => counterObserver.observe(el));
