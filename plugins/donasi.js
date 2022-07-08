let handler = async m => m.reply(`
            .✵.════𝔻𝕆ℕ𝔸𝕊𝕀════.✵.

╔╦══• •✠•❀SUBREK AE BANG ❀•✠• •══╦╗
https://youtube.com/channel/UCgpGp677PH-tKorzNuGwhrw
PAYMENT ? 
GOPAY :6282138899290
DANA 6282138899290 
PULSA :6282138899290
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler