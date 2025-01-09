
export const Favicons = () => {
  return (
    <>
      {/* <!-- Стандартний favicon для браузерів --> */}
      <link rel="icon" href="/favicons/favicon.ico" sizes="any" type="image/x-icon" />

      {/* <!-- PNG для сучасних браузерів --> */}
      <link rel="icon" href="/favicons/favicon-32x32.png" sizes="32x32" type="image/png" />
      <link rel="icon" href="/favicons/favicon-16x16.png" sizes="16x16" type="image/png" />
      <link rel="icon" href="/favicons/favicon-96x96.png" sizes="96x96" type="image/png" />

      {/* <!-- Apple Touch Icon для iOS --> */}
      <link rel="apple-touch-icon" href="/favicons/apple-icon.png" sizes="192x192" />

      {/* <!-- Android Chrome --> */}
      <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />

      <meta name="msapplication-TileColor" content="#ffffff" />

      {/* <!-- Theme color для мобільних браузерів --> */}
      <meta name="theme-color" content="#ffffff" />

      <link rel="manifest" href="/favicons/manifest.json" />
    </>
  )
}
