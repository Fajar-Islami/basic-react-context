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

## Cara buat context

1. Buat file context
2. Lalu export context nya
3. Lalu bungkus komponen yg perlu context (AppContext.Provider). Provider untuk set value.
4. value => memberi tahu data apa yang akan dikirimkan/diinject oleh provider
5. untuk pakai nya gunakan useContext(namaContext)

## useReducer

--> Alternatif dari useState. Kita bisa buat function yg ketika diinvoke akan memproduksi state baru. Bisa membuat state yang lebih kompleks
