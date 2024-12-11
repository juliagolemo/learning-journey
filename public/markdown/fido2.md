# FIDO 2 & Security Keys

FIDO2 is a strong authentication standard that enhances security through the use of public-key cryptography. It eliminates the need for passwords and protects against phishing and man-in-the-middle attacks.

YubiKeys, popular FIDO2-compliant security keys, generate unique **asymetric public-private key pairs** for each service. The private key is securely stored on the device and never leaves it, while the public key is shared with the service during registration.

The private key can decrypt data encrypted with the public key, and the public key can decrypt data encrypted with the private key.

Authentication involves a challenge-response mechanism: the server sends a cryptographic challenge, and the YubiKey signs it using the private key. This ensures the user is legitimate.

FIDO2 includes origin checking, validating the domain (origin) of the requesting service, ensuring the key is only used with the intended domain. Additionally, attestation proves the authenticity of the security key, confirming it is genuine hardware.

These features, combined with its domain binding, make FIDO2 resilient to phishing attacks and resistant to man-in-the-middle exploits, offering unparalleled security for online accounts.

![fido2](/images/markdown/fido2.png)