import "./Items.css";
// ссылки с заглушками добавлять не стала
// стиль текста в макете не поддерживает русский язык, выбрала похожий


export const Items = () => {
  return (
    <ul className="items">
      <li>Продукты и услуги</li>
      <li>Биржевая информация</li>
      <li>Ход торгов</li>
      <li>Документы</li>
      <li>Обучение</li>
      <li>Медиа</li>
      <li>О компании</li>
    </ul>
  );
};
