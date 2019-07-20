const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame("/로그 도움말 을 입력하세요!")
});

client.on("guildMemberRemove", member => {
    try {
        const channel = client.channels.get("599190322999721994");
        let embed = new Discord.RichEmbed()
            .setTitle("유저 퇴장")
            .setDescription(member.user.username + "님이 퇴장하셨습니다.")
            .setColor("#ff0000")
            .addField("퇴장하신 분", member.user.tag)
            .setFooter("Talkroom Logger", "https://cdn.discordapp.com/attachments/592986484332691456/598063057230495753/image0.png")
        member.user.send("안녕히 가세요... " + member.user.username + "님...")
        channel.send(embed);
    } catch (error) {

    }
});

client.on("guildMemberAdd", member => {
    try {
        const channel = client.channels.get("599190322999721994");
        let embed = new Discord.RichEmbed()
            .setTitle("유저 입장")
            .setDescription(member.user.username + "님이 입장하셨습니다!")
            .setColor("#0000ff")
            .addField("입장하신 분", member.user.tag)
            .setFooter("Talkroom Logger", "https://cdn.discordapp.com/attachments/592986484332691456/598063057230495753/image0.png")
        member.user.send("수다방 서버에 오신걸 환영합니다! 규칙 읽고 규칙체크 해 주시고, 열심히 활동해 주세요!")
        channel.send(embed);
    } catch (error) {

    }
});

client.on("messageDelete", msg => {
    try {
        const channel = client.channels.get("599190322999721994");
        let embed = new Discord.RichEmbed()
            .setTitle("메시지 삭제")
            .setDescription(msg.author.username + "님이 메시지를 삭제했습니다.")
            .setColor("#ff0000")
            .addField("삭제된 내용", msg.content)
            .addField("채널", "#" + msg.channel.name)
            .setFooter("Talkroom Logger", "https://cdn.discordapp.com/attachments/592986484332691456/598063057230495753/image0.png")
        channel.send(embed);
    } catch (error) {
        const channel = client.channels.get("599190322999721994");
        channel.send(":x: 오류!\n삭제 이벤트 기록에 실패하였습니다.");
    }
});

client.on("messageUpdate", (before, after) => {
    try {
        const channel = client.channels.get("599190322999721994");
        let embed = new Discord.RichEmbed()
            .setTitle("메시지 수정")
            .setDescription(after.author.username + "님이 메시지를 수정했습니다.")
            .setColor("#00ff00")
            .addField("수정 전 ", before.content)
            .addField("수정 후", after.content)
            .addField("채널", "#" + after.channel.name)
            .setFooter("Talkroom Logger", "https://cdn.discordapp.com/attachments/592986484332691456/598063057230495753/image0.png")
        channel.send(embed);
    } catch (error) {

    }
});

client.on('message', msg => {
    if (msg.content === '/로그 도움말') {
        let embed = new Discord.RichEmbed()
            .setTitle("로그봇 도움말")
            .setColor("#0000ff")
            .addField("소개", "안녕하세요! 수다방 서버 로그봇입니다.\n이 로그봇은 오직 수다방 서버에서만 사용 가능합니다!\n(잠만 이게 소개인가)")
            .addField("명령어", "/로그 핑")
            .addField("개발자", "! NamuTree0345#0345")
            .setThumbnail("https://cdn.discordapp.com/attachments/592986484332691456/598063057230495753/image0.png")
        msg.channel.send(embed)
    }
    if (msg.content === '/로그 핑') {
        msg.channel.send("로그봇 핑: " + client.ping.toString() + "s")
    }
});

client.login('TOKEN');
