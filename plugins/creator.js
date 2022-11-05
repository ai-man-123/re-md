function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('60102810046@s.whatsapp.net')}\nitem1.TEL;waid=60102810046:60102810046\nitem1.X-ABLabel:Busy.\nURL;My Web: https://github.com/ai-man-123\nEMAIL;Email Owner: lynxaiman@yahoo.com\nORG: NOT A BOT + NO SAVE\nTEL;My number bot;waid=60102810046:60102810046\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
