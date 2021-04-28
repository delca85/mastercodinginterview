export function backspaceCompare(s: string, t: string): boolean {
    let sPointer = s.length - 1;
    let tPointer = t.length - 1;

    while (sPointer >= 0 || tPointer >= 0) {
        if (s[sPointer] === "#" || t[tPointer] === "#") {
            if (s[sPointer] === "#") {
                let sBackcount = 2;
                while (sBackcount > 0) {
                    sPointer--;
                    sBackcount--;
                    if (s[sPointer] === "#") {
                        sBackcount += 2;
                    }
                }
            }

            if (t[tPointer] === "#") {
                let tBackcount = 2;
                while (tBackcount > 0) {
                    tPointer--;
                    tBackcount--;
                    if (t[tPointer] === "#") {
                        tBackcount += 2;
                    }
                }
            }
        } else {
            if (s[sPointer] !== t[tPointer]) {
                return false;
            } else {
                sPointer--;
                tPointer--;
            }
        }
    }
    return true;
}
