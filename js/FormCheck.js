function validateForm() {
    const code = document.getElementById('code').value;
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const hobbies = document.querySelectorAll('input[name="hobbies"]:checked').length;
    const nationality = document.querySelectorAll('input[name="nationality"]:checked').length;
    const note = document.getElementById('note').value;

    // Kiểm tra mã, họ tên, email không để trống
    if (code === '' || fullName === '' || email === '') {
        alert('Vui long nhap đay đu ma, ho ten va email.');
        return false;
    }

    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Vui long nhap đung đinh dang email.');
        return false;
    }

    // Kiểm tra đã chọn giới tính
    if (gender === '') {
        alert('Vui long chon gioi tinh.');
        return false;
    }

    // Replace this part of your existing code
    if (hobbies.length === 0) {
        alert('Vui long chon ít nhất một sở thích.');
        return false;
    }


    // Replace this part of your existing code
    if (nationality === 0) {
        alert('Vui long chon quoc tich.');
        return false;
    }


    // Kiểm tra ghi chú không quá 200 ký tự
    if (note.length > 200) {
        alert('Ghi chu khong đuoc vuot qua 200 ky tu.');
        return false;
    }

    return true;
}
