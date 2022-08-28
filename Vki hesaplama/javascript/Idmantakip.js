export default class Idmantakip {
    constructor(root) {
        this.root = root;
        this.root.insertAdjacentHTML("afterbegin", Idmantakip.html());
    }
    static html() {
        return `<table class="tablo">
        <thead>
            <tr>
                <th>Tarih</th>
                <th>Egzersiz</th>
                <th>Süre</th>
                <th></th>
            </tr>
            <tbody class="idmanlar">
              
            </tbody>
            <tbody>
                <tr class="idman-satiri idman-satiri-ekle">
                    <td colspan="4">
                        <span class="idman-ekle">İdman ekle &plus;</span>
                    </td>
                </tr>
            </tbody>
        </thead>
    </table>`


    }

}