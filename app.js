
        // let year = ['spring', 'summer', 'autumn', 'winter'];
        // year.forEach((item, index ) =>{
        // //  перечисляет элементы массива
        //     console.log(item, index);
        // })
// -------------------------------------------------------------------------------------------------------------------------
        // let a = '12';
        // let b = '1';
        // let c = a + b;

        // console.log(c);
        // примеры 
// -------------------------------------------------------------------------------------------------------------------------
        // let a = 12;
        // let b = 5;

        // if(a > 20 && b < 6) {
        //         // Если а больше нуля и б меньше 6 будет true и сработает этот вариант
        //         console.log("Hello");
        // } else {
        //         console.log('a is false');
        // }

        // примеры использования true , else 
// -------------------------------------------------------------------------------------------------------------------------
        // let person = {
        //         firstName: "John",
        //         lastName: "Smith",
        //         age: 30
        // };

        // console.log(person.firstName);

        // пример использования обьектов и вызова обьекта 
        // -------------------------------------------------------------------------------------------------------------------------

        // function addTwoNumbers(a, b) {
        //         let c = a + b;  
        //         console.log(c);
                // Все взаимодейстия с функцией - в функции
        // }
        // Создание функции

        // addTwoNumbers(2, 5);
        // addTwoNumbers(12 ,15);
        // выведет 2 числа подряд - 7 и 27
        // -------------------------------------------------------------------------------------------------------------------------

        //   function addTwoNumbers(a, b) {
        //         let c = a + b;  
        //         return c;
                // Все взаимодейстия с функцией - в функции
        // }
        // Создание функции

//        let resultA = addTwoNumbers(2, 5);
//        let resultB =addTwoNumbers(12 ,15);

//        console.log(resultA);
//        Так делать , если нужен один результат 

        // let result = addTwoNumbers(addTwoNumbers(2, 5), 10);

        // console.log(result);

        // Т.к. тут 2 функции , вначале складываеться 2 и 5 , а потом добавляеться 10 - итог 17
        // -------------------------------------------------------------------------------------------------------------------------

        // let person = {
        //         firstName: "John",
        //         lastName: "Smith",
        //         age: 30,
        //         getName: function() {
        //         let name = this.firstName + ' ' + this.lastName;
        //         return name;
                // Функция ссылаеться на первый обьект имя и на второй обьект - фамилия , складывает их , в данном случае записывает рядом и следующая строчка возвращает получившееся значение
        //         }
        // };

        // console.log(person.getName());
        // ссылаеться на обьект с параметрами и вытаскивает значение функции
        // -------------------------------------------------------------------------------------------------------------------------

        // let numbers = [1, 12, 8, 121, 78, 92, 12, 7, 55];


        // function findLargest(n) {
        //         for(let i = 0; i < n.length; i++) {
                        // i = i , если i меньше длинны массива (количества чисел) , то i++
                        // console.log(n[i]);
                        // Вывод
        //         }
        // }

        // findLargest(numbers);
        // Выводит числа из массива один за одним
        // -------------------------------------------------------------------------------------------------------------------------

        // let numbers = [1, 12, 8, 121, 78, 92, 12, 7, 55];

        // let largestNumber = 0;

        // function findLargest(n) {
        //         for(const number of n) {
        //               if(number > largestNumber) {
        //                 largestNumber = number;
                        // если число оказываеться больше - оно заменяет меньшее и так до конца
                //       }
                // }
                // return largestNumber;
                // Возвращает 
        // }

        //         console.log(findLargest(numbers))
                // вывод функции

        Vue.createApp({

                data(){
                        return{
                                stickies: []
                                // в зависимости от количества '' в массиве может быть любое начальное количество стиков , в данном случае их нет и количество начальных - 0
                        };
                },
                mounted(){
                        if ('stickies' in localStorage) {
                                // если обьект в хранилище
                            this.stickies = JSON.parse(localStorage.getItem('stickies'));    
                                //     возвращает   
                        }
                        window.addEventListener('keyup', () => {
                                let data = JSON.stringify(this.stickies);
                                // сохраняет в data
                                localStorage.setItem('stickies', data);
                        });
                },
                methods: {
                        addStickie(){
                                this.stickies.push({text: '', color: '#7fffd4'});
                        },
                        deleteStickie(index) {
                                // console.log(index);
                                if(this.stickies[index].text == ''){
                                // если текстовая строка этого стика пустая - удаляет стик
                                // == - сравнивает
                                this.stickies.splice(index, 1);
                                // удаляет по нажатию один стик
                                }
                        },
                        changeColor(index) {
                                const colors = ['#6eed2a', '#f989d6', '#20dff8', '#7fffd4'];
                                const currentColor = this.stickies[index].color;      
                                const indx = colors.indexOf(currentColor);
                                const newColorIndx = (indx + 1) % colors.length;
                                this.stickies[index].color = colors[newColorIndx];
                        }
                }

        }).mount('#app');
        // Фреймворк