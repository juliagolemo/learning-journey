![Julia Golemo Learning Journey Deployment](/images/markdown/basics_network_schema.png)


# Opis schematu

## 1. Sieci LAN

### LAN 1:
- Sieć korzysta z podsieci `192.168.1.0/24` z routerem jako bramą domyślną `192.168.1.1`.
- Adresy urządzeń w LAN 1 to m.in.:
  - Laptop: `192.168.1.102`
  - Telefon: `192.168.1.104`
  - Komputer stacjonarny: `192.168.1.101`
- Router LAN 1 posiada publiczny adres WAN `203.0.113.1` i NAT przekierowujący ruch z sieci lokalnej na publiczny internet.

### LAN 2:
- Sieć korzysta z podsieci `192.168.2.0/24` z routerem jako bramą domyślną `192.168.2.1`.
- Adresy urządzeń w LAN 2 to m.in.:
  - Laptop: `192.168.2.103`
  - Telefon: `192.168.2.107`
  - Komputer stacjonarny: `192.168.2.105`
- Router LAN 2 posiada publiczny adres WAN `203.0.113.2` i NAT przekierowujący ruch z sieci lokalnej na publiczny internet.

---

## 2. Połączenie do internetu

- Oba routery mają publiczne adresy IP:
  - Router LAN 1: `203.0.113.1`
  - Router LAN 2: `203.0.113.2`
- Urządzenia w obu sieciach mają dostęp do internetu przez routery, które realizują translację adresów (NAT) między adresami prywatnymi a publicznymi.

---

## 3. VPN Gateway (w chmurze)

- Tunel VPN jest skonfigurowany za pomocą publicznego punktu końcowego VPN, który znajduje się w chmurze, z adresem `87.99.101.219`.
- Routery w LAN 1 i LAN 2 łączą się z tym adresem, aby zestawić zaszyfrowany tunel VPN. Dzięki temu urządzenia w obu sieciach mogą się komunikować, jakby znajdowały się w jednej wspólnej sieci.

---

## 4. Dlaczego VPN w chmurze jest poprawny?

- Wybór publicznego serwera VPN w chmurze eliminuje problem **double NAT**, który mógłby się pojawić, gdyby serwer VPN znajdował się lokalnie na jednym z routerów.
  - **Double NAT** występuje, gdy urządzenia w LAN 2 muszą przejść przez NAT swojego routera, a następnie dodatkowy NAT routera w LAN 1.
  - Może to powodować problemy z trasowaniem, konfiguracją portów i opóźnieniami.

---

## 5. Firewall i bezpieczeństwo

- Firewall został skonfigurowany na routerach oraz na serwerze VPN, aby filtrować ruch:
  - Połączenia VPN są zaszyfrowane (np. za pomocą IPsec lub OpenVPN).
  - Ruch z internetu do sieci LAN jest ograniczony i filtrowany, aby zapobiec nieautoryzowanemu dostępowi.

---

## 6. DNS

- Routery w obu LAN-ach mogą pełnić rolę DNS forwarderów, przekazując zapytania DNS do publicznych serwerów DNS, takich jak:
  - Google DNS: `8.8.8.8`
  - Cloudflare DNS: `1.1.1.1`
- Alternatywnie, urządzenia w sieciach LAN mogą bezpośrednio korzystać z publicznych serwerów DNS.

---

# Dlaczego schemat działa?

- Dzięki umieszczeniu VPN Gateway w chmurze:
  - Unikamy problemów z **double NAT**.
  - Mamy centralny, publiczny punkt końcowy, który umożliwia stabilną komunikację między routerami LAN 1 i LAN 2.
  - Ruch między sieciami LAN przechodzi przez zaszyfrowany tunel VPN, co zapewnia bezpieczeństwo.

