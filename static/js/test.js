window.addEventListener('load', function () {
    const profile = [
        ['Hi, 我是cxfl 👋', '这里存放了我的all log、已验证与正在验证的个人定律，还有各种天马行空的idea ☝🤓', '⚡ 欢迎来访 ⚡'],
        ['任何事物，只有在它的发展初期是好的，包括人。']
    ];

    const ul = document.querySelector('.introduction');

    const len = Math.max(...profile.map(item => item.length));

    for (let i = 0; i < len; i++) {
        const li = document.createElement('li');
        ul.appendChild(li);
    };


    const lis = Array.from(ul.querySelectorAll('li'));
    const delay = 5000;

    let timeoutIds = [];

    // 在窗口关闭或刷新之前触发
    window.addEventListener('beforeunload', () => {
        timeoutIds.forEach(id => clearTimeout(id));
        timeoutIds = [];
    });

    function setLiContent(li, content, delayTime) {
        const id = setTimeout(() => {
            li.style.opacity = 0;

            setTimeout(() => {
                li.textContent = content || '';
                li.style.opacity = 1;
            }, 600);
        }, delayTime);

        timeoutIds.push(id);
    }

    function loop() {
        profile.forEach((item, index) => {
            lis.forEach((li, i) => {
                setLiContent(li, item[i], index * delay);
            });
        });

        // 重新启动循环
        setTimeout(loop, profile.length * delay);
    }

    loop();
});