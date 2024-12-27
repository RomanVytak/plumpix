import { Input } from './input'
import { Textarea } from './textarea'

type Label = {
  title: string,
  error?: string,
  type: string,
  placeholder?: string,
  required?: boolean
}

export type Labels = Record<string, Label>;

type FormLabelsProps = {
  labels: Labels;
};

export const FormLabels: React.FC<FormLabelsProps> = ({ labels }) => {


  return Object.entries(labels).map(([key, label]) => {
    switch (label.type) {
      case 'text':
        return <Input {...label} name={key} key={key} />
      case 'textarea':
        return <Textarea {...label} name={key} key={key} />
      default:
        break;
    }
  })

}
