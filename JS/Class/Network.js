class Network extends Info {
    constructor(name, state = true, ip = [10, 0, 0, 0], src = null) {
        super(name, state, src);
        this.maxBandWidth = 8589934592;
        this.bandWidth = 8589934592;
        this.listFile = [];
        this.ip = ip;
        this.listInfo = [];
    }

    send(file, size, ip) {
        let info = this.search(ip);
        if (this.bandWidth > size) {
            this.bandWidth -= size;
            info.receive(file, size);
            this.bandWidth = this.maxBandWidth;
        } else {
            this.listFile.push([file, size]);
        }
    }

    search(ip) {
        this.listInfo.forEach(function (element) {
            if (this.compare(ip, element)) {
                return element;
            }
        })
    }

    compare(self, other) {
        let count = 0;
        for (let i = 0; i < 4; i++) {
            if (self[i] == other[i]) {
                count++;
            }
        }
        return (count == 4);
    }
}

