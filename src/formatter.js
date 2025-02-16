import util from "util";

/**
 * Konsolda renklendirilmiş çıktı oluşturur.
 * @param {any} data - Yazdırılacak veri
 * @returns {string}
 */
export function formatData(data) {
    const cyan = "\x1b[36m"; // Açık mavi renk
    const reset = "\x1b[0m"; // Renk sıfırlama

    return (
        cyan + "🛑 DEBUG DUMP\n" + util.inspect(data, { colors: true, depth: null }) + reset
    );
}
