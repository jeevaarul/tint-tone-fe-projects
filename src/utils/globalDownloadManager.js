// Global download manager utility
class GlobalDownloadManager {
  constructor() {
    this.downloads = new Map();
  }

  addDownload(id, downloadInfo) {
    this.downloads.set(id, downloadInfo);
  }

  removeDownload(id) {
    this.downloads.delete(id);
  }

  getDownload(id) {
    return this.downloads.get(id);
  }

  getAllDownloads() {
    return Array.from(this.downloads.values());
  }
}

const globalDownloadManager = new GlobalDownloadManager();
export default globalDownloadManager;