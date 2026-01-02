import type { GraphNode } from './graph-node'

export interface GraphEdge
{
  to: GraphNode
  weight: number
}
