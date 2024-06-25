export default function Impressum() {
  return (
    <main className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
      <div className="mt-4 font-palanquin text-darkblue">
        <h3 className="text-h-md md:text-h-lg ">Impressum</h3>
        <div className="md:mt-8 mt-4 font-palanquin text-darkblue">
          <p className="md:text-h-sm text-h-xs">iSTEP</p>
          <p className="md:text-h-xs text-p-lg !font-thin mt-2">
            Weingartenstrasse 6
          </p>
          <p className="md:text-h-xs text-p-lg !font-thin mb-4">
            3417, Rüegsau
          </p>
          <a
            className="md:text-h-xs text-p-lg !font-thin underline"
            href="mailto:info@istep.ch"
          >
            info@istep.ch
          </a>
        </div>
        <div className="md:mt-16 mt-8">
          <h5 className="text-h-sm md:text-h-md">Haftungsausschluss</h5>
          <p className="md:text-p-lg text-p-xs">
            Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen
            Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und
            Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor
            wegen Schäden materieller oder immaterieller Art, welche aus dem
            Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten
            Informationen, durch Missbrauch der Verbindung oder durch technische
            Störungen entstanden sind, werden ausgeschlossen. Alle Angebote sind
            unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der
            Seiten oder das gesamte Angebot ohne besondere Ankündigung zu
            verändern, zu ergänzen, zu löschen oder die Veröffentlichung
            zeitweise oder endgültig einzustellen.
          </p>
        </div>
        <div className="md:mt-16 mt-8">
          <h5 className="text-h-sm md:text-h-md">
            Haftungsausschluss für Links
          </h5>
          <p className="md:text-p-lg text-p-xs">
            Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
            Verantwortungsbereichs. Es wird jegliche Verantwortung für solche
            Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
            erfolgen auf eigene Gefahr des jeweiligen Nutzers.
          </p>
        </div>
        <div className="md:mt-16 mt-8">
          <h5 className="text-h-sm md:text-h-md">Urheberrechte</h5>
          <p className="md:text-p-lg text-p-xs">
            Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos
            oder anderen Dateien auf dieser Website, gehören ausschliesslich
            oder den speziell genannten Rechteinhabern. Für die Reproduktion
            jeglicher Elemente ist die schriftliche Zustimmung des
            Urheberrechtsträgers im Voraus einzuholen.
          </p>
        </div>
      </div>
    </main>
  );
}
