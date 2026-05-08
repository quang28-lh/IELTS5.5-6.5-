document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 File theme.js mới nhất đã được tải!");

    const themeBtn = document.getElementById('theme-btn');
    const themeMenu = document.getElementById('theme-menu');
    const themeOptions = document.querySelectorAll('.theme-option');
    const htmlElement = document.documentElement; // Tác động vào thẻ <html>

    console.log("🔍 Tìm thấy nút đổi theme:", !!themeBtn);
    console.log("🔍 Số lượng màu có thể chọn:", themeOptions.length);

    // 1. ÁP DỤNG THEME KHI VỪA VÀO TRANG
    const savedTheme = localStorage.getItem('appTheme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    console.log("🎨 Đã load theme từ bộ nhớ:", savedTheme);

    if (themeBtn && themeMenu) {
        // 2. MỞ / ĐÓNG MENU
        themeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            themeMenu.classList.toggle('active'); 
            console.log("🔘 Đã bấm mở/đóng menu!");
        });

        // 3. KHI CHỌN MỘT MÀU BẤT KỲ
        themeOptions.forEach(option => {
            option.addEventListener('click', () => {
                const selectedTheme = option.getAttribute('data-value'); 
                console.log("👉 Đang yêu cầu đổi sang màu:", selectedTheme);
                
                // Cập nhật giao diện
                htmlElement.setAttribute('data-theme', selectedTheme);
                localStorage.setItem('appTheme', selectedTheme); 
                
                themeMenu.classList.remove('active');
                console.log("✅ Đã xử lý xong! Bạn xem thẻ <html> đã đổi thành", selectedTheme, "chưa nhé.");
            });
        });

        // 4. CLICK RA NGOÀI THÌ ĐÓNG MENU
        document.addEventListener('click', (e) => {
            if (!themeBtn.contains(e.target) && !themeMenu.contains(e.target)) {
                themeMenu.classList.remove('active');
            }
        });
    }
});