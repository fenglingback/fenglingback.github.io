function randomBrightColor() {
    // 生成三个亮度较高的部分
    const brightParts = [
        Math.floor(Math.random() * 192) + 64, // 生成 64 到 255 的值
        Math.floor(Math.random() * 192) + 64, // 生成 64 到 255 的值
        Math.floor(Math.random() * 192) + 64  // 生成 64 到 255 的值
    ];

    // 确保至少有一个部分接近最大值
    if (Math.random() < 0.5) {
        brightParts[Math.floor(Math.random() * 3)] = Math.floor(Math.random() * 64) + 192; // 生成 192 到 255 的值
    }

    // 将各个部分转换为十六进制并拼接成颜色字符串
    return '#' + brightParts.map(part => {
        let hex = part.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

window.addEventListener('load', function () {
    const introductions = [
        'Hi, 我是cxfl 👋',
        '这里存放了我的all log、已验证与正在验证的个人定律，还有各种天马行空的idea ☝🤓',
        '⚡ 欢迎来访 ⚡'
    ];
    const dinglvs = [
        '任何事物，只有在它的发展初期是好的，包括人。'
    ];

    const ul = document.querySelector('.introduction');
    const dl = document.querySelector('.dinglv');

    for (let i = 0; i < introductions.length; i++) {
        const li = document.createElement('li');
        li.textContent = introductions[i];
        ul.appendChild(li);
    };

    const delay = 5000;

    let timeoutIds = [];

    // 在窗口关闭或刷新之前触发
    window.addEventListener('beforeunload', () => {
        timeoutIds.forEach(id => clearTimeout(id));
        timeoutIds = [];
    });

    function setLiContent(element, content, delayTime) {
        const id = setTimeout(() => {
            element.style.opacity = 0;

            setTimeout(() => {
                element.style.color = randomBrightColor();
                element.textContent = content;
                element.style.opacity = 1;
            }, 600);
        }, delayTime);

        timeoutIds.push(id);
    }

    function loop() {
        dinglvs.forEach((item, index) => {

            setLiContent(dl, item, index * delay);

        });

        // 重新启动循环
        setTimeout(loop, dinglvs.length * delay);
    }

    loop();
});