document.querySelectorAll('.new1btn button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.one').src = btn.getAttribute('data-src')

        const new1content = btn.getAttribute('data-bs-content');
        document.querySelector('.new1-txt').innerHTML = new1content

    })
})
document.querySelectorAll('.new2btn button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.one2').src = btn.getAttribute('data-src')

        const new2content = btn.getAttribute('data-bs-content');
        document.querySelector('.new2-txt').innerHTML = new2content

    })
})

const q = document.querySelector.bind(document)
const qa = document.querySelectorAll.bind(document)


document.querySelector('.a').addEventListener('click', () => {
    document.querySelector('.abox').classList.toggle('active');
})
document.querySelector('.abox-submit').addEventListener('click', () => {
    document.querySelector('.abox-body').innerHTML += `
    <p class="df">
        <span class="text-dark abox-mess2">${document.querySelector('.abox-input').value}</span>
    </p>
    `
    q('.abox-input').value = ''

    setTimeout(() => {
        document.querySelector('.abox-body').innerHTML += `
                <p>
                <span class="text-dark abox-mess">正在幫您連線真人客服</span>
            </p>
        `
        q('.abox-body').scrollTo({
            top: document.querySelector('.abox-body').scrollHeight,
            behavior: 'smooth'
            
        })
    }, 1000);
})   