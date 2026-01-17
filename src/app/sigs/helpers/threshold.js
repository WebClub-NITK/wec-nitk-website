export default function thresolds (cutoffs) {
    function getCurrent (y) {
        let i
        for (i=0 ; i<cutoffs.length ; i++) {
            if (y < cutoffs[i]) return i
        }
        return i
    }

    return getCurrent
}