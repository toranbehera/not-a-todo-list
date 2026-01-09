import bcrypt from "bcryptjs";

async function hashPassword(plainPassword) {
    return await bcrypt.hash(plainPassword, 10);
}

async function comparePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
}

export {hashPassword, comparePassword};
