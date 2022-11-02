import { useEffect, useState } from 'react'
import { Card, Typography } from '@okp4/ui'
import type { DeepReadonly, UseState } from '@okp4/ui'
import './dataspaceEntities.scss'
import type { DatasetDto } from '../../../dto/DatasetDto'
import type { ServiceDto } from '../../../dto/ServiceDto'

type DataverseEntity = DatasetDto | ServiceDto

const fetchEntities = async (id: string): Promise<DataverseEntity[]> => {
  return await Promise.all(
    ['dataset', 'service'].map(
      async (type: DeepReadonly<string>): Promise<DataverseEntity> =>
        fetch(`/api/dataverse/dataspace/${id}/${type}/`).then(async (res: DeepReadonly<Response>) =>
          res.ok ? await res.json() : []
        )
    )
    // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  ).then((arrays: DataverseEntity[]) => arrays.flat())
}

const DataspaceEntities = ({ dataspaceId }: DeepReadonly<{ dataspaceId: string }>): JSX.Element => {
  const [entities, setEntities]: UseState<DataverseEntity[]> = useState<DataverseEntity[]>([])

  useEffect(() => {
    fetchEntities(dataspaceId).then(setEntities)
  }, [dataspaceId])

  return (
    <div className="okp4-dashboard-dataspace-content">
      {entities.map(
        (entity: DeepReadonly<DataverseEntity>): JSX.Element => (
          <div className="okp4-dataspace-card" key={entity.id}>
            <Card
              footer={
                <div className="okp4-dataspace-card-footer">
                  <Typography>{entity.name}</Typography>
                </div>
              }
              header={
                <div className="okp4-dataspace-card-header">
                  <Typography>{entity.type}</Typography>
                </div>
              }
            />
          </div>
        )
      )}
    </div>
  )
}

export default DataspaceEntities
