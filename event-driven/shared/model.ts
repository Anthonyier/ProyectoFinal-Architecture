export class Model {
  create(item: any): any {
    return {};
  }

  findAll(): any[] {
    return [];
  }

  findOne(id: number): any | undefined {
    return {};
  }


  update(updatedItem: any): any | null {
    return {};
  }

  delete(id: number): boolean {
    return false;
  }

  executeQuery(sql: string, data?: any): boolean {
    return false;
  }

  fetchQuery(sql: string, data?: any): any[] {
    return [];
  }
}