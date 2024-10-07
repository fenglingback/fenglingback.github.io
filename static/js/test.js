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