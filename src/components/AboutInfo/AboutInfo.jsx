import s from "./AboutInfo.module.css";

export default function AboutInfo() {
  return (
    <div className={s.info}>
      <picture className={s.mainImageWrapper}>
        <source
          srcSet="https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_522,h_706,c_fill/AboutPageDog_gxmfy0.jpg"
          media="(min-width: 1440px)"
        />
        <source
          srcSet="https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_291,h_540,c_fill/AboutPageDog_gxmfy0.jpg"
          media="(min-width: 768px)"
        />
        <img
          src="https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_358,h_324,c_fill/AboutPageDog_gxmfy0.jpg"
          alt="Dog Image"
          className={s.mainImage}
        />
      </picture>

      <div className={s.textBlock}>
        <h2 className={s.title}>
          Тут тварини знаходять надію, а люди — справжніх друзів
        </h2>

        <div className={s.descriptionBlock}>
          <p className={s.descriptionSubtitle}>
            Наш притулок — дім, де тварини відчувають тепло, турботу і вчаться
            довіряти людям.
          </p>

          <p className={s.descriptionSubtitle}>
            Ми лікуємо, годуємо та готуємо їх до зустрічі з новою родиною.
          </p>

          <p className={s.descriptionSubtitle}>
            Разом ми даруємо не лише дах і їжу, а головне — любов і дім, на який
            вони чекають.
          </p>
        </div>

        <div className={s.descriptionTablet}>
          <p className={s.subtitleTablet}>
            Наш притулок — це дім, де кожна тварина відчуває тепло і турботу та
            вчиться довіряти людям. Ми приймаємо тих, хто залишився сам, і даємо
            шанс на нове життя.
          </p>

          <p className={s.subtitleTablet}>
            Щодня ми лікуємо, годуємо та готуємо підопічних до зустрічі з новою
            родиною. Кожен хвіст для нас — це життя, яке ми прагнемо зробити
            кращим.
          </p>

          <p className={s.subtitleTablet}>
            Разом ми можемо подарувати їм не лише дах і їжу, а головне — любов і
            дім, на який вони чекають.
          </p>
        </div>

        <div className={s.descriptionDesktop}>
          <p className={s.subtitleDesktop}>
            Наш притулок був створений для того, щоб допомогти безпритульним
            тваринам знайти турботу та безпечне місце. Ми працюємо щодня, щоб
            забезпечити чотирилапим друзям належний догляд, лікування та шанс на
            нове життя.
          </p>

          <p className={s.subtitleDesktop}>
            Ми займаємося не лише тимчасовим утриманням, а й активно шукаємо
            постійні домівки для тварин. Кожен наш підопічний отримує необхідну
            ветеринарну допомогу, харчування та увагу, щоб адаптуватися до нових
            умов і стати готовим до зустрічі з майбутньою родиною.
          </p>

          <p className={s.subtitleDesktop}>
            Наша команда вірить, що кожна тварина заслуговує на любов і тепло.
            Ми відкриті до співпраці та вдячні кожному, хто підтримує нас
            волонтерством, фінансовою допомогою або простим добрим словом.
          </p>
        </div>

        <div className={s.startBlock}>
          <h3 className={s.startTitle}>Як усе почалося</h3>
          <p className={s.startSubtitle}>
            Наш притулок з’явився у 2017 році, щоб допомогти безпритульним
            тваринам знайти дім. Починалося з кількох собак і котів, а сьогодні
            ми піклуємося про десятки підопічних. За чей час ми вже маємо:
          </p>

          <p className={s.startDesktopSubtitle}>
            Наш притулок з’явився у 2017 році, коли ми вирішили об’єднати
            зусилля небайдужих людей для допомоги безпритульним тваринам. Все
            почалося з кількох собак і котів, які потребували прихистку, а
            сьогодні ми допомагаємо десяткам тварин знайти дім та відчути
            турботу. Ми створили це місце з однією метою — дати шанс кожному
            чотирилапому на безпечне життя і люблячу родину. За цей час ми вже
            маємо:
          </p>
        </div>
      </div>
    </div>
  );
}
