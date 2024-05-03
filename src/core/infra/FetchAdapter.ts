import HttpClient from './httpClient';

class FetchAdapter implements HttpClient {
  async get(url: string): Promise<any> {
    const response = await fetch(url);
    return await response.json();
  }
  async post(url: string, body: any): Promise<any> {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  }
  async put(url: string, body: any): Promise<any> {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  }
  async delete(url: string): Promise<any> {
    const response = await fetch(url, {
      method: 'DELETE',
    });
    return await response.json();
  }
}

export default FetchAdapter;
