interface LogData {
  project: string;
  channel: string;
  title: string;
  description?: string;
  data?: Record<string, string | number | boolean>;
  notify?: boolean;
}

class Dashlog {
  protected baseUrl: string;
  protected header: Record<string, string>;

  constructor(apiKey: string) {
    this.baseUrl = "https://api.dashlog.app/v1";
    this.header = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + apiKey,
    };
  }

  async log(data: LogData) {
    const response = await fetch(this.baseUrl + "/log", {
      method: "POST",
      headers: this.header,
      body: JSON.stringify(data),
    });

    return response.json();
  }
}

export function createDashlog(apiKey: string): Dashlog {
  return new Dashlog(apiKey);
}
