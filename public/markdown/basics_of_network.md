# Podstawy Sieci Komputerowych

## Budowa fizyczna sieci

W każdej sieci komputerowej możemy wyróżnić kilka podstawowych elementów:

- **Komputery i urządzenia końcowe** (np. komputery stacjonarne, laptopy, drukarki, telefony) – to sprzęt, który korzysta z sieci, aby się komunikować, pobierać dane czy udostępniać zasoby.
- **Przełączniki (switch)** – urządzenia sieciowe, które łączą komputery w sieci lokalnej (LAN). Switch wysyła dane tylko do tego konkretnego portu (urządzenia), do którego pakiet jest adresowany, co zapewnia wydajność i porządek ruchu w sieci.
- **Routery (rutery)** – urządzenia, które łączą różne sieci ze sobą. Przykładowo ruter łączy Twoją sieć domową (LAN) z siecią dostawcy Internetu (WAN), a dalej z całym Internetem. Router kieruje dane tam, gdzie powinny ostatecznie trafić.

## Rodzaje sieci

- **LAN (Local Area Network)** – sieć lokalna, obejmująca niewielki obszar, np. dom, biuro, szkołę. W LAN komputery łączą się ze sobą najczęściej poprzez switche, a dostęp do Internetu zapewnia ruter.
- **WAN (Wide Area Network)** – rozległa sieć, łącząca różne LAN-y na dużych obszarach geograficznych. Dla użytkownika domowego WAN to połączenie od dostawcy Internetu prowadzące do szerszego świata.
- **Internet** – ogólnoświatowa, publiczna sieć, w której różne urządzenia, serwery i sieci łączą się, korzystając ze standardowych protokołów i zasad komunikacji.

## Adres IP – identyfikator w sieci

Każde urządzenie w sieci posiada **adres IP**, czyli unikalny numer (identyfikator), dzięki któremu dane wiedzą, dokąd dotrzeć.

- **Statyczne adresy IP** – niezmienne, ułatwiają łączenie się z konkretnymi usługami i serwerami.
- **Dynamiczne adresy IP** – przydzielane tymczasowo przez serwer DHCP, zmieniają się w czasie, co jest wygodne w sieciach domowych.
- **Publiczne adresy IP** – widoczne w Internecie, to adres rutera łączącego LAN z siecią globalną.
- **Prywatne adresy IP** – używane tylko wewnątrz LAN (np. `192.168.x.x`), nie są bezpośrednio widoczne w Internecie.

W sieci LAN Twoje urządzenia mają prywatne adresy IP, a gdy łączysz się z Internetem, ruter „tłumaczy” te prywatne adresy na swój publiczny adres IP.

## Porty – gniazdka w wirtualnym świecie

Podobnie jak w komputerze masz porty USB, do których możesz podłączyć np. pendrive, w sieci każde urządzenie nasłuchuje na tzw. **portach**. Porty sieciowe to wirtualne kanały, przez które komunikują się aplikacje. Dzięki nim na jednym adresie IP może działać wiele usług jednocześnie, np.:

- Port 80 lub 443 to standardowe porty dla przeglądania stron WWW (HTTP i HTTPS).
- Port 25 to standardowo port dla poczty (SMTP).
- Port 22 to standardowy port dla połączeń SSH.

Możesz udostępniać porty na swoim komputerze, by ktoś z zewnątrz mógł się połączyć z Twoją usługą (np. serwerem WWW czy FTP). Możesz też je blokować, aby ograniczyć dostęp do swojego komputera z sieci i tym samym zwiększyć bezpieczeństwo.

## Firewall – strażnik ruchu sieciowego

**Firewall (zapora sieciowa)** to oprogramowanie lub sprzęt, który kontroluje, jakie dane mogą wpływać i wypływać z Twojego komputera lub sieci. Działa on jak strażnik na bramie, decydując, który ruch jest dozwolony, a który należy zablokować. Dzięki firewallowi możesz zapobiec:

- Nieautoryzowanemu dostępowi do Twoich zasobów,
- Pobraniu złośliwego oprogramowania,
- Narażaniu się na ataki z zewnątrz.

Firewall umożliwia tworzenie reguł, które blokują lub przepuszczają ruch na określonych portach i z określonych adresów IP, dzięki czemu możesz lepiej zabezpieczyć swoją sieć i urządzenia.

## Podsumowanie

- Sieci zbudowane są z urządzeń końcowych, switchy i routerów.
- LAN to sieć lokalna, WAN to sieć rozległa, a Internet to globalna sieć łącząca wszystko ze sobą.
- Adres IP to identyfikator urządzenia w sieci, przy czym mamy adresy prywatne i publiczne.
- Porty w sieci działają jak wirtualne gniazdka, umożliwiając jednoczesne działanie wielu usług na jednym adresie IP.
- Firewall kontroluje ruch sieciowy, chroniąc Cię przed nieuprawnionym dostępem i złośliwym oprogramowaniem.

Rozumiejąc te podstawy, łatwiej będzie Ci poruszać się w świecie sieci, lepiej zabezpieczać swoje urządzenia i świadomie korzystać z Internetu.


## Przykład z życia wzięty

Wyobraź sobie, że znajdujesz się w swoim domu, a w nim masz kilka urządzeń połączonych do domowej sieci Wi-Fi: laptopa, smartfon i telewizor Smart TV. Wszystkie te urządzenia otrzymują od Twojego routera **prywatne adresy IP**, np. `192.168.0.101` dla laptopa, `192.168.0.102` dla smartfona i `192.168.0.103` dla telewizora. Te numery adresów są ważne tylko w obrębie Twojej sieci domowej (LAN).

Gdy chcesz obejrzeć film na laptopie, korzystając z platformy streamingowej w Internecie, Twój laptop wysyła żądanie do routera, aby połączył go z serwerami dostawcy usługi w globalnej sieci (Internet). Router otrzymuje to żądanie i „tłumaczy” je, korzystając z funkcji NAT (Network Address Translation). Zamienia on Twoje prywatne IP (`192.168.0.101`) na **publiczny adres IP** routera (np. `83.12.45.67`), który jest widoczny z zewnątrz. 

W Internecie wszyscy widzą Twój ruch pod tym publicznym adresem IP – serwer streamingowy odsyła dane z filmem pod `83.12.45.67`. Router, wiedząc, że to połączenie przyszło z Twojego laptopa, przywraca dane do stanu pierwotnego i przekazuje je wewnątrz LAN do adresu `192.168.0.101`. W ten sposób Twój laptop otrzymuje odpowiedni strumień wideo, który możesz od razu oglądać.

W międzyczasie, Twój smartfon i telewizor też mogą łączyć się z Internetem w podobny sposób, korzystając z tej samej sieci i publicznego IP routera. Każde urządzenie ma „swój” prywatny adres w sieci lokalnej, a na zewnątrz wszystkie korzystają z jednego publicznego IP routera.

Gdybyś chciał uruchomić własny serwer w domu (np. serwer gier), mógłbyś zadecydować o otwarciu konkretnego **portu** na routerze, który przekieruje ruch z Internetu do Twojego komputera. Równocześnie, by zwiększyć bezpieczeństwo, możesz użyć **firewalla**, który zablokuje niepożądane próby dostępu z zewnątrz do innych portów i usług. Dzięki temu masz kontrolę nad tym, co i w jaki sposób może przechodzić przez Twoją sieć.

Tak więc, w tym prostym przykładzie widać, jak różne komponenty sieci – prywatne adresy IP, publiczny adres IP, porty i firewall – współpracują, aby zapewnić Ci płynny dostęp do Internetu oraz bezpieczeństwo i kontrolę nad tym, co dzieje się w Twojej domowej sieci.
