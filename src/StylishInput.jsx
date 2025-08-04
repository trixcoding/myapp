import { useState } from 'react';

function StylishInput() {
  const [value, setValue] = useState('');

  const isValid = value.length >= 8;

  return (
    <div className="w-full max-w-sm mx-auto mt-10">
      <label className="block mb-2 text-sm font-medium text-gray-700">رمز عبور</label>
      
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="حداقل ۸ کاراکتر وارد کنید"
        className={`w-full px-4 py-2 rounded-lg outline-none transition-all duration-300
          text-sm
          placeholder:text-gray-400
          ${value.length === 0 ? 'border border-gray-300' : ''}
          ${!isValid ? 'border border-red-500 bg-red-50 focus:ring-2 focus:ring-red-300' 
                     : 'border border-emerald-500 bg-emerald-50 focus:ring-2 focus:ring-emerald-300'}`}
      />

      {!isValid && value.length > 0 && (
        <p className="mt-1 text-xs text-red-500 font-medium animate-pulse">
          حداقل باید ۸ کاراکتر وارد کنید
        </p>
      )}
    </div>
  );
}

export default StylishInput;
