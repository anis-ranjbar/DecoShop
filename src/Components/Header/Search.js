import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import debounce from "lodash.debounce";

const Search = () => {
  const [search, setSearch] = useState("");  // مقدار جستجو
  const [items, setItems] = useState([]);            // لیست آیتم‌های دریافت‌شده از API
  const [loading, setLoading] = useState(false);     // وضعیت بارگذاری
  const [error, setError] = useState(null);          // مدیریت خطا

  // تابع برای درخواست به API و دریافت داده‌ها
  const fetchItems = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.example.com/items?q=${query}`);
      setItems(response.data);  // داده‌ها را در state ذخیره کنید
    } catch (err) {
      setError("خطایی رخ داده است.");
    } finally {
      setLoading(false);
    }
  };

  // استفاده از debounce برای کاهش تعداد درخواست‌ها
  const debouncedFetchItems = useCallback(
    debounce((query) => fetchItems(query), 500), []  // تاخیر 500 میلی‌ثانیه
  );

  // هر بار که عبارت جستجو تغییر کند، تابع جستجو را فراخوانی کنید
  useEffect(() => {
    if (search) {
      debouncedFetchItems(search);  // درخواست با استفاده از debounce
    } else {
      setItems([]);  // اگر ورودی خالی است، نتایج پاک شود
    }
  }, [search, debouncedFetchItems]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}  // ذخیره عبارت جستجو
      />

      {loading && <p>در حال بارگذاری...</p>}
      {error && <p>{error}</p>}

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
