# HOMEWORK_1_AdvancedJS
My homework in DanIt
 
 1.Поясніть своїми словами, як ви розумієте, як працює прототипне наслідування в Javascript
Прототипне наслідування дозволяє об'єктам успадковувати властивості та методи з іншого об'єкта. При створенні об'єкту, він успадковує властивості та методи з його прототипу. Якщо властивість або метод не знайдено на самому об'єкті, JavaScript шукає їх у ланцюжку прототипів, поки не знайде або не досягне кінця ланцюжка.

2.Для чого потрібно викликати super() у конструкторі класу-нащадка?
Щоб виконати його батьківський (базовий) конструктор,інакше об'єкт для this не буде створено.