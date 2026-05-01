const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

// 1. Cấu hình Middleware
app.use(cors());
app.use(express.json());

// 2. Kết nối Database trên Mây (Atlas)
const dbURI = "mongodb+srv://admin:hust2026@cluster0.ug9dzvv.mongodb.net/ielts_db?retryWrites=true&w=majority";

mongoose.connect(dbURI)
    .then(() => console.log("HUST Server: Kết nối Database thành công! ✨☁️"))
    .catch(err => console.error("Lỗi kết nối Cloud:", err));

// 3. Định nghĩa khung hồ sơ người dùng (Schema)
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const User = mongoose.model('User', UserSchema);

// 4. Các đường dẫn (Routes)
app.get('/', (req, res) => {
    res.send("Server đang chạy cực mượt! 🚀");
});

// Logic Đăng ký
app.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).send("Email này đã có người dùng rồi!");

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        res.status(201).send("Đăng ký thành công.");
    } catch (error) {
        res.status(500).send("Lỗi: " + error.message);
    }
});

// 5. Nổ máy Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server đang nổ máy tại: http://localhost:${PORT}`);
});