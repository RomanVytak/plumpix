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
  handleChange: (e: any) => void
  formData: Record<string, string>
};

export const FormLabels: React.FC<FormLabelsProps> = ({ labels, handleChange, formData }) => {
  return Object.entries(labels).map(([key, label]) => {
    switch (label.type) {
      case 'text':
        return <Input
          {...label}
          handleChange={handleChange}
          name={key}
          key={key}
          value={formData[key]}
        />
      case 'textarea':
        return <Textarea
          {...label}
          handleChange={handleChange}
          name={key}
          key={key}
          value={formData[key]}
        />
      default:
        break;
    }
  })
}
