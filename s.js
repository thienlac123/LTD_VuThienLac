function capNhatSoTienVay() {
    const giaTriTaiSan = parseFloat(document.getElementById('giaTriTaiSan').value) || 0;
    const tyLe = document.getElementById('sliderTyLe').value;
    
    // Tính toán số tiền vay
    const soTienVay = (giaTriTaiSan * tyLe) / 100;
    
    // Cập nhật giao diện
    document.getElementById('labelTyLe').innerText = tyLe;
    document.getElementById('displaySoTienVay').innerText = Math.round(soTienVay).toLocaleString() + " VNĐ";
    
    // Gán vào input ẩn để hàm tính toán cũ vẫn chạy được
    document.getElementById('soTienVay').value = soTienVay;
}

// Gọi hàm lần đầu khi trang web load để hiển thị số tiền mặc định
document.addEventListener('DOMContentLoaded', () => {
    capNhatSoTienVay();
});