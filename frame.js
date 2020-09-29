    await navigateAsync('https://example.com/'); // Условно на данном сайте находится несколько фреймов.

    // Последовательно извлекаем необходимый фрейм. 
    // Сначала выбираем фрейм с индексом 0, затем вложенный в него фрейм, содержащий в URL текст ?query, затем вложенный в него фрейм с индексом 1
    let frame = await selectFrameAsync([0, '?query', 1]); 


    if(frame === null) {
        throw 'фрейм не был найден.';
    }
    else {
        // Выполняем следующие команды..
    }

    let activeTab=await commandAsync("get::activetab");//получить номер активной вкладки браузера

    let frame = await selectFrameAsync([],activeTab); //получить главное окно активной вкладки