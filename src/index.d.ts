export interface AgentDefinition {
  _id: string;
  author: string;
  version: string;
  name: string;
  description: string;
  icon: string;
  config: {
    params: Record<string, any>;
    return: Record<string, any>;
  };
}
