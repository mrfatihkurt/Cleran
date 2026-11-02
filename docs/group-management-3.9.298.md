# Cleran: İsimlendirilebilir gruplar ve grup yöneticileri

Durum: **tasarım / geliştirme dalı; uygulama güncellemesi değildir**.

- Grup adını ve açıklamasını sistem yöneticisi serbestçe belirler; sabit kurum veya dış kullanıcı adlandırması yoktur.
- Her grubun bir atanmış sorumlu yöneticisi bulunur; isteğe bağlı yedek yönetici olabilir.
- Grup üyeleri, şirket kapsamı, ekran/işlem izinleri ve ALLOW/DENY kuralları ayrı tanımlanır.
- Gruba yönetici atanması sistem yöneticisi yetkisi ya da GİB/SGK şifresi görüntüleme hakkı oluşturmaz.
- Grup yöneticisi yalnız kendi grubunda ve kendisine devredilen sınırlar içinde işlem yapar; kendi hakkından fazlasını dağıtamaz.
- Explicit DENY > ALLOW, varsayılan erişim kapalı.
- Gizli bilgiler sadece ayrı kişi bazlı onay, şirket kapsamı ve denetimle erişilebilir olmalıdır.
- Tüm uygulama IPC kanalları ve veri sorgularında merkezi doğrulama zorunludur.
- Dışarıya Windows tam veri/kimlik bilgisi paketi gönderilmez; güvenli API ve portal kullanılır.

## Yayın koşulu
3.9.298'in uygulama içi güncelleme olarak duyurulabilmesi için veritabanı migrasyonu, kullanıcı yönetim ekranı, tüm ilgili IPC yetki kontrolleri, negatif erişim testleri, Windows temiz kurulum ve güncelleme testleri ve imzalı manifest tamamlanmalıdır. Bu dal, 3.9.297 üretim güncellemesini değiştirmez.
