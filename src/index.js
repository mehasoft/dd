import { formatData } from "./formatter.js";

/**
 * Laravel'in dd() fonksiyonuna benzer şekilde çalışır.
 * Veriyi konsola yazdırır ve işlemi sonlandırır.
 * @param {...any} data - Yazdırılacak veri
 */
export function dd(...data) {
    console.log(formatData(data));
    process.exit(1); // Programı sonlandır
}
