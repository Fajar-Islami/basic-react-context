# Edisi Lupa React Context XD

Channel ArrayID

## Catatan

- props drilling = ngirim props terus menerus.
- kalau simpel pakai props, kalau dalam pakai context
- context ini juga dipakai di theme, kayk light/dark
- context seperti depedency injection.
- object yang diinject kedalam object lain disebut service
- object yang menerima object disebut client
- yang menjadi service di context adalah value
- client nya adalah yang menerima context (useContext)

- React context didesain untuk depdency injection bukan untuk state management. tapi bisa juga menggunakan dispatch, hanya untuk yang basic.
- state management global itu skala global. kalau state biasa itu skala komponen

- Ketika react context value nya berubah, maka komponen akan me render yang menggunakan value tadi.
- Komponen yang menggunakan value dari provider disebut consumer.
- Kegiatan ngambil data dari 1 context disebut subscription.

- React-Konteks tidak bisa detek data yg berubah saja, kalau recoil,redux bisa otomatis
- Split context, memisahkan data ke konteks lain untuk mengatasinya. unnecessary rerender.

- **React Context spesial untuk depedency injection bukan state management**

- State management orang akan lebih suka redux,jotai,recoil dll, tapi kalau pakai context sudah cukup gpp

## Cara buat context

1. Buat file context
2. Lalu export context nya
3. Lalu bungkus komponen yg perlu context (AppContext.Provider). Provider untuk set value.
4. value => memberi tahu data apa yang akan dikirimkan/diinject oleh provider
5. untuk pakai nya gunakan useContext(namaContext)

## useReducer

--> Alternatif dari useState. Kita bisa buat function yg ketika diinvoke akan memproduksi state baru. Bisa membuat state yang lebih kompleks.

`const [state, dispatch] = useReducer(first, second, third)`

first = untuk function yang mengubah nilai state  
second = initial state  
untuk set State di useReducer, lakukan difunction
function reducer setidaknya menerima 2 parameter yaitu (state,action)

- state = nilai state ini, ketika dieksekusi. nilainya sama dengan state.
- action = ngambil dari argumen dispatch action

useReducer sama seperti usState tidak otomatis merge.  
convention case reducer biasanya CAPSLOCK.
