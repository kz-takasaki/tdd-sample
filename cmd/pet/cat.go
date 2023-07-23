package pet

type Cat struct {
	sound string
}

func NewCat(sound string) *Cat {
	return &Cat{sound: sound}
}

func (c *Cat) Cry() string {
	return "ニャーニャー"
}
