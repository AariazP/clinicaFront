export class HorarioDTO {
    id: number;
    dia: number;
    horaInicio: string;
    horaSalida: string;

    /**
     * //TODO Validaciones del backend:
     *
     *   @Pattern(regexp = "\\d+") Long id,
     *         @NotNull @Max(7) @Min(1) byte dia,
     *         @NotNull @Length(max = 5) // TODO @Pattern(regexp = "[1-9]:") maybe bad
     *         String horaInicio,
     *         @NotNull @Length(max = 5) // TODO @Pattern(regexp = "[1-9]:") maybe bad
     *         String horaSalida
     */
}
