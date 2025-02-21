const button = document.querySelector("#btn");
const horoscope = [
    "Сьогодні ви просто зобов'язані почати нове життя без шкідливих звичок і уподобань, і вам це вдасться, тим більше якщо ви бажаєте змін на краще у своєму самопочутті. Нехай хоч на день.",
    "Постарайтеся всіма силами не піддаватися метушні, через постійні стресові ситуації велика небезпека підвищеного артеріального тиску, а також загострення проблем із серцем.",
    "Дихання стане головною темою для роздумів та докладання сил. Дихайте повільно і правильно, на повні груди і по можливості свіжим чистим хвойним повітрям.",
    "Намагайтеся не експериментувати з новими екзотичними продуктами, особливо з фруктами та овочами. Хоч вам хочеться зараз свіжого та смачного, віддайте перевагу банальному яблуку.",
    "Ваше самопочуття може багато в чому залежати від стану вашого емоційного тла, тому навчитеся контролювати свої емоції та не дати негативу взяти над вами гору. Намагайтеся у всьому побачити хороше.",
    "Не забувайте про збалансоване харчування та про достатні фізичні навантаження. Вам рекомендовано додавати у звичайні страви різні приправи, наприклад, розмарин або куркуму, це не тільки збагатить смак, але й допоможе вам покращити травлення та провести профілактику виразки шлунка.",
    "Ваша шкіра може бути дуже здивована тому, що ви будете надавати їй підвищену увагу, однак зробити це буде необхідно, оскільки в іншому випадку, швидкі проблеми з нею неминучі.",
    "Довіряйте своїй інтуїції, особливо якщо рекомендація чи поставлений діагноз лікарів видається вам необґрунтованим. Якщо виникли сумніви, краще буде ще раз перевірити.",
    "Намагайтеся уникати вживання сильнодіючих препаратів, особливо якщо ви попередньо не порадилися з вашим лікарем. Печінка це може не оцінити.",
    "Для вас на користь піде морозиво. Постарайтеся зробити все можливе для того, щоб не застудитися і не погладшати від передозування.",
    "Вам слід було б одягатися за погодою, особливо, якщо ви нещодавно перенесли якесь застудне захворювання. Щоб не зіткнутися з його повторним появою, продовжуйте підтримувати свій організм.",
    "Сумний вираз обличчя не допоможе ні вам, ні вашому організму відчути себе краще. Тому зірки радять вам, незважаючи на всі труднощі, які мають місце у вашому житті, посміхатися."
]
button.addEventListener("click", ()=> {
    let randomHoroscope = horoscope[Math.floor(Math.random() * horoscope.length)];
    Swal.fire({
        title: (randomHoroscope),
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })
})