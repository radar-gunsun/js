
async function move(frame)//Функция перемещения мыши к случайным ссылкам в документе
    {
        let qsa = (s) => frame.document.querySelectorAll(s);

        var mouseMoveCount=rndInt(1,4);//Делаем от одного до четырех перемещений мыши без кликов к любым случайным ссылкам

        for(x=0;x<mouseMoveCount;x++)
        {
            var els=qsa('a');//Выбираем все ссылки в документе. если нужны какие-то определенные ссылки, то вводим сюда соответствующий css-селектор.
            var el=rnd(els);//Из выбранных ссылок выбираем случайную

            await clickAsync(el,{onlyMove: true});//Перемещаем мышь к случайно выбранной ссылке. В случае необходимости скроллим документ.
            var pause=rndInt(1000,2500);//Делаем случайную паузу от 1 до 2.5 секунд между перемещениями мыши
            await waitAsync(pause);
        }
    }



        await paramsAsync("mouse",1);//Включаем фактическое перемещение мыши. Чтобы это работало, галочка "Разрешить использование мыши" должна быть включена в настройках сайта. Если не нужно, просто удаляем эту строчку.

    let qsa = (s) => frame.document.querySelectorAll(s);

    var baseUrl="http://catcut.net/adv/public.php?a=20853"; //Первый URL, на который нужно перейти
    var referrerUrls=["https://internet-profit.000webhostapp.com","https://internet-profit.000webhostapp.com/2020/09/08/%d0%be%d1%86%d0%b5%d0%bd%d0%b5%d0%bd%d1%8b-%d0%bf%d0%be%d1%81%d0%bb%d0%b5%d0%b4%d1%81%d1%82%d0%b2%d0%b8%d1%8f-%d0%b4%d0%bb%d1%8f-%d0%be%d1%82%d0%bd%d0%be%d1%88%d0%b5%d0%bd%d0%b8%d0%b9-%d1%80%d0%be","https://internet-profit.000webhostapp.com/2020/09/08/%d0%bd%d0%b0%d0%b7%d0%b2%d0%b0%d0%bd%d1%8b-%d1%80%d0%be%d1%81%d1%81%d0%b8%d0%b9%d1%81%d0%ba%d0%b8%d0%b5-%d1%80%d0%b5%d0%b3%d0%b8%d0%be%d0%bd%d1%8b-%d1%81-%d1%81%d0%b0%d0%bc%d1%8b%d0%bc%d0%b8-%d0%b2/","https://internet-profit.000webhostapp.com/2020/09/08/%d0%bc%d1%83%d0%b6%d1%87%d0%b8%d0%bd%d0%b0-%d0%bf%d0%be%d1%85%d1%83%d0%b4%d0%b5%d0%bb-%d0%bd%d0%b0-59-%d0%ba%d0%b8%d0%bb%d0%be%d0%b3%d1%80%d0%b0%d0%bc%d0%bc%d0%be%d0%b2-%d0%b7%d0%b0-15-%d0%bc%d0%b5/","https://internet-profit.000webhostapp.com/2020/09/08/%d0%b4%d0%be%d0%ba%d0%b0%d0%b7%d0%b0%d0%bd%d0%b0-%d0%b2%d1%8b%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%ba%d0%b0-%d0%b8%d0%bc%d0%bc%d1%83%d0%bd%d0%b8%d1%82%d0%b5%d1%82%d0%b0-%d0%bf%d0%be%d1%81%d0%bb%d0%b5/"];//Список URL-адресов, один из которых будет передан в качестве реферера.
    var referrerUrl=rnd(referrerUrls);//URL, который будет передан в качестве реферера.

    var frame=await navigateAsync(baseUrl,referrerUrl,{onFrame: "DOMContentLoaded"}); //делаем переход на заданный baseUrl с передачей referrerUrl в качестве реферера, а также ждем перезагрузки страницы

    var pause=rndInt(2500,5000);//Делаем случайную паузу от 2.5 до 5 секунд при загрузке главной страницы
    await waitAsync(pause);

    await move(frame);//Вызываем функцию случайного перемещения мыши по документу (описана выше)

    var clickCount=rndInt(1,3);//Делаем от одного до трех случайных кликов по ссылкам, содержащим слово jetswap

    for(x=0;x<clickCount;x++)
    {

        var els=qsa('a[href*=".ru"]');//Выбираем все ссылки, содержащие слово jetswap
        var el=rnd(els);//Из выбранных ссылок выбираем случайную

        await clickAsync(el,{frameReloadEvent: "DOMContentLoaded"});//Кликаем по случайно выбранной ссылке и ждем перезагрузку страницы
        var pause=rndInt(1000,3000);//Делаем случайную паузу от 1 до 3 секунд
        await waitAsync(pause);

        await move(frame);//Вызываем функцию случайного перемещения мыши по документу (описана выше)
    }

