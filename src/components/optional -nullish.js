// ?. — optional chaining
// Обращается к свойству/методу только если значение не null/undefined
// Иначе возвращает undefined (без ошибки)

user?.name; // если user == null/undefined → undefined
user?.address?.city; // цепочка — останавливается на первом null/undefined
arr?.[0]; // для массивов
fn?.(); // для вызова функции

// ?? — nullish coalescing
// Возвращает правую часть только если левая == null/undefined
// (в отличие от ||, не срабатывает на 0, "", false)

value ?? "default"; // если value == null/undefined → "default"
0 ?? "default"; // → 0  (не "default"! потому что 0 не null/undefined)
0 || "default"; // → "default" (|| реагирует на любой falsy)

// Комбо — самый частый паттерн:
list?.find((item) => item.id === selectedId)?.name ?? "";
//   ^--- если list == null, дальше не идём         ^--- если name == undefined, берём ""
